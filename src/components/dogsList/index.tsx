import { Text, View, Image, StyleSheet } from 'react-native';
import Separator from '../../common/separator';

const DogsList = ({ dogs }: any) => {
  return (
    <View>
      {dogs.map((dog: any) => (
        <View key={dog.id}>
          <View style={style.dogCard}>
            <Image
              style={style.image}
              source={{ uri: dog.image.url }}
            />
            <View style={style.infoContainer}>
              <Text>{dog.name}</Text>
            </View>
          </View>
          <Separator />
        </View>
      ))}
    </View>
  );
};

const style = StyleSheet.create({
  dogsList: {
    paddingEnd: 20,
    paddingStart: 20,
  },
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

export default DogsList;
