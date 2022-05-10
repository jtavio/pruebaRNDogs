
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProtectedScreen } from '../screens/protected/ProtectedScreen';
import { PerfilScreen } from '../screens/perfil/PerfilScreen';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

export const TabsNavigation = ()  => {
  return (
    <Tab.Navigator
     
    screenOptions={{
      tabBarActiveTintColor: '#e91e63',
    }}
    >
      <Tab.Screen  options={{
          headerShown:false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            // <MaterialCommunityIcons name="home" color={color} size={size} />
            <Icon name="home" size={size} color={color} />
          ),
      }} name="Protected" component={ProtectedScreen} />
      <Tab.Screen options={{
          headerShown:false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            // <MaterialCommunityIcons name="home" color={color} size={size} />
            <Icon name="person" size={size} color={color} />
          ),
      }} name="Profile" component={PerfilScreen} />
     
      
    </Tab.Navigator>
  );
}