import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  useColorScheme,
} from 'react-native';

import { PokemonList } from './src/components/PokemonList';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/navigator/Navigator';

const App = () => {
  

  return (
    <Provider store={store}>
        <NavigationContainer>
          <Navigator/>
        </NavigationContainer>
      </Provider>
    
  );
};

export default App;
