import './App.css';
import Layout from './components/Layout';
import { ThemeProvider } from '@mui/styles';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout/>
    </ThemeProvider>


  );
}

export default App;
