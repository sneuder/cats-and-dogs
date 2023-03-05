import { useEffect } from 'react';

import PetType from '../interfaces/PetType';

import { useSelector, useDispatch } from 'react-redux';
import { addPets, amountPets } from '../state/slices/pet';
import { navigationDetails } from '../state/slices/app';
import { searchDog, toggleBooleanStates } from '../state/slices/app';

import { getAllPetsByPage, getAllPets } from '../services';
import { splitLengthIntoPages } from '../services/format';

const usePet = (petType: PetType) => {
  const dispatch = useDispatch();

  const pets = useSelector((state: any) => state.pet.pets[petType]);
  const { searchQuery, loadPets, navigator } = useSelector(
    (state: any) => state.app
  );

  // save pet info
  const handleDogsByPage = (page = 0, limit = 10) => {
    dispatch(toggleBooleanStates(['loadPets', true]));

    const allDogsByPage = getAllPetsByPage(petType, page, limit);
    const allDogs = getAllPets(petType);

    Promise.all([allDogs, allDogsByPage]).then((values) => {
      const pages = splitLengthIntoPages(values[0].data.length, 10);
      dispatch(navigationDetails(['total', pages]));

      dispatch(addPets([petType, values[1].data]));
      dispatch(toggleBooleanStates(['loadPets', false]));
    });
  };

  // search dog by query
  const handleSearchDogs = () => {
    dispatch(addPets([petType, []]));
  };

  useEffect(() => {
    petType && handleDogsByPage();
  }, []);

  // when changing navigation
  useEffect(() => {
    handleDogsByPage(navigator.current - 1);
  }, [navigator.current]);

  // reset info when getting out of screen
  useEffect(() => {
    return () => {
      loadPets && dispatch(toggleBooleanStates(['loadPets', false]));
      dispatch(navigationDetails(['total', 0]));
      dispatch(addPets([petType, []]));
    };
  }, []);

  return {
    pets,
    loadPets,
    handleDogsByPage,
    handleSearchDogs,
  };
};

export default usePet;
