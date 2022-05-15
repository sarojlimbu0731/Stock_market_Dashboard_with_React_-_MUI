import './App.css';
import Layout from "./pages/Layout";
import {BrowserRouter, Route, Routes}from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Display from './pages/Display';
import Check from './pages/Check'

function App() {
  return (
    <BrowserRouter>
      
    
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="signup" element={<SignUp/>} />
        <Route exact path="layout" element={<Layout />}>
            <Route path="display" element={<Display />} />
            <Route path="check" element={<Check />} />
        </Route>
        

      </Routes>
    
    </BrowserRouter>

  )
}

export default App;
