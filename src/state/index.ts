import { configureStore } from '@reduxjs/toolkit';
import petSlice from './slices/pet';
import appSlice from './slices/app';

const store = configureStore({
  reducer: {
    pet: petSlice,
    app: appSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
