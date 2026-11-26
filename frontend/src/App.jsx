import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Customer/login'
import Dashboard from './Customer/dashboard'
import Register from './Customer/register';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>  
  )
}

export default App
