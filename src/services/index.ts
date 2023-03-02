import axios from 'axios';

type PetType = 'dog' | 'cat';

const baseURLs = (petType: PetType) => `https://api.the${petType}api.com/v1`;

export const getAllPets = (petType: PetType, page: number, limit: number) => {
  return axios({
    method: 'get',
    url: `${baseURLs(petType)}/breeds`,
    params: {
      page: page,
      limit: limit,
    },
  });
};

export const getOnePet = () => {};
