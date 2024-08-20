// // src/redux/userSlice.ts
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface UserState {
//   isLoggedIn: boolean;
//   avatarUrl?: string;
// }

// const initialState: UserState = {
//   isLoggedIn: false,
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     login(state, action: PayloadAction<string>) {
//       state.isLoggedIn = true;
//       state.avatarUrl = action.payload;
//     },
//     logout(state) {
//       state.isLoggedIn = false;
//       state.avatarUrl = undefined;
//     },
//   },
// });

// export const { login, logout } = userSlice.actions;
// export default userSlice.reducer;
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  currentUser: {
    username: string;
    email: string;
    profilePicture: string;
    isAdmin:boolean;
  } | null;
}

const initialState: UserState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState['currentUser']>) {
      state.currentUser = action.payload;
    },
    clearUser(state) {
      state.currentUser = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;

