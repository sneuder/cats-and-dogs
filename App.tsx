import store from './src/state';
import { Provider } from 'react-redux';

import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';

import Home from './src/views/home';
import Pets from './src/views/pets';

import { createStackNavigator } from '@react-navigation/stack';
import RootStackParamList from './src/interfaces/Screens';

export default function App() {
  const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator initialRouteName="Home">
          <Screen
            name="Home"
            component={Home}
          />
          <Screen
            name="Pets"
            component={Pets}
          />
        </Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </Provider>
  );
}
