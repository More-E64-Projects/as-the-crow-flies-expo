import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppProvider } from './AppContext';
import GameScreen from './screens/GameScreen';
import PauseScreen from './screens/PauseScreen';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import WinScreen from './screens/WinScreen';
import { useFonts } from 'expo-font';
import LoseScreen from './screens/LoseScreen';

const Stack = createNativeStackNavigator();

function App() {

  const [fontsLoaded] = useFonts({
    'Comfortaa': require('./assets/fonts/Comfortaa-VariableFont_wght.ttf'),
  });

  return (
    //the app provider wrapper is providing the state from the context API to everything listed below
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="Game" component={GameScreen} />
          <Stack.Screen name="Pause" component={PauseScreen} />
          <Stack.Screen name="Win" component={WinScreen} />
          <Stack.Screen name="Lose" component={LoseScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

export default App;


