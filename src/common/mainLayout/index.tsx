import { StyleSheet, View } from 'react-native';

const MainLayout = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    padding: 20,
  },
});

export default MainLayout;
