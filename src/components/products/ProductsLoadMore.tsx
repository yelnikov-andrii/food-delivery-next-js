import React from 'react'
import { LoadingProducts } from '../ui/loadingProducts/loadingProducts'
import { LoadMore } from '../ui/loadMore/loadMore';
import styles from './products.module.scss';

interface Props {
  page: number;
  loading: boolean;
  currentPage: number;
  countOfPages: number;
  searchInput: string;
  loadmore: () => void;
}

export const ProductsLoadMore: React.FC<Props> = ({ page, loading, currentPage, countOfPages, searchInput, loadmore }) => {
  return (
    <div>
      {page !== 1 && loading ? (
        <div>
          <LoadingProducts />
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
  )
}
