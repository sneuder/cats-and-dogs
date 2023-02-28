export const addDogs = (state: any, action: any) => {
  state.dogs = action.payload;
};

export const toggleMainDog = (state: any, action: any) => {
  state.dog = action.payload;
};
