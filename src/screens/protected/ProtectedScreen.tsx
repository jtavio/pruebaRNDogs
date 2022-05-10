import React from 'react'
import { PokemonList } from '../../components/PokemonList'
import {
  SafeAreaView,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


export const ProtectedScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    
    <View style={[backgroundStyle, {paddingBottom:0}]}>
        <PokemonList/>
    </View>
    
  )
}
