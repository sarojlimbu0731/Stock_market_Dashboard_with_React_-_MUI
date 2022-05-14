import './App.css';
import Layout from './components/Layout';
import { createTheme } from '@mui/system';
import { ThemeProvider } from '@mui/styles';

// const theme= createTheme({
//   zIndex:{
//     appBar:`1201`
//   }
// })
function App() {
  return (
    <ThemeProvider>
      <Layout/>
    </ThemeProvider>


  );
}

export default App;
