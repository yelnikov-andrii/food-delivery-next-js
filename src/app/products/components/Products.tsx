'use client'
import React, { useEffect, useState } from 'react';
import styles from './products.module.scss';
import { Search } from '@/components/ui/searchBlockComponents/Search';
import { TypeList } from '@/components/ui/typeListComponent/TypeList';
import { useInput } from '@/hooks/form/useInput';
import { ProductsLoadMore } from './LoadMore/ProductsLoadMore';
import { FoundOrNotFoundProducts } from './FoundOrNotFound/FoundOrNotFoundProducts';
import { sortOptions } from '@/data/main';
import { useFilterSortAndSearchProducts } from '@/hooks/products/useFilterSortAndSearchProducts';

interface Props {
    products: ProductInt[];
    name: string;
    category: string;
}

export const Products: React.FC<Props> = ({ products, name, category }) => {
    const [filterType, setFilterType] = React.useState('Усі');
    const [searchInput, setSearchInput] = React.useState('');
    const [selectedOption, setSelectedOption] = React.useState('');

    const [page, setPage] = React.useState(1);

    const appliedInput = useInput(searchInput);

    const { searchedProducts, sortedProducts, filteredProducts } = useFilterSortAndSearchProducts(products, appliedInput, selectedOption, filterType);
    const [displayedProducts, setDisplayedProducts] = useState<ProductInt[]>([]);
    const countOfProductsOnPage = 9;

    const countOfPages = Math.ceil(sortedProducts.length / countOfProductsOnPage);

    const [categories, setCategories] = useState<any>([]);

    function getCategories() {
        const categoriesSet = new Set();

        for (const product of products) {
            product?.categories?.forEach(category => {
                if (!categoriesSet.has(category)) {
                    categoriesSet.add(category);
                }
            })
        }

        const arr = Array.from(categoriesSet);
        if (arr?.length) {
            arr.unshift('Усі');
        }
        
        setCategories(arr);
    }

    useEffect(() => {
        getCategories();
    }, []);

    useEffect(() => {
        const countOfProductsToAdd = page * countOfProductsOnPage;
        const productsToAdd = sortedProducts.slice(0, countOfProductsToAdd);
        setDisplayedProducts(productsToAdd);
    }, [sortedProducts, page, selectedOption]);

    function loadmore() {
        if (page === countOfPages) {
            return;
        }
        setPage(prev => prev + 1);
    }

    return (
        <>
            <div>
                <h1 className={styles.products__h1}>
                    {name}
                </h1>
            </div>
            <div>
                <div className={styles.products__searchWrapper}>
                    <Search
                        searchInput={searchInput}
                        setSearchInput={setSearchInput}
                        options={sortOptions}
                        selectedOption={selectedOption}
                        setSelectedOption={setSelectedOption}
                    />
                </div>
                <div className={styles.products__typesWrapper}>
                    <TypeList
                        filterType={filterType}
                        setFilterType={setFilterType}
                        types={categories}
                        setPage={setPage}
                    />
                </div>
                {sortedProducts.length !== 0 && (
                    <h4 className={styles.products__h4}>
                        Кількість продуктів: {appliedInput ? searchedProducts.length : filteredProducts.length}
                    </h4>
                )}
            </div>
            <div className={styles.products}>
                <FoundOrNotFoundProducts
                    sortedProducts={displayedProducts}
                    category={category}
                />
            </div>
            {page < countOfPages && (
                <ProductsLoadMore
                    loadmore={loadmore}
                />
            )}
        </>
    );
};

