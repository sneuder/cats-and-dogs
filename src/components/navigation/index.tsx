import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';

const Navigation = ({ amount }) => {
  return (
    <View style={styles.container}>
      {Array(amount).fill(
        <TouchableOpacity style={styles.containerSection}>
          <Text>1</Text>
        </TouchableOpacity>
      )}
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
