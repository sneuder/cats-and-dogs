import { PayloadAction } from '@reduxjs/toolkit';
import { InitialState } from '.';
import PetType from '../../../interfaces/PetType';

export const addPets = (
  state: InitialState,
  action: PayloadAction<[string, []]>
) => {
  state.pets[action.payload[0] as PetType] = action.payload[1];
};

export const toggleMainPet = (
  state: InitialState,
  action: PayloadAction<{}>
) => {
  state.pet = action.payload;
};
