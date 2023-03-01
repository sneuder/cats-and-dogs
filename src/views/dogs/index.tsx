import { View } from 'react-native';

import SearchBar from '../../components/searchBar';
import DogsList from '../../components/dogsList';

import useDogs from '../../hooks/useDogs';

const Dogs = () => {
  const { dogs } = useDogs();

  return (
    <View>
      <SearchBar />
      <DogsList dogs={dogs} />
    </View>
  );
};

export default Dogs;
