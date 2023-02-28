import axios from 'axios';
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addDogs } from '../state/slices/dogs';

const useDogs = () => {
  const dispatch = useDispatch();
  const dogs = useSelector((state: any) => state.dogs.dogs);

  const handleDogsByPage = (page = 0, limit = 10) => {
    axios
      .get(`https://api.thedogapi.com/v1/breeds?limit=${limit}&page=${page}`)
      .then(({ data }) => {
        dispatch(addDogs(data));
      });
  };

  const handleSearchDogs = (dogName: string) => {
    axios.get(`https://api.thedogapi.com/v1/breeds/search&q=${dogName}`);
  };

  const handleDog = () => {};

  useEffect(() => {
    handleDogsByPage();
  }, []);

  return {
    dogs,
    handleDogsByPage,
    handleSearchDogs,
    handleDog,
  };
};

export default useDogs;
