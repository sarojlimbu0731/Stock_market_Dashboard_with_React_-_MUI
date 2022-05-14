import './App.css';

// import { ThemeProvider } from '@mui/styles';
// import { theme } from './theme';
import { Stack } from '@mui/material';
import Display from './components/Display';
import Racks from './components/Racks';
import Navbar from './components/Navbar';


function App() {
  return (
    // <ThemeProvider theme={theme}>
    //   <Layout/>
    // </ThemeProvider>
    <div>
    <Navbar/>
    <Stack direction="row">
  
      <Racks/>
      
      <Display />

      
    </Stack>
    </div>

  );
}

export default App;
