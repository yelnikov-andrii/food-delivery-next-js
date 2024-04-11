import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { CartTableCounter } from './CartTableCounter';
import styles from './table.module.scss';
import Image from 'next/image';
import { removeProduct } from '@/redux/slices/productSlice';
import { RootState } from '@/redux/store';
import { ProductAddedInt } from '@/types';

export const CartTableBody = () => {
  const productsInCart = useSelector((state: RootState) => state.product.products);
  const dispatch = useDispatch();
  return (
    <tbody>
      {productsInCart.map((product: ProductAddedInt) => (
        <tr
          key={product.id}
          className={styles.table__row}
        >
          <td className={styles.table__photo}>
            <Image 
              src={product.img} 
              alt=""
              layout='responsive'
              width={100}
              height={100}
            />
          </td>
          <td>
            {product.name}
          </td>
          <td className={styles.table__size}>
            {!product.hasOwnProperty('selectedSize') ? '-' : product.selectedSize === 0 ? '32 см' : '42 см'}
          </td>
          <td className={styles.table__souse}>
            {product.selectedSouse || '-'}
          </td>
          <td className={styles.table__tablePrice}>
            {(product.prices && product.prices[product.selectedSize]) || product.price}
          </td>
          <td>
            <CartTableCounter product={product} />
          </td>
          <td>
            {(product.prices && product.quantity * product.prices[product.selectedSize]) || product.price}
          </td>
          <td>
            <button
              className={styles.table__button}
              onClick={(e) => {
                e.preventDefault();
                dispatch(removeProduct(product.id));
              }}
            >
              Видалити
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};