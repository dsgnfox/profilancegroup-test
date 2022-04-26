import { configureStore } from '@reduxjs/toolkit';
import newsReducer from '../slices/newsSlice';
import userSlice from '../slices/userSlice';

export default configureStore({
  reducer: {
    news: newsReducer,
    user: userSlice
  },
  devTools: process.env.NODE_ENV !== 'production',
});