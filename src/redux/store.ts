// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import { persistReducer, persistStore } from 'redux-persist';
// import themeReducer from './theme/ThemeSlice'
// import storage from 'redux-persist/lib/storage';

// const rootReducer = combineReducers({
//   theme: themeReducer,
// });

// const persistConfig = {
//   key: 'root',
//   storage,
//   version: 1,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({ serializableCheck: false }),
// });

// export const persistor = persistStore(store);
// export type RootState = ReturnType<typeof rootReducer>;
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme/ThemeSlice";
import userReducer from "./user/UserSlice"; // Adjust path as necessary

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
