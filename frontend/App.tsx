import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppProvider } from './AppContext';
import GameScreen from './screens/GameScreen';
import PauseScreen from './screens/PauseScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    //the app provider wrapper is providing the state from the context API to everything listed below
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Game" component={GameScreen} />
          <Stack.Screen name="Pause" component={PauseScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

export default App;


