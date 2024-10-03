
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counter'; // Import your slice

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Register your reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
