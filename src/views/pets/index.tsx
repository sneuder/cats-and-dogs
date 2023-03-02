import { ScrollView } from 'react-native';

import Separator from '../../common/separator';
import MainLayout from '../../common/mainLayout';

import SearchBar from '../../components/searchBar';
import PetList from '../../components/petList';

import usePet from '../../hooks/usePet';

const Pets = ({ route }) => {
  const { pets, loadPets } = usePet(route.params.pet);

  return (
    <ScrollView>
      <MainLayout>
        <SearchBar />
        <Separator />
        <PetList
          pets={pets}
          loadPets={loadPets}
        />
      </MainLayout>
    </ScrollView>
  );
};

export default Pet;
