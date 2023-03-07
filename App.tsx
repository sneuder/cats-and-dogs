import store from './src/state';
import { Provider } from 'react-redux';

import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/views/home';
import Pets from './src/views/pets';

import { createStackNavigator } from '@react-navigation/stack';
import PetType from './src/interfaces/PetType';

type RootStackParamList = {
  Home: {
    pet: PetType;
  };
  Pets: {
    pet: PetType;
  };
};

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
