'use client';
import React from 'react';
import axios from 'axios';
import { Product } from './Product';
import { url } from '@/app/API';
import { useRequest } from '@/app/hooks/useRequest';
import styles from './products.module.scss';
import { Loading } from '../UI/Loading/Loading';
import { Search } from '../UI/SearchBlock/Search';
import { TypeList } from '../UI/TypeList/TypeList';
import { LoadMore } from '../UI/LoadMore/LoadMore';

interface Props {
  typeId: number;
  productCategories: string[];
  name: string;
}

export const Products: React.FC <Props> = ({ typeId, productCategories, name }) => {

  const [filterType, setFilterType] = React.useState('Усі');
  const [searchInput, setSearchInput] = React.useState('');
  const [selectedOption, setSelectedOption] = React.useState('');
  const options = [
    'За назвою А-Я',
    'За назвою Я-А',
    'За ціною від меншої до більшої',
    'За ціною від більшої до меншої',
  ];
  const [page, setPage] = React.useState(1);
  const [appliedInput, setAppliedInput] = React.useState('');
  let timerRef: any = React.useRef();

  React.useEffect(() => {
    const delay = 1000;

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setAppliedInput(searchInput);
    }, delay);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [searchInput]);

  const getProducts = React.useCallback(() => {
    if (filterType === 'Усі') {
      if (appliedInput) {
        return axios.get(`${url}/products?typeId=${typeId}`);
      }

      return axios.get(`${url}/products?typeId=${typeId}&limit=9&page=${page}` as any);
    } else {

      if (appliedInput) {
        return axios.get(`${url}/products?typeId=${typeId}&category=${filterType}`);
      }

      return axios.get(`${url}/products?typeId=${typeId}&category=${filterType}&limit=9&page=${page}`);
    }
  }, [filterType, page, appliedInput, typeId]);

  const [products, loading , error, totalCount, currentPage]: any = useRequest(getProducts);
  const filteredProducts = products;
  const countOfPages = Math.ceil(totalCount / 9);

  const searchedProducts = React.useMemo(() => {
    if (!filteredProducts) {
      return [];
    }

    if (appliedInput) {
      return filteredProducts.filter((product: any) => 
        product.name.toLowerCase().includes(appliedInput.toLowerCase()) 
        || appliedInput.toLowerCase().includes(product.name.toLowerCase()));
    } else {
      return filteredProducts;
    }
  }, [appliedInput, filteredProducts]);

  const sortedProducts = React.useMemo(() => {
    switch(selectedOption) {
    case 'За назвою А-Я':
      return searchedProducts.sort((a: any, b: any) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    case 'За назвою Я-А':
      return searchedProducts.sort((a: any, b: any) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()));
    case 'За ціною від меншої до більшої':
      return searchedProducts.sort((a: any, b: any) => {
        if (a.price) {
          return a.price - b.price;
        }

        return a.prices[0] - b.prices[0];
      });
    case 'За ціною від більшої до меншої':
      return searchedProducts.sort((a: any, b: any) => {
        if (a.price) {
          return b.price - a.price;
        }

        return b.prices[0] - a.prices[0];
      });
    default:
      return searchedProducts;
    }
  }, [searchedProducts, selectedOption]);

  if (error) {
    return (
      <div className='main'>
        <h1>Продукти не вдалося завнтажити. Помилка: {error}</h1>
      </div>
    );
  }

  function loadmore() {
    setPage(prev => prev + 1);
  }

  return (
    <>
      <div>
        <h1 className={styles.products__h1}>
          {name}
        </h1>
      </div>
      {loading && page === 1 ? (
        <div>
          <Loading />
        </div>
      ) : (
        <>
          <div>
            <div className={styles.products__searchWrapper}>
              <Search 
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                options={options}
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
            {sortedProducts.length === 0 ? (
              <div>
                <h2 className={styles.products__h2}>
                  Продукти не були знайдені
                </h2>
              </div>
            ) : (
              sortedProducts && sortedProducts.map((product: any) => (
                <div 
                  className={styles.products__item}
                  key={product.id}
                >
                  <Product 
                    product={product} 
                  />
                </div>
              ))
            )}
            {/* <UpButton /> */}
          </div>
          <div>
            {page !== 1 && loading ? (
              <div>
                <Loading />
              </div>
            ) : (
              (currentPage ? (+currentPage !== countOfPages) : (1 !== countOfPages)) && (!searchInput) 
              && (
                <div className={styles.products__loadMore}>
                  <LoadMore 
                    loadmore={loadmore}
                  />
                </div>
              )
            )}
          </div>
        </>
      )}
    </>
  );
};

