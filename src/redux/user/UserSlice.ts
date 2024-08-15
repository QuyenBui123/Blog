// src/redux/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  isLoggedIn: boolean;
  avatarUrl?: string;
}

const initialState: UserState = {
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
      state.isLoggedIn = true;
      state.avatarUrl = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.avatarUrl = undefined;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
