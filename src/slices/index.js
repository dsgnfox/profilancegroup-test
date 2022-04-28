import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './newsSlice';
import userSlice from './userSlice';

export default configureStore({
  reducer: {
    news: newsReducer,
    user: userSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
