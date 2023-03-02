import { createSlice } from '@reduxjs/toolkit';
import * as reducers from './reducers';

export interface InitialState {
  search: string;
  loadPets: boolean;
}

const initialState: InitialState = {
  search: '',
  loadPets: false,
};

export const appSlice = createSlice({
  name: 'dogs',
  initialState,
  reducers,
});

export const { searchDog, toggleBooleanStates } = appSlice.actions;
export default appSlice.reducer;
