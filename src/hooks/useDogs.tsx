import axios from 'axios';
import { useEffect, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addDogs } from '../state/slices/dogs';
import { searchDog } from '../state/slices/app';

const useDogs = () => {
  const searchInput = useRef(null);

  const dispatch = useDispatch();
  const dogs = useSelector((state: any) => state.dogs.dogs);
  const searchQuery = useSelector((state: any) => state.app.search);

  const handleDogsByPage = (page = 0, limit = 10) => {
    axios
      .get(`https://api.thedogapi.com/v1/breeds?limit=${limit}&page=${page}`)
      .then(({ data }) => {
        dispatch(addDogs(data));
      });
  };

  const handleSaveSearch = (value: string) => {
    dispatch(searchDog(value));
  };

  const handleSearchDogs = () => {
    dispatch(addDogs([]));
  };

  const handleDog = () => {};

  useEffect(() => {
    handleDogsByPage();
  }, []);

  return {
    dogs,
    searchInput,
    handleDogsByPage,
    handleSearchDogs,
    handleSaveSearch,
    handleDog,
  };
};

export default useDogs;
