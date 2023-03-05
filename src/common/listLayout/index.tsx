import { View } from 'react-native';
import styles from './styles';

const ListLayout = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default ListLayout;
