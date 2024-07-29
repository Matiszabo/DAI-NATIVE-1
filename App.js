import { useState, useEffect } from 'react';
import { View, StyleSheet, StatusBar, Button } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { Asset } from 'expo-asset';
import InputScreen from './screens/InputScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadResources = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        const splashImage = Asset.fromModule(require('./assets/image/splash.png'));
        await splashImage.downloadAsync();
        await new Promise(resolve => setTimeout(resolve, 3000));
      } catch (e) {
        console.warn(e);
      } finally {
        setIsLoading(false);
        await SplashScreen.hideAsync();
      }
    };
    loadResources();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <InputScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', 
  }
});
