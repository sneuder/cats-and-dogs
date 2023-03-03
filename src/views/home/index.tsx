import { StyleSheet, Image, TouchableHighlight } from 'react-native';

import MainLayout from '../../common/mainLayout';
import ListLayout from '../../common/listLayout';

import homeOptions from '../../constants/homeOptions';

const Home = ({ navigation }) => {
  return (
    <MainLayout>
      {homeOptions.map(({ name, image, pet }, index) => (
        <ListLayout
          key={pet}
          collection={homeOptions}
          index={index}
        >
          <TouchableHighlight
            style={styles.image}
            onPress={() =>
              navigation.navigate(name, {
                pet,
              })
            }
          >
            <Image
              style={styles.image}
              source={{
                uri: image,
              }}
            />
          </TouchableHighlight>
        </ListLayout>
      ))}
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    borderRadius: 8,
  },
});

export default Home;
