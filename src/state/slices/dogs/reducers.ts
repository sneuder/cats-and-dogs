import { PayloadAction } from '@reduxjs/toolkit';
import { InitialState } from '.';

export const addDogs = (state: InitialState, action: PayloadAction<[]>) => {
  state.dogs = action.payload;
};

export const toggleMainDog = (
  state: InitialState,
  action: PayloadAction<{}>
) => {
  state.dog = action.payload;
};
