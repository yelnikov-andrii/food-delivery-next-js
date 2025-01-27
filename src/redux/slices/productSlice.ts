import { ProductAddedInt, ProductInt } from '@/types/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [] as ProductAddedInt[],
  },
  reducers: {
    getProducts: (state, action: PayloadAction<ProductAddedInt[]>) => {
      state.products = action.payload;
    },
    addProduct: (state, action: PayloadAction<ProductAddedInt>) => {
      state.products.push(action.payload);
      localStorage.setItem('productsInCart', JSON.stringify(state.products));
    },
    increment: (state, action: PayloadAction<string>) => {
      const foundProduct: ProductAddedInt | undefined = state.products.find((el: ProductAddedInt) => el.id === action.payload);
      foundProduct!.quantity += 1;
      localStorage.setItem('productsInCart', JSON.stringify(state.products));
    },
    decrement: (state, action: PayloadAction<string>) => {
      const foundProduct = state.products.find((el: ProductAddedInt) => el.id === action.payload);
      foundProduct!.quantity -= 1;
      localStorage.setItem('productsInCart', JSON.stringify(state.products));
    },
    incrementWithValue: (state, action: PayloadAction<{id: string, quantity: number}>) => {
      const foundProduct = state.products.find((el: ProductAddedInt) => el.id === action.payload.id);
      foundProduct!.quantity += action.payload.quantity;
      localStorage.setItem('productsInCart', JSON.stringify(state.products));
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter((el: ProductAddedInt) => el.id !== action.payload);
      localStorage.setItem('productsInCart', JSON.stringify(state.products));
    },
    clearCart: (state) => {
      state.products = [];
      localStorage.clear();
    },
  },
});

export const { addProduct, increment, decrement, removeProduct, getProducts, incrementWithValue, clearCart } 
= productsSlice.actions;

export default productsSlice.reducer;
