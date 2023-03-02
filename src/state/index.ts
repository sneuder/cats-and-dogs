import { configureStore } from '@reduxjs/toolkit';
import petSlice from './slices/pet';
import appSlice from './slices/app';

export default configureStore({
  reducer: {
    pet: petSlice,
    app: appSlice,
  },
});
