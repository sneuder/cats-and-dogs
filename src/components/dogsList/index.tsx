import { Text, View, FlatList, Image, StyleSheet } from 'react-native';

const DogsList = ({ dogs }: any) => {
  return (
    <FlatList
      scrollToOverflowEnabled={false}
      style={style.dogsList}
      data={dogs}
      renderItem={({ item: dog }) => (
        <View style={style.dogCard}>
          <Image
            style={style.image}
            source={{ uri: dog.image.url }}
          />
          <View style={style.infoContainer}>
            <Text key={dog.key}>{dog.name}</Text>
          </View>
        </View>
      )}
    />
  );
};

const style = StyleSheet.create({
  dogsList: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  dogCard: {
    backgroundColor: '#756363',
    borderRadius: 8,
    marginBottom: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  infoContainer: {
    margin: 10,
  },
});

export default DogsList;
