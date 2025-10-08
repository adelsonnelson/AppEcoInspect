import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/screens/LoginScreen';
import TelaCadastro from './src/screens/TelaCadastro';
import TelaBoasVindas from './src/screens/TelaBoasVindas';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        
        <Stack.Screen name="Cadastro" component={TelaCadastro} options={{ title: 'Cadastro' }} />
        
        <Stack.Screen name="BoasVindas" component={TelaBoasVindas} options={{ title: 'Bem-vindo(a)' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}