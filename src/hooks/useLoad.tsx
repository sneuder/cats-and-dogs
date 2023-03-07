import { useDispatch, useSelector } from 'react-redux';
import { toggleBooleanStates } from '../state/slices/app';

const useLoad = () => {
  const dispatch = useDispatch();
  const { loadPets } = useSelector((state: any) => state.app);

  const handleLoadPet = (value: boolean) => {
    dispatch(toggleBooleanStates(['loadPets', value]));
  };

  return {
    loadPets,
    handleLoadPet,
  };
};

export default useLoad;
