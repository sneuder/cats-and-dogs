import { createSlice } from '@reduxjs/toolkit';
import * as reducers from './reducers';

export interface InitialState {
  pets: {
    dog: { [key: string]: string | number }[];
    cat: { [key: string]: string | number }[];
  };
  pet: { [key: string]: string | number };
  amount: number;
}

const initialState: InitialState = {
  pets: {
    dog: [],
    cat: [],
  },
  pet: {},
  amount: 0,
};

export const petSlice = createSlice({
  name: 'dogs',
  initialState,
  reducers,
});

export const { addPets, toggleMainPet, amountPets } = petSlice.actions;
export default petSlice.reducer;
