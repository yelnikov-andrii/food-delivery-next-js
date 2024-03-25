import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../product.module.scss';
import { useAddProduct } from '@/hooks/cart/useAddProduct';
import { ProductInt } from '@/types';
import { RootState } from '@/redux/store';

interface Props {
  product: ProductInt;
  selectedSize: number;
  selectedSouse: number;
  showAlert: () => void;
}

export const ProductButtonAdd: React.FC <Props> = ({ product, selectedSize, selectedSouse, showAlert }) => {
  const productsInCart = useSelector((state: RootState) => state.product.products);
  const { add } = useAddProduct(product, selectedSize, selectedSouse, showAlert, productsInCart, 1, false);

  return (
    <button
      className={styles.product__buttonAdd}
      onClick={(e) => {
        e.preventDefault();
        add();
      }}
    >
      До кошику
    </button>
  );
};

