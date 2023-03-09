import { FC } from 'react';
import Children from '../../interfaces/Children';
import { View } from 'react-native';
import styles from './styles';

const MainLayout: FC<Children> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default MainLayout;
