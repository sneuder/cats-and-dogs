import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Separator from '../../common/separator';
import homeOptions from '../../constants/homeOptions';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {homeOptions.map(({ name, image }, index) => (
        <>
          <TouchableHighlight
            style={styles.image}
            onPress={() => navigation.navigate(name)}
          >
            <Image
              style={styles.image}
              source={{
                uri: image,
              }}
            />
          </TouchableHighlight>
          {index !== homeOptions.length - 1 && <Separator />}
        </>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 20,
  },

  image: {
    flex: 1,
    width: '100%',
    borderRadius: 8,
  },
});

export default Home;
