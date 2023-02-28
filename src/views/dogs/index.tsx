import { Text } from 'react-native';
import useDogs from '../../hooks/useDogs';

const Dogs = () => {
  useDogs();
  return <Text>Esneider</Text>;
};

export default Dogs;
