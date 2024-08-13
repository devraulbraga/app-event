import { StatusBar } from 'expo-status-bar';
import { NewEvent } from './src/screens/NewEvent';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
export default function App() {
  return (
    <ThemeProvider theme={theme}>
    <><StatusBar style='light' /><NewEvent /></>
      
    </ThemeProvider>
  );
}
