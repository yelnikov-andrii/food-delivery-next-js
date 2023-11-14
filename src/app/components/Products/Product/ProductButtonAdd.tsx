import React from 'react';
import { useSelector } from 'react-redux';
import { useAddProduct } from '../../../hooks/useAddProduct';
import styles from './product.module.scss';

interface Props {
  product: any;
  selectedSize: number;
  selectedSouse: number;
  showAlert: () => void;
}

export const ProductButtonAdd: React.FC <Props> = ({ product, selectedSize, selectedSouse, showAlert }) => {
  const productsInCart = useSelector((state: any) => state.product.products);
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

