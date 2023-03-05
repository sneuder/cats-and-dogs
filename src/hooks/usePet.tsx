import { useEffect } from 'react';

import PetType from '../interfaces/PetType';

import { useSelector, useDispatch } from 'react-redux';
import { addPets } from '../state/slices/pet';
import { toggleBooleanStates, navigationDetails } from '../state/slices/app';

import { getAllPetsByPage, getAllPets, searchPets } from '../services';
import { splitLengthIntoPages } from '../services/format';

import Pet from '../models/Pet';

const usePet = (petType: PetType) => {
  const dispatch = useDispatch();

  const pets = useSelector((state: any) => state.pet.pets[petType]);
  const { loadPets, navigator, search } = useSelector(
    (state: any) => state.app
  );

  // save pet info
  const handleDogsByPage = (page = 0, limit = 10) => {
    dispatch(toggleBooleanStates(['loadPets', true]));

    const allDogsByPage = getAllPetsByPage(petType, page, limit);
    const allDogs = getAllPets(petType);

    Promise.all([allDogs, allDogsByPage]).then((values) => {
      const pages = splitLengthIntoPages(values[0].data.length, 10);
      const reqPets = values[1].data.map((reqPet: any) => Pet(reqPet, petType));

      dispatch(navigationDetails(['total', pages]));
      dispatch(addPets([petType, reqPets]));
      dispatch(toggleBooleanStates(['loadPets', false]));
    });
  };

  // search dog by query
  const handleSearchDogs = async () => {
    const petsByName = await searchPets(petType, search, 1, 10);
    dispatch(addPets([petType, petsByName]));
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
