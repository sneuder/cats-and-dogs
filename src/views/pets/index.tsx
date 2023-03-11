import RootStackParamList from '../../interfaces/Screens';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { ScrollView } from 'react-native';

import MainLayout from '../../common/mainLayout';

import SearchBar from '../../components/searchBar';
import PetList from '../../components/petList';
import Navigation from '../../components/navigation';

import usePet from '../../hooks/usePet';
import useNavigator from '../../hooks/useNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Pets'>;

const Pets = ({ route }: Props) => {
  const { pets, loadPets, handleSearchDogs } = usePet(route.params.pet);
  const propsNavigator = useNavigator();

  return (
    <ScrollView>
      <MainLayout>
        <SearchBar eventSearch={handleSearchDogs} />
        <PetList
          pets={pets}
          loadPets={loadPets}
        />
        <Navigation {...propsNavigator} />
      </MainLayout>
    </ScrollView>
  );
};

export default Pets;
