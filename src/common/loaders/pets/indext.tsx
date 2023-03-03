import { View, StyleSheet } from 'react-native';
import ListLayout from '../../listLayout';

const LoaderPets = () => {
  const times = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <View>
      {times.map((time, index) => (
        <ListLayout
          key={index}
          collection={times}
          index={index}
        >
          <View style={styles.container}></View>
        </ListLayout>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 250,
    backgroundColor: 'brown',
    borderRadius: 8,
  },
});

export default LoaderPets;
