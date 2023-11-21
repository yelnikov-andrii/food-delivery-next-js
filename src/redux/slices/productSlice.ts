import { createSlice } from '@reduxjs/toolkit';

export const productsSlice: any = createSlice({
  name: 'products',
  initialState: {
    products: [] as any,
  },
  reducers: {
    getProducts: (state, action: any) => {
      state.products = action.payload;
    },
    addProduct: (state, action: any) => {
      state.products.push(action.payload);
      localStorage.setItem('productsInCart', state.products);
    },
    increment: (state, action: any) => {
      const foundProduct = state.products.find((el: any) => el.id === action.payload);
      foundProduct.quantity += 1;
      localStorage.setItem('productsInCart', state.products);
    },
    decrement: (state, action: any) => {
      const foundProduct = state.products.find((el: any) => el.id === action.payload);
      foundProduct.quantity -= 1;
      localStorage.setItem('productsInCart', state.products);
    },
    incrementWithValue: (state, action: any) => {
      const foundProduct = state.products.find((el: any) => el.id === action.payload.id);
      foundProduct.quantity += action.payload.quantity;
      localStorage.setItem('productsInCart', state.products);
    },
    removeProduct: (state, action: any) => {
      state.products = state.products.filter((el: any) => el.id !== action.payload);
      localStorage.setItem('productsInCart', state.products);
      console.log('remove');
      console.log(localStorage.getItem('productsInCart'));
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