import { PayloadAction } from '@reduxjs/toolkit';
import { InitialState } from '.';

export const searchDog = (
  state: InitialState,
  action: PayloadAction<string>
) => {
  state.search = action.payload;
};

export const toggleBooleanStates = (
  state: InitialState,
  action: PayloadAction<string>
) => {
  state[action.payload] = !state[action.payload];
};
