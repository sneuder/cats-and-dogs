import { Text, View, Image, StyleSheet } from 'react-native';
import Separator from '../../common/separator';

const DogsList = ({ dogs }: any) => {
  if (dogs === undefined) return <View></View>;

  return (
    <View>
      {dogs.map((dog: any, index: number) => (
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
          {index !== dogs.length - 1 && <Separator />}
        </View>
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

export default DogsList;
