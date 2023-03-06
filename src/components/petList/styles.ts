import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  petCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 10,
    gap: 10,
  },
  petName: {
    fontSize: 22,
    color: '#2C2B2B',
  },
  tempsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  tempContainer: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#D8D6D6',
  },
  temp: {
    color: '#626161',
  },
});

export default styles;
