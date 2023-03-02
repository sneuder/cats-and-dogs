import store from './src/state';
import { Provider } from 'react-redux';

import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/views/home/indext';
import Dogs from './src/views/dogs/index';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="Pets"
            component={Dogs}
          />
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
    </Provider>
  );
}
