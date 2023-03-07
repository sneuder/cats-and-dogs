import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import RootStackParamList from '../../interfaces/Screens';

import { Fragment } from 'react';
import { Image, TouchableHighlight } from 'react-native';

import MainLayout from '../../common/mainLayout';
import homeOptions from '../../constants/homeOptions';

import styles from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ navigation }: Props) => {
  return (
    <MainLayout>
      {homeOptions.map(({ name, image, pet }) => (
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
