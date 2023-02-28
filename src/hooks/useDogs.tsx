import axios from 'axios';
import { useEffect } from 'react';

const useDogs = () => {
  const handleDogsByPage = () => {
    axios.get('https://api.thedogapi.com/v1/breeds').then(({ data }) => {});
  };

  const handleSearchDogs = () => {};

  const handleDog = () => {};

  useEffect(() => {
    handleDogsByPage();
  }, []);

  return {
    handleDogsByPage,
    handleSearchDogs,
    handleDog,
  };
};

export default useDogs;
