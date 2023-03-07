import PetType from '../../../interfaces/PetType';
import { createSlice } from '@reduxjs/toolkit';
import * as reducers from './reducers';

export interface InitialState {
  petType: PetType;
  search: string;
  loadPets: boolean;
  navigator: {
    total: number;
    current: number;
  };
}

const initialState: InitialState = {
  petType: 'dog',
  search: '',
  loadPets: false,
  navigator: {
    total: 0,
    current: 1,
  },
};

export const appSlice = createSlice({
  name: 'dogs',
  initialState,
  reducers,
});

export const {
  searchDog,
  toggleBooleanStates,
  navigationDetails,
  petTypeChange,
} = appSlice.actions;

export default appSlice.reducer;
