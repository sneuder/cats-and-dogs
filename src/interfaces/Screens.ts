import PetType from './PetType';

export type Screens = 'Home' | 'Pets';

type RootStackParamList = {
  Home: {
    pet: PetType;
  };
  Pets: {
    pet: PetType;
  };
};

export default RootStackParamList;
