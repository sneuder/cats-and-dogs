import { configureStore } from '@reduxjs/toolkit';
import dogSlice from './slices/dogs';

export default configureStore({
  reducer: {
    dogs: dogSlice,
  },
});
