import { FC } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Fragment } from 'react';
import { Image, TouchableHighlight } from 'react-native';

import MainLayout from '../../common/mainLayout';
import homeOptions from '../../constants/homeOptions';

import styles from './styles';

type RootStackParamList = {
  Home: {
    pet: string;
  };
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
type Screens = 'Home';

const Home = ({ navigation }: Props) => {
  return (
    <MainLayout>
      {homeOptions.map(({ name, image, pet }) => (
        <Fragment key={pet}>
          <TouchableHighlight
            style={styles.image}
            onPress={() =>
              navigation.navigate(name as Screens, {
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
