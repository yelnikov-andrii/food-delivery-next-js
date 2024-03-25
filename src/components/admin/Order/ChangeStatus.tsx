import React, { Dispatch, SetStateAction } from 'react';
import styles from './order.module.scss';
import axios from 'axios';
import { url } from '@/api';

interface Props {
  orderId: number;
  setActive: Dispatch<SetStateAction<boolean>>;
}

export const ChangeStatus: React.FC<Props> = ({ orderId, setActive }) => {
  const [status, setStatus] = React.useState('');

  const updateOrder = async (orderId: number, newData: any) => {
    try {
      const response = await axios.patch(`${url}/orders/${orderId}`, newData);
      return response.data;
    } catch (error) {
      console.error('Помилка при оновленні замовлення', error);
      throw error;
    }
  };

  async function handleChange() {
    await updateOrder(orderId, { status: status });
    setActive(false);
    setStatus('');
  }


  return (
    <div className={styles.order__changeStatus}>
      <label>
        Статус замовлення
      </label>
      <input 
        value={status}
        className={styles.order__input}
        onChange={(e) => {
          setStatus(e.target.value)
        }}
      />
      <button
        onClick={handleChange}
      >
        Підтвердити
      </button>
    </div>
  )
}
