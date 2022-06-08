/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useFonts } from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { DripsyProvider } from 'dripsy';

import type { RootStackParamList } from './types/navigation';
import theme, { fontName } from './theme';

import Home from './screens/Home';
import Details from './screens/Details';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [loaded] = useFonts({
    [fontName]: require('./assets/fonts/Inter-Regular.ttf'),
    InterBold: require('./assets/fonts/Inter-Bold.ttf'),
    InterLight: require('./assets/fonts/Inter-Light.ttf'),
    InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
    InterSemibold: require('./assets/fonts/Inter-SemiBold.ttf'),
  });

  if (!loaded) return null;

  return (
    <DripsyProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </DripsyProvider>
  );
}
