import './App.css';
import Layout from "./pages/Layout";
import {BrowserRouter, Route, Routes}from 'react-router-dom';


import SignUp from './login/SignUp';
import SignIn from './login/SignIn';


import Dashboard from './pages/Dashboard';
import CustomerProfile from './pages/CustomerProfile';
import FundManagement from './pages/FundManagement';
import Bond from './pages/Bond';
import Equity from './pages/Equity';
import CompanyProfile from './pages/CompanyProfile';
import SecurityProfile from './pages/SecurityProfile';
import SecuritySnap from './pages/SecuritySnap';
import AddUser from './pages/AddUser';
import Users from './pages/Users';
import Country from './pages/Country';
import City from './pages/City';
import ServiceCharge from './pages/ServiceCharge';
import MasterSetting from './pages/MasterSetting';
import TransactionReport from './pages/TransactionReport';
import FundReport from './pages/FundReport';

//pagedetails
import FundDepositDetail from './pagedetails/FundDepositDetail';
import FundWithdrawerDetail from './pagedetails/FundWithdrawerDetail';

//costum theme
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';

const theme=createTheme({
  palette:{
    
  }
})



function App() {
  return (
    <BrowserRouter>

      <ThemeProvider theme={theme}>

      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/layout" element={<Layout/>} />
        <Route path="signup" element={<SignUp/>} />
        <Route  exact path="layout" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="cprofile" element={<CustomerProfile/>} />

            <Route path="fmanagement" element={<FundManagement/>}/>
            <Route path="funddeposit" element={<FundDepositDetail/>} />
            <Route path="fundwithdraw" element={<FundWithdrawerDetail />} />
       


            <Route path="bond" element={ <Bond/> } />
            <Route path="equity" element={<Equity/>} />
            <Route path="companyprofile" element={ <CompanyProfile />} />
            <Route path="securityprofile" element={ <SecurityProfile />} />
            <Route path="securitysnap" element={<SecuritySnap/>} />
            <Route path="adduser" element={ <AddUser />} />
            <Route path="users" element={ <Users />} />
            <Route path="country" element={ <Country/>} />
            <Route path="city" element={ <City />} />
            <Route path="servicecharge" element={ <ServiceCharge/>} />
            <Route path="mastersetting" element={ <MasterSetting/>} />
            <Route path="transactionreport" element={<TransactionReport/>} />
            <Route path="fundreport" element={<FundReport/>} />
        </Route>


      </Routes>

    </ThemeProvider>

    </BrowserRouter>

  );
  
}

export default App;