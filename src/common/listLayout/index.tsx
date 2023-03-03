import { View, StyleSheet } from 'react-native';

const ListLayout = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
});

export default ListLayout;
