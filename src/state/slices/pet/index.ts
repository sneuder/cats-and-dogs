import { createSlice } from '@reduxjs/toolkit';
import * as reducers from './reducers';
import PetFormatted from '../../../interfaces/Pet';

export interface InitialState {
  pets: {
    dog: PetFormatted[];
    cat: PetFormatted[];
  };
  pet: PetFormatted;
  amount: number;
}

const initialState: InitialState = {
  pets: {
    dog: [],
    cat: [],
  },
  pet: {
    id: '',
    name: '',
    image: '',
    temperaments: [],
  },
  amount: 0,
};

export const petSlice = createSlice({
  name: 'dogs',
  initialState,
  reducers,
});

export const { addPets, toggleMainPet, amountPets } = petSlice.actions;
export default petSlice.reducer;
