import { useDispatch } from 'react-redux';
import { addProduct, increment, incrementWithValue } from '../redux/slices/productSlice';
import { ProductAddedInt, ProductInt } from '@/types';

export const useAddProduct = (
  product: ProductInt, selectedSize: number, selectedSouse: number, showAlert: () => void, 
  productsInCart: ProductAddedInt[], quantity: number, card: boolean) => {
  const dispatch = useDispatch();

  function add() {
    const copyProduct = JSON.parse(JSON.stringify(product));

    if (product.sizes) {
      copyProduct.selectedSize = selectedSize;
    }

    if (product.souses) {
      copyProduct.selectedSouse = copyProduct.souses[selectedSouse];
    }

    if (copyProduct.selectedSize !== undefined && copyProduct.selectedSouse !== undefined) {
      copyProduct.id += 'size' + copyProduct.selectedSize + copyProduct.selectedSouse;
    }

    if (copyProduct.selectedSize === undefined && copyProduct.selectedSouse !== undefined) {
      copyProduct.id += 'souse' + copyProduct.selectedSouse;
    }
    
    copyProduct.quantity = quantity || 1;

    showAlert();
    
    if (productsInCart.some((product: ProductAddedInt) => product.id === copyProduct.id)) {
      if (!card) {
        dispatch(increment(copyProduct.id));
      }
      if (card) {
        const obj = {quantity, id: copyProduct.id};
        dispatch(incrementWithValue(obj));
      }
    } else {
      dispatch(addProduct(copyProduct));
    }
  }

  return { add };;
};
