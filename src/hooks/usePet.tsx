import { useEffect } from 'react';

import PetType from '../interfaces/PetType';

import { useSelector, useDispatch } from 'react-redux';
import { addPets } from '../state/slices/pet';
import { searchDog, toggleBooleanStates } from '../state/slices/app';

import { getAllPets } from '../services';

const usePet = (petType: PetType) => {
  const dispatch = useDispatch();
  const pets = useSelector((state: any) => state.pet.pets);
  const { searchQuery, loadPets } = useSelector((state: any) => state.app);

  const handleDogsByPage = (page = 0, limit = 10) => {
    dispatch(toggleBooleanStates('loadPets'));

    getAllPets(petType, page, limit)
      .then(({ data }) => {
        dispatch(addPets(data));
        dispatch(toggleBooleanStates('loadPets'));
      })
      .catch((e) => {});
  };

  const handleSaveSearch = (value: string) => {
    dispatch(searchDog(value));
  };

  const handleSearchDogs = () => {
    dispatch(addPets([]));
  };

  useEffect(() => {
    petType && handleDogsByPage();
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
