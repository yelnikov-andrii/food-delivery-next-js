import { OrderInterface } from '@/types';
import styles from './orders.module.scss';
import Link from 'next/link';

interface Props {
  orders: OrderInterface[];
}

export const TableBody: React.FC<Props> = ({ orders }) => {
  return (
    <tbody>
      {orders.map((order: OrderInterface) => (
        <tr
          key={order.id}
          className={styles.orders__tableRow}
        >
          <td>
            {order.name}
          </td>
          <td>
            {order.email || '-'}
          </td>
          <td>
            {order.phone}
          </td>
          <td>
            {order.status}
          </td>
          <td>
            <Link 
              href={`orders/${order.id.toString()}`}
              className={styles.orders__button}
            >
              Відкрити
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  );
};