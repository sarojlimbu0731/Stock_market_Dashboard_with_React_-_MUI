import './App.css';
import {BrowserRouter, Route, Routes}from 'react-router-dom';
import Layout from './components/Layout';

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';


function App() {
  return (
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
