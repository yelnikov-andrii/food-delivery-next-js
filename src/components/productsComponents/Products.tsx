'use client';
import React from 'react';
import { useRequest } from '@/hooks/request/useRequest';
import styles from './products.module.scss';
import { Search } from '../ui/searchBlockComponents/Search';
import { TypeList } from '../ui/typeList/TypeList';
import { useInput } from '@/hooks/form/useInput';
import { useSortAndSearchProducts } from '@/hooks/products/useSortProducts';
import { useGetProducts } from '@/hooks/products/useGetProducts';
import { ProductsError } from './Error/ProductsError';
import { ProductsLoadMore } from './LoadMore/ProductsLoadMore';
import { FoundOrNotFoundProducts } from './FoundOrNotFound/FoundOrNotFoundProducts';
import { sortOptions } from '@/data/main';
import { LoadingProducts } from '../ui/loadingProductsComponents/LoadingProducts';

interface Props {
  typeId: number;
  productCategories: string[];
  name: string;
}

export const Products: React.FC <Props> = ({ typeId, productCategories, name }) => {
  const [filterType, setFilterType] = React.useState('Усі');
  const [searchInput, setSearchInput] = React.useState('');
  const [selectedOption, setSelectedOption] = React.useState('');
  const [page, setPage] = React.useState(1);

  const appliedInput = useInput(searchInput);
  const getProducts = useGetProducts(filterType, appliedInput, typeId, page);
  const [products, loading , error, totalCount, currentPage]: any = useRequest(getProducts);
  const countOfPages = Math.ceil(totalCount / 9);
  const { searchedProducts, sortedProducts } = useSortAndSearchProducts(products, appliedInput, selectedOption);

  function loadmore() {
    setPage(prev => prev + 1);
  }

  if (error) {
    return (
      <ProductsError 
        error={error}
      />
    );
  }

  if (loading) {
    return (
      <LoadingProducts />
    )
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
            types={productCategories}
            setPage={setPage}
          />
        </div>
        {sortedProducts.length !== 0 && (
          <h4 className={styles.products__h4}>
            Кількість продуктів: {appliedInput ? searchedProducts.length : totalCount}
          </h4>
        )}
      </div>
      <div className={styles.products}>
        <FoundOrNotFoundProducts 
          sortedProducts={sortedProducts}
        />
      </div>
      <ProductsLoadMore 
        loading={loading}
        loadmore={loadmore}
        page={page}
        currentPage={currentPage}
        countOfPages={countOfPages}
        searchInput={searchInput}
      />
    </>
  );
};

