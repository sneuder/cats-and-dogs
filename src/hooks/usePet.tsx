import { useEffect } from 'react';

import PetType from '../interfaces/PetType';

import { useSelector, useDispatch } from 'react-redux';
import { addDogs } from '../state/slices/dogs';
import { searchDog } from '../state/slices/app';

import { getAllPets } from '../services';

const usePet = (petType: PetType) => {
  const dispatch = useDispatch();
  const dogs = useSelector((state: any) => state.dogs.dogs);
  const searchQuery = useSelector((state: any) => state.app.search);

  const handleDogsByPage = (page = 0, limit = 10) => {
    dispatch(addDogs([]));

    getAllPets(petType, page, limit)
      .then(({ data }) => {
        dispatch(addDogs(data));
      })
      .catch((e) => {});
  };

  const handleSaveSearch = (value: string) => {
    dispatch(searchDog(value));
  };

  const handleSearchDogs = () => {
    dispatch(addDogs([]));
  };

  useEffect(() => {
    petType && handleDogsByPage();
  }, []);

  return {
    dogs,
    handleDogsByPage,
    handleSearchDogs,
    handleSaveSearch,
  };
};

export default usePet;
