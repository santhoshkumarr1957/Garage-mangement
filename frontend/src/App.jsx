import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Customer/login'
import Dashboard from './Customer/dashboard'
import Register from './Customer/register';
import Admindashboard from './owner/dashboard';
import Inventory from './owner/inventory';
import Jobavlb from './owner/jobavailable';
import Mechanics from './owner/mechanics';
import Jobdetails from './owner/jobdetails';
import Customer from './owner/customers';
import Myvehicles from './Customer/myVehicles';
import Bookservice from './Customer/bookservice';


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/myvehicles' element={<Myvehicles/>}/>
        <Route path='/estimate' element={<Bookservice/>}/>
        <Route path='/bookservice' element={<Bookservice/>}/>
        <Route path='/admin' element={<Admindashboard/>}>
          <Route path='customer' element={<Customer/>}/>
          <Route path='inventory' element={<Inventory/>}/>
          <Route path='jobavailable' element={<Jobavlb/>}/>
          <Route path='jobdetails' element={<Jobdetails/>}/>
          <Route path='mechanics' element={<Mechanics/>}/>
        </Route>
      </Routes>
    </BrowserRouter>  
  )
}

export default App
