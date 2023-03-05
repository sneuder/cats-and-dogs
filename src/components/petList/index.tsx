import { Text, View, Image, StyleSheet } from 'react-native';

import LoaderPets from '../../common/loaders/pets/indext';
import ListLayout from '../../common/listLayout';

const PetList = ({ pets, loadPets }: any) => {
  if (loadPets) return <LoaderPets />;

  return (
    <ListLayout>
      {pets.map((pet: any) => (
        <View
          style={style.dogCard}
          key={pet.id}
        >
          <Image
            style={style.image}
            source={{
              uri: pet.image,
            }}
          />
          <View style={style.infoContainer}>
            <Text>{pet.name}</Text>

            <View style={style.tempsContainer}>
              {pet.temperaments.map((temperament: string) => (
                <View
                  key={temperament}
                  style={style.tempContainer}
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

const style = StyleSheet.create({
  dogCard: {
    backgroundColor: '#756363',
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  infoContainer: {
    padding: 10,
    gap: 10,
  },

  tempsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },

  tempContainer: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 8,
  },
});

export default PetList;
