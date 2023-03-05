import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import useNavigator from '../../hooks/useNavigator';

const Navigation = () => {
  const { total, current, itemsToRender, handleChangePage } = useNavigator();

  if (total === 0) return;

  return (
    <View style={styles.container}>
      {itemsToRender().map(({ position }) => (
        <TouchableOpacity
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

export default Navigation;
