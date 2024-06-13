import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// Importando as fontes
import { useFonts } from '@expo-google-fonts/roboto';
import { useFonts as useArial } from '@expo-google-fonts/arial';

export default function Main() {
  let [fontsLoaded] = useFonts({
    Roboto: require('../assets/fonts/Roboto-Regular.ttf'),
  });

  let [arialLoaded] = useArial({
    Arial: require('../assets/fonts/arial.ttf'),
  });

  if (!fontsLoaded || !arialLoaded) {
    return null;
  }

  return <App />;
}

AppRegistry.registerComponent(appName, () => Main);
