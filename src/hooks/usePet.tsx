import { RootState } from '../state';
import { useEffect } from 'react';
import useLoad from './useLoad';

import { useSelector, useDispatch } from 'react-redux';
import { addPets, amountPets } from '../state/slices/pet';
import { toggleBooleanStates, navigationDetails } from '../state/slices/app';

import { getAllPetsByPage, getAllPets, searchPets } from '../services';

import Pet from '../models/Pet';
import { PetRequested } from '../interfaces/Pet';
import PetType from '../interfaces/PetType';

const usePet = (petType: PetType) => {
  const { handleLoadPet, loadPets } = useLoad();
  const dispatch = useDispatch();
  const { pet, app } = useSelector((state: RootState) => state);

  const { navigator, search } = app;
  const { current } = navigator;
  const pets = pet.pets[petType];

  // save pet info
  const handleDogsByPage = (page = 0, limit = 10) => {
    !loadPets && handleLoadPet(true);

    const allDogsByPage = getAllPetsByPage(petType, page, limit);
    const allDogs = getAllPets(petType);

    Promise.all([allDogs, allDogsByPage]).then((values) => {
      const reqPets = values[1].data.map((reqPet: PetRequested) =>
        Pet(reqPet, petType)
      );
      dispatch(amountPets(values[0].data.length));
      dispatch(addPets([petType, reqPets]));
      handleLoadPet(false);
    });
  };

  // search dog by query
  const handleSearchDogs = async () => {
    handleLoadPet(true);
    const { petsByName, length } = await searchPets(petType, search, current);

    dispatch(amountPets(length));
    dispatch(addPets([petType, petsByName]));

    handleLoadPet(false);
  };

  // the petType established
  // reset info when getting out of screen
  useEffect(() => {
    handleDogsByPage();
    return () => {
      loadPets && dispatch(toggleBooleanStates(['loadPets', false]));
      dispatch(navigationDetails(['total', 0]));
      dispatch(addPets([petType, []]));
    };
  }, []);

  // when changing navigation
  useEffect(() => {
    if (search !== '') {
      handleSearchDogs();
      return;
    }

    handleDogsByPage(current - 1);
  }, [current]);

  return {
    pets,
    loadPets,
    handleDogsByPage,
    handleSearchDogs,
  };
};

export default usePet;
