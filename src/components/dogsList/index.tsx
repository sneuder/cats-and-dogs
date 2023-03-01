import { Text, View, FlatList, Image, StyleSheet } from 'react-native';

const DogsList = ({ dogs }: any) => {
  return (
    <FlatList
      style={style.dogsList}
      ItemSeparatorComponent={() => <Text> </Text>}
      ListFooterComponent={() => <Text> </Text>}
      ListHeaderComponent={() => <Text> </Text>}
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
