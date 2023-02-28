import store from './src/state';
import { Provider } from 'react-redux';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Dogs from './src/views/dogs/index';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Dogs />
        <Text>Esneider</Text>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
