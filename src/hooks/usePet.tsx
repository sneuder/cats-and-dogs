import { useEffect } from 'react';

import PetType from '../interfaces/PetType';

import { useSelector, useDispatch } from 'react-redux';
import { addPets, amountPets } from '../state/slices/pet';
import { navigationDetails } from '../state/slices/app';
import { searchDog, toggleBooleanStates } from '../state/slices/app';

import { getAllPetsByPage, getAllPets } from '../services';

const usePet = (petType: PetType) => {
  const dispatch = useDispatch();

  const pets = useSelector((state: any) => state.pet.pets[petType]);
  const { searchQuery, loadPets } = useSelector((state: any) => state.app);

  const handleDogsByPage = (page = 0, limit = 10) => {
    dispatch(toggleBooleanStates(['loadPets', true]));

    const allDogsByPage = getAllPetsByPage(petType, page, limit);
    const allDogs = getAllPets(petType);

    Promise.all([allDogs, allDogsByPage]).then((values) => {
      dispatch(navigationDetails(['total', values[0].data.length]));
      dispatch(addPets([petType, values[1].data]));
      dispatch(toggleBooleanStates(['loadPets', false]));
    });
  };

  const handleSaveSearch = (value: string) => {
    dispatch(searchDog(value));
  };

  const handleSearchDogs = () => {
    dispatch(addPets([petType, []]));
  };

  useEffect(() => {
    petType && handleDogsByPage();
  }, []);

  useEffect(() => {
    return () => {
      loadPets && dispatch(toggleBooleanStates(['loadPets', false]));
    };
  }, []);

  return {
    pets,
    loadPets,
    handleDogsByPage,
    handleSearchDogs,
    handleSaveSearch,
  };
};

export default usePet;
