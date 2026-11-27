import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const[formdata,setFormdata]=useState({
    email:"",
    password:""
  })
  function handlechange(e){
    setFormdata({
        ...formdata,
        [e.target.name]:e.target.value
    })
  }
  const registereddata=location.state
  const e = (event) => {
    if(registereddata.email === formdata.email && registereddata.password === formdata.password){
        event.preventDefault()
        console.log("login page")
        console.log(registereddata)
        console.log(formdata)
        alert("Successful login")
        navigate('/dashboard',{state:formdata})
    }else{
        event.preventDefault()
        console.log(registereddata)
        console.log("Enter valid credentials")
    }
  }
  const r =()=>{
    navigate('/register')
  }
  return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100 ">
            <div className="max-w-md bg-white p-8 border border-gray-100 rounded-xl w-full">
                <h2 className="text-2xl font-bold text-center mb-5">Garage Management Login</h2>
                <form onSubmit={e}>
                    <div>
                        <label htmlFor='email'>Email:</label>
                        <input type='email' required placeholder='Enter your email' id='email' name='email' onChange={handlechange} className="w-full border border-grey-100 rounded-sm focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 px-3 py-2 mb-4"/>
                    </div>
                    <div>
                        <label htmlFor='password'>Password:</label>
                        <input type='password' required placeholder='Enter your password' id='password' name='password' onChange={handlechange} className="w-full border border-grey-100 rounded-sm focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 px-3 py-2 mb-4"/>
                    </div>
                    <button type='button' className="bg-transparent text-green-600 hover:text-green-800 px-80 py-1 pb-3 cursor-pointer" onClick={r}>register?</button>
                    <button type='submit'className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-sm cursor-pointer" >sign in</button>
                </form>
            </div>
        </div>
    )
}

export default App
