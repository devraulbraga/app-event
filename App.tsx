import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
export default function App() {
  return (
    <ThemeProvider theme={theme}>
    <><StatusBar style='light' /><Home /></>
      
    </ThemeProvider>
  );
}
