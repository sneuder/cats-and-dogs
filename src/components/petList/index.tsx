import { Text, View, Image, StyleSheet } from 'react-native';

import LoaderPets from '../../common/loaders/pets/indext';
import ListLayout from '../../common/listLayout';

const PetList = ({ pets, loadPets }: any) => {
  if (loadPets) return <LoaderPets />;

  return (
    <View>
      {pets.map((pet: any, index: number) => (
        <ListLayout
          index={index}
          collection={pets}
          key={pet.id}
        >
          <View style={style.dogCard}>
            <Image
              style={style.image}
              source={{
                uri:
                  pet.image?.url ||
                  `https://cdn2.thecatapi.com/images/${pet.reference_image_id}.jpg`,
              }}
            />
            <View style={style.infoContainer}>
              <Text>{pet.name}</Text>
            </View>
          </View>
        </ListLayout>
      ))}
    </View>
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
  },
});

export default PetList;
