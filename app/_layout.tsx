import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, Text } from 'react-native';

import { useEffect } from 'react';
import { Lobster_400Regular,useFonts } from '@expo-google-fonts/lobster';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  
  const [loaded, error] = useFonts({
    Anton: require('../assets/fonts/Anton-Regular.ttf'),
    Lobster: Lobster_400Regular
  });
  
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
    <Stack>
      <Stack.Screen name='index' options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen name='(tabs)' options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen name='register' options={{headerShown: false}}></Stack.Screen>
    </Stack>
    </>
  );
}


