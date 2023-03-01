import { View, ScrollView, StyleSheet } from 'react-native';

import Separator from '../../common/separator';

import SearchBar from '../../components/searchBar';
import DogsList from '../../components/dogsList';

import useDogs from '../../hooks/useDogs';

const Dogs = () => {
  const { dogs } = useDogs();

  return (
    <ScrollView style={style.container}>
      <SearchBar />
      <Separator />
      <DogsList dogs={dogs} />
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});

export default Dogs;
