import { Fragment } from 'react';

import { StyleSheet, Image, TouchableHighlight, View } from 'react-native';

import MainLayout from '../../common/mainLayout';
import ListLayout from '../../common/listLayout';

import homeOptions from '../../constants/homeOptions';

const Home = ({ navigation }) => {
  return (
    <MainLayout>
      {homeOptions.map(({ name, image, pet }, index) => (
        <Fragment key={pet}>
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
        </Fragment>
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
