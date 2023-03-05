import axios from 'axios';
import PetType from '../interfaces/PetType';
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
  limit: number
) => {
  const allPets = (await getAllPets(petType)).data;
  const petsByName = allPets
    .filter((pet: any) => pet.name.toLowerCase().includes(petName))
    .map((pet: any) => Pet(pet, petType));

  return petsByName;
};

export const getOnePet = () => {};
