import { PayloadAction } from '@reduxjs/toolkit';
import { InitialState } from '.';

export const addPets = (state: InitialState, action: PayloadAction<[]>) => {
  state.pets = action.payload;
};

export const toggleMainPet = (
  state: InitialState,
  action: PayloadAction<{}>
) => {
  state.pet = action.payload;
};
