import { configureStore } from '@reduxjs/toolkit';
import dogSlice from './slices/dogs';
import appSlice from './slices/app';

export default configureStore({
  reducer: {
    dogs: dogSlice,
    app: appSlice,
  },
});
