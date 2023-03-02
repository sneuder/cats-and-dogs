import { ScrollView } from 'react-native';

import Separator from '../../common/separator';
import MainLayout from '../../common/mainLayout';

import SearchBar from '../../components/searchBar';
import PetList from '../../components/petList';

import useDogs from '../../hooks/usePet';

const Dogs = ({ navigation }) => {
  const { dogs } = useDogs('cat');

  return (
    <ScrollView>
      <MainLayout>
        <SearchBar />
        <Separator />
        <PetList dogs={dogs} />
      </MainLayout>
    </ScrollView>
  );
};

export default Dogs;
