import Children from '../../interfaces/Children';
import { FC } from 'react';
import { View } from 'react-native';

import styles from './styles';

const ListLayout: FC<Children> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default ListLayout;
