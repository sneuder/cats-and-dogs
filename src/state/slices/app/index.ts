import { createSlice } from '@reduxjs/toolkit';
import * as reducers from './reducers';

export interface InitialState {
  search: string;
  loadPets: boolean;
  navigator: {
    total: number;
    current: number;
  };
}

const initialState: InitialState = {
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

export const { searchDog, toggleBooleanStates, navigationDetails } =
  appSlice.actions;
export default appSlice.reducer;
