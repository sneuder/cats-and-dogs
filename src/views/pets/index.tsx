import { ScrollView } from 'react-native';

import MainLayout from '../../common/mainLayout';

import SearchBar from '../../components/searchBar';
import PetList from '../../components/petList';
import Navigation from '../../components/navigation';

import usePet from '../../hooks/usePet';
import usePetType from '../../hooks/usePetType';

const Pets = ({ route }) => {
  usePetType(route.params.pet);
  const { pets, loadPets, handleSearchDogs } = usePet();

  return (
    <ScrollView>
      <MainLayout>
        <SearchBar eventSearch={handleSearchDogs} />
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
