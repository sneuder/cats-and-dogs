import { PayloadAction } from '@reduxjs/toolkit';
import { InitialState } from '.';

export const searchDog = (
  state: InitialState,
  action: PayloadAction<string>
) => {
  state.search = action.payload;
};
