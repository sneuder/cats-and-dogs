import { Text, TouchableOpacity, View } from 'react-native';
import useNavigator from '../../hooks/useNavigator';
import styles from './styles';

const Navigation = () => {
  const { total, current, itemsToRender, handleChangePage } = useNavigator();

  if (total === 0) return null;

  return (
    <View style={styles.container}>
      {itemsToRender().map(({ position }, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.containerSection,
            current === position && styles.current,
          ]}
          onPress={() => handleChangePage(position)}
        >
          <Text style={[current === position && styles.text]}>{position}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Navigation;
