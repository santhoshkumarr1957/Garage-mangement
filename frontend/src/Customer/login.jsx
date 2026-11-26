import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function App() {
  const navigate =useNavigate()
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
  const e = (event) => {
    event.preventDefault()
    console.log("login page")
    console.log(formdata)
    alert("Successful login")
    navigate('/dashboard',{state:formdata})
  }
  return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
            <div className="w-full max-w-md bg-white p-8 border-gray-200">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Garage Management Login</h2>
                <form onSubmit={e} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type='email' required placeholder='Enter your email' name='email' onChange={handlechange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input type='password' required placeholder='Enter your password' name='password' onChange={handlechange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"/>
                    </div>
                    <button type='submit' className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200">sign in</button>
                </form>
            </div>
        </div>
    )
}

export default App
