import { createSlice } from '@reduxjs/toolkit';
import * as reducers from './reducers';

export interface InitialState {
  search: string;
}

const initialState: InitialState = {
  search: '',
};

export const appSlice = createSlice({
  name: 'dogs',
  initialState,
  reducers,
});

export const { searchDog } = appSlice.actions;
export default appSlice.reducer;
