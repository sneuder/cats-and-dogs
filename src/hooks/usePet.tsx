import { useEffect } from 'react';
import useLoad from './useLoad';

import { useSelector, useDispatch } from 'react-redux';
import { addPets } from '../state/slices/pet';
import { toggleBooleanStates, navigationDetails } from '../state/slices/app';

import { getAllPetsByPage, getAllPets, searchPets } from '../services';

import Pet from '../models/Pet';

const usePet = () => {
  const { handleLoadPet, loadPets } = useLoad();
  const dispatch = useDispatch();
  const { pet, app } = useSelector((state: any) => state);

  const { navigator, search, petType } = app;
  const { current } = navigator;
  const pets = pet.pets[petType];

  // save pet info
  const handleDogsByPage = (page = 0, limit = 10) => {
    handleLoadPet(true);

    const allDogsByPage = getAllPetsByPage(petType, page, limit);
    const allDogs = getAllPets(petType);

    Promise.all([allDogs, allDogsByPage]).then((values) => {
      const reqPets = values[1].data.map((reqPet: any) => Pet(reqPet, petType));

      dispatch(addPets([petType, reqPets]));
      handleLoadPet(false);
    });
  };

  // search dog by query
  const handleSearchDogs = async () => {
    handleLoadPet(true);

    const { petsByName, length } = await searchPets(petType, search, current);
    dispatch(addPets([petType, petsByName]));
    if (length === 0) dispatch(addPets([petType, []]));

    handleLoadPet(false);
  };

  useEffect(() => {
    handleDogsByPage();
  }, []);

  // when changing navigation
  useEffect(() => {
    if (search !== '') {
      handleSearchDogs();
      return;
    }

    handleDogsByPage(current - 1);
  }, [current]);

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
