import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { CartTableCounter } from './CartTableCounter';
import styles from './cart.module.scss';
import Image from 'next/image';
import { removeProduct } from '@/redux/slices/productSlice';

export const CartTableBody = () => {
  const productsInCart = useSelector((state: any) => state.product.products);
  const dispatch = useDispatch();
  return (
    <tbody>
      {productsInCart.map((product: any) => (
        <tr
          key={product.id}
          className={styles.cart__tableRow}
        >
          <td className={styles.cart__photo}>
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
          <td className={styles.cart__size}>
            {!product.hasOwnProperty('selectedSize') ? '-' : product.selectedSize === 0 ? '32 см' : '42 см'}
          </td>
          <td className={styles.cart__souse}>
            {product.selectedSouse || '-'}
          </td>
          <td className={styles.cart__tablePrice}>
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
              className={styles.cart__button}
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