import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import useNavigator from '../../hooks/useNavigator';

const Navigation = () => {
  const { total, itemsToRender } = useNavigator();

  return (
    <View style={styles.container}>
      {itemsToRender().map(({ position }) => (
        <TouchableOpacity style={styles.containerSection}>
          <Text>{position}</Text>
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
});

export default Navigation;
