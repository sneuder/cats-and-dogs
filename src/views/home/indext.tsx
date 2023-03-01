import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Separator from '../../common/separator';

const Home = ({ navigation }) => {
  const moving = () => {};
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.image}
        onPress={() => navigation.navigate('Dogs')}
      >
        <Image
          style={styles.image}
          source={{
            uri: 'https://images.unsplash.com/photo-1503844281047-cf42eade5ca5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
          }}
        />
      </TouchableHighlight>
      <Separator />
      <TouchableHighlight>
        <Image
          style={styles.image}
          source={{
            uri: 'https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80',
          }}
        />
      </TouchableHighlight>
      <Separator />
      <Image
        style={styles.image}
        source={{
          uri: 'https://images.unsplash.com/photo-1446482972539-0ed52b3e9520?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        }}
      />
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
