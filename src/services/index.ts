import axios from 'axios';
import PetType from '../interfaces/PetType';

const baseURLs = (petType: PetType) => `https://api.the${petType}api.com/v1`;

export const getAllPetsByPage = (
  petType: PetType,
  page: number,
  limit: number
) => {
  return axios({
    method: 'get',
    url: `${baseURLs(petType)}/breeds`,
    params: {
      page: page,
      limit: limit,
    },
  });
};

export const getAllPets = (petType: PetType) => {
  return axios({
    method: 'get',
    url: `${baseURLs(petType)}/breeds`,
  });
};

export const getOnePet = () => {};
