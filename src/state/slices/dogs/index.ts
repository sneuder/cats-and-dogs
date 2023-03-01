import { createSlice } from '@reduxjs/toolkit';
import * as reducers from './reducers';

export interface InitialState {
  dogs: { [key: string]: string | number }[];
  dog: { [key: string]: string | number };
}

const initialState: InitialState = {
  dogs: [],
  dog: {},
};

export const dogSlice = createSlice({
  name: 'dogs',
  initialState,
  reducers,
});

export const { addDogs, toggleMainDog } = dogSlice.actions;
export default dogSlice.reducer;
