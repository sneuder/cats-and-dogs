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
    backgroundColor: '#D8D6D6',
    borderColor: '#D8D6D6',
  },
  current: {
    backgroundColor: '#246AAD',
    borderColor: '#246AAD',
  },
  text: {
    color: 'white',
  },
});

export default styles;
