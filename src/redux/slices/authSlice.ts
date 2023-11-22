import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface UserInt {
  email: string;
  password: string;
}

interface StateAuthInt {
  user: UserInt | null;
}

const initialState: StateAuthInt = {
  user: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserInt | null>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;