import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRightWidth: 0,
    padding: 10,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  textButton: {
    textAlign: 'center',
  },
  containerButton: {
    alignContent: 'center',
    padding: 10,
    backgroundColor: 'red',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});

export default styles;
