import PetType from '../interfaces/PetType';

const Pet = (info: any, petType: PetType) => {
  const baseURLImage = (idImage: string) =>
    `https://cdn2.the${petType}api.com/images/${idImage}.jpg`;

  const formatTemps = (temps: string) => {
    const splitedTemps = temps?.split(', ');
    return splitedTemps;
  };

  return {
    id: info.id,
    name: info.name,
    image: baseURLImage(info.reference_image_id),
    temperaments: formatTemps(info.temperament),
  };
};

export default Pet;
