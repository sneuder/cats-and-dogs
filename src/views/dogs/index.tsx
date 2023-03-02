import { ScrollView } from 'react-native';

import Separator from '../../common/separator';
import MainLayout from '../../common/mainLayout';

import SearchBar from '../../components/searchBar';
import DogsList from '../../components/dogsList';

import useDogs from '../../hooks/useDogs';

const Dogs = () => {
  const { dogs } = useDogs();

  return (
    <ScrollView>
      <MainLayout>
        <SearchBar />
        <Separator />
        <DogsList dogs={dogs} />
      </MainLayout>
    </ScrollView>
  );
};

export default Dogs;
