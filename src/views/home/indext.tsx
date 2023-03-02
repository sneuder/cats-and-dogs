import { StyleSheet, Image, TouchableHighlight } from 'react-native';

import Separator from '../../common/separator';
import MainLayout from '../../common/mainLayout';

import homeOptions from '../../constants/homeOptions';

const Home = ({ navigation }) => {
  return (
    <MainLayout>
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
