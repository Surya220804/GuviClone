import './App.css';
import Career from './components/Careers/Career';
import Home from './components/HomeComponent/Home';
import Header from './components/HeaderComponent/Header';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Login from './components/Login/LoginPage';
import Frontend from './components/Careers/Roles/Frontend';
import Backend from './components/Careers/Roles/Backend';
import ManualTesting from './components/Careers/Roles/ManualTesting';
import UIUX from './components/Careers/Roles/UIUX';
import DataAnalyst from './components/Careers/Roles/DataAnalyst';
import MobileApp from './components/Careers/Roles/MobileApp';
import OnlineCourse from './components/OnlineDegree/onlineCourse';

function App() {
  return (
    <div>
       <BrowserRouter>
       <Header/>
       <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/careers' element={<Career/>}></Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/online' element={<OnlineCourse/>}/>
        <Route path='/apply/FrontendPage' element={<Frontend/>}/>
        <Route path='/apply/BackendPage' element={<Backend/>}/>
        <Route path='/apply/ManualTestingPage' element={<ManualTesting/>}/>
        <Route path='/apply/UIUXPage' element={<UIUX/>}/>
        <Route path='/apply/dataAnalystPage' element={<DataAnalyst/>}/>
        <Route path='/apply/MobileAppPage' element={<MobileApp/>}/>
       </Routes>
       </BrowserRouter>
    </div>
  );
}
export default App;
