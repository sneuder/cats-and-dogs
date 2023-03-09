import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

interface NavigationProps {
  total: number;
  current: number;
  itemsToRender: () => Position[];
  handleChangePage: (position: number) => void;
}

interface Position {
  position: number;
}

const Navigation = ({
  total,
  current,
  itemsToRender,
  handleChangePage,
}: NavigationProps) => {
  if (total === 0) return null;

  return (
    <View style={styles.container}>
      {itemsToRender().map(({ position }: Position, index: number) => (
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
