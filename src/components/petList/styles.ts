import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  dogCard: {
    backgroundColor: '#756363',
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  infoContainer: {
    padding: 10,
    gap: 10,
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
  },
});

export default styles;
