import axios from 'axios';

import PetType from '../interfaces/PetType';
import { PetRequested } from '../interfaces/Pet';

import Pet from '../models/Pet';

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

export const searchPets = async (
  petType: PetType,
  petName: string,
  page: number,
  limit = 10
) => {
  const allPets = (await getAllPets(petType)).data;
  const petsByName = allPets
    .filter((pet: PetRequested) => pet.name.toLowerCase().includes(petName))
    .map((pet: PetRequested) => Pet(pet, petType));

  return {
    petsByName: petsByName.splice((page - 1) * limit, limit),
    length: petsByName.length - 1,
  };
};

export const getOnePet = () => {};
