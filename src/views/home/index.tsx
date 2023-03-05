import { Fragment } from 'react';
import { Image, TouchableHighlight, View } from 'react-native';

import MainLayout from '../../common/mainLayout';
import homeOptions from '../../constants/homeOptions';

import styles from './styles';

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

export default Home;
