import { createSlice } from '@reduxjs/toolkit';
import * as reducers from './reducers';

export const dogSlice = createSlice({
  name: 'dogs',
  initialState: {
    dogs: [],
    dog: {},
  },
  reducers: reducers,
});

export const { addDogs, toggleMainDog } = dogSlice.actions;
export default dogSlice.reducer;
