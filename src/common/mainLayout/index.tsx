import { StyleSheet, View } from 'react-native';

const MainLayout = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    gap: 20,
    minHeight: '100%',
    padding: 20,
  },
});

export default MainLayout;
