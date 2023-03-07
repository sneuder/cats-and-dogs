import { useDispatch } from 'react-redux';
import { searchDog } from '../state/slices/app';

const useSearch = () => {
  const dispatch = useDispatch();

  const handleSearch = (text: string) => {
    dispatch(searchDog(text.trim().toLowerCase()));
  };

  return {
    handleSearch,
  };
};

export default useSearch;
