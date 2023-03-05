import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  containerSection: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 30,
    width: 30,
    height: 30,
  },
  current: {
    backgroundColor: 'brown',
    borderColor: 'brown',
  },
  text: {
    color: 'white',
  },
});

export default styles;
