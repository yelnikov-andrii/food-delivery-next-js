import React from 'react'
import { LoadMore } from '@/components/ui/loadMoreComponents/LoadMore';
import styles from '../products.module.scss';

interface Props {
  loadmore: () => void;
}

export const ProductsLoadMore: React.FC<Props> = ({ loadmore }) => {
  return (
    <div>
      <div className={styles.products__loadMore}>
        <LoadMore
          loadmore={loadmore}
        />
      </div>
    </div>
  )
}
