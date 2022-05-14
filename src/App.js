import './App.css';
import {BrowserRouter, Route, Routes}from 'react-router-dom';
import Layout from './components/Layout';
import { ThemeProvider } from '@mui/styles';
import { theme } from './theme';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn'

function App() {
  return (
    // <ThemeProvider theme={theme}>
    //   <Layout/>
    // </ThemeProvider>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/layout" element={<Layout/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
