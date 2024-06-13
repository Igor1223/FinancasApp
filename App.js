import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TransactionProvider } from './contexts/TransactionContext';
import HomeScreen from './screens/HomeScreen';
import AddTransactionScreen from './screens/AddTransactionScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <TransactionProvider>
      <StatusBar translucent barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator>
          {!isLoggedIn ? (
            <>
              <Stack.Screen 
                name="Login" 
                options={{ title: 'Login', headerStyle: { backgroundColor: '#4CAF50' }, headerTintColor: '#fff' }}
              >
                {(props) => <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
              </Stack.Screen>
              <Stack.Screen 
                name="Register" 
                component={RegisterScreen} 
                options={{ title: 'Cadastro', headerStyle: { backgroundColor: '#4CAF50' }, headerTintColor: '#fff' }}
              />
            </>
          ) : (
            <>
              <Stack.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{ title: 'Início', headerStyle: { backgroundColor: '#4CAF50' }, headerTintColor: '#fff' }}
              />
              <Stack.Screen 
                name="AddTransaction" 
                component={AddTransactionScreen} 
                options={{ title: 'Adicionar Transação', headerStyle: { backgroundColor: '#4CAF50' }, headerTintColor: '#fff' }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </TransactionProvider>
  );
};

export default App;
