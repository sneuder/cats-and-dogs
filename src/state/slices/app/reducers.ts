import PetType from '../../../interfaces/PetType';
import { PayloadAction } from '@reduxjs/toolkit';
import { InitialState } from '.';

export const searchDog = (
  state: InitialState,
  action: PayloadAction<string>
) => {
  state.search = action.payload;
};

export const petTypeChange = (
  state: InitialState,
  action: PayloadAction<PetType>
) => {
  state.petType = action.payload;
};

export const toggleBooleanStates = (
  state: InitialState,
  action: PayloadAction<[string, boolean]>
) => {
  state[action.payload[0] as 'loadPets'] = action.payload[1];
};

export const navigationDetails = (
  state: InitialState,
  action: PayloadAction<[string, number]>
) => {
  state.navigator[action.payload[0] as 'total' | 'current'] = action.payload[1];
};
