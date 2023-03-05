import { Text, View, Image } from 'react-native';

import LoaderPets from '../../common/loaders/pets/indext';
import ListLayout from '../../common/listLayout';

import styles from './styles';

const PetList = ({ pets, loadPets }: any) => {
  if (loadPets) return <LoaderPets />;

  return (
    <ListLayout>
      {pets.map((pet: any) => (
        <View
          style={styles.dogCard}
          key={pet.id}
        >
          <Image
            style={styles.image}
            source={{
              uri: pet.image,
            }}
          />
          <View style={styles.infoContainer}>
            <Text>{pet.name}</Text>

            <View style={styles.tempsContainer}>
              {pet.temperaments.map((temperament: string) => (
                <View
                  key={temperament}
                  style={styles.tempContainer}
                >
                  <Text>{temperament}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      ))}
    </ListLayout>
  );
};

export default PetList;
