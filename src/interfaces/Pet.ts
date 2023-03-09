import Animals from './Animals';

interface PetFormatted extends Animals {
  temperaments: string[];
  image: string;
}

export interface PetRequested extends Animals {
  temperament: string;
  reference_image_id: string;
}

export default PetFormatted;
