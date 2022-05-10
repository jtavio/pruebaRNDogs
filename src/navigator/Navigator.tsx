import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/login/LoginScreen';
import { ProtectedScreen } from '../screens/protected/ProtectedScreen';
import { useAppSelector } from '../hooks/hooks';
import { DetailsDogsScreen } from '../screens/protected/details/DetailsDogsScreen';
import { TabsNavigation } from './TabNavigator';

const Stack = createStackNavigator();
export const Navigator = () => {
  const { isLogged} = useAppSelector(state => state.login);
  return (
    <Stack.Navigator 
        screenOptions={{
            headerShown:false,
            
        }}
    >

        {
          (isLogged != true)
          ?
          (
            <Stack.Screen name="LoginScreen" component={LoginScreen} /> 

          )
          :
          (
            <>
            
            <Stack.Screen name="ProtectedScreen" component={TabsNavigation} />
            <Stack.Screen options={{ headerShown:true}} name="DetailsDogsScreen" component={DetailsDogsScreen} />
            </>

          )
        }

       
    </Stack.Navigator>
  )
}
