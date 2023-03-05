import { ScrollView } from 'react-native';

import MainLayout from '../../common/mainLayout';

import SearchBar from '../../components/searchBar';
import PetList from '../../components/petList';
import Navigation from '../../components/navigation';

import usePet from '../../hooks/usePet';

const Pets = ({ route }) => {
  const { pets, loadPets } = usePet(route.params.pet);

  return (
    <ScrollView>
      <MainLayout>
        <SearchBar />
        <PetList
          pets={pets}
          loadPets={loadPets}
        />
        <Navigation />
      </MainLayout>
    </ScrollView>
  );
};

export default Pets;
