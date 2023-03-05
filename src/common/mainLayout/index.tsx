import { View } from 'react-native';
import styles from './styles';

const MainLayout = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default MainLayout;
