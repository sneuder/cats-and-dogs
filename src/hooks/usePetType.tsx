import PetType from '../interfaces/PetType';
import { useDispatch } from 'react-redux';
import { petTypeChange } from '../state/slices/app';

const usePetType = (petType: PetType) => {
  const dispatch = useDispatch();
  dispatch(petTypeChange(petType));
};

export default usePetType;
