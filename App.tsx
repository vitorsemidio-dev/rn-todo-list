import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter';
import { TodoApp } from '@screens/TodoApp';
import theme from '@theme/index';
import { StatusBar, Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {!fontsLoaded ? <Text>Loading</Text> : <TodoApp />}
      </ThemeProvider>
    </>
  );
}
