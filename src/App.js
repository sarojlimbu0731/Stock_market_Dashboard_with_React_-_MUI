import './App.css';
import Layout from "./components/Layout";
import {BrowserRouter, Route, Routes}from 'react-router-dom';
import Display from './pages/Display';
import Check from './pages/Check';
import Dashboard from './pages/Dashboard';



function App() {
  return (

    <BrowserRouter>

        <Layout>
        <Routes>
        <Route exact path="/" element={<Dashboard/>}/>
        <Route path="/cprofile" element={<Check/>}/>
        </Routes>
        </Layout>
         
 
    </BrowserRouter>

  )
}

export default App;
