import { useEffect } from 'react';

import PetType from '../interfaces/PetType';

import { useSelector, useDispatch } from 'react-redux';
import { addPets } from '../state/slices/pet';
import { searchDog, toggleBooleanStates } from '../state/slices/app';

import { getAllPets } from '../services';

const usePet = (petType: PetType) => {
  const dispatch = useDispatch();
  const pets = useSelector((state: any) => state.pet.pets[petType]);
  const { searchQuery, loadPets } = useSelector((state: any) => state.app);

  const handleDogsByPage = (page = 0, limit = 10) => {
    dispatch(toggleBooleanStates(['loadPets', true]));

    getAllPets(petType, page, limit)
      .then(({ data }) => {
        dispatch(addPets([petType, data]));
        dispatch(toggleBooleanStates(['loadPets', false]));
      })
      .catch((e) => {});
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
