import { useNavigate } from "react-router-dom";
import { registerschema } from "../components/registerschema";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"


function Register() {
    const navigate = useNavigate()
    const{register,handleSubmit,formState:{errors}}=useForm({
        resolver:zodResolver(registerschema)
    })
    function getdata(data){
        console.log(data)
        alert("register Successful")
        navigate('/',{state:data})
    }

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100 ">
        <div className="max-w-md bg-white p-8 border border-gray-100 rounded-xl w-full">
        <form onSubmit={handleSubmit(getdata)} >
            <h1 className="text-2xl font-bold text-center mb-5">Garage Management Register</h1>
            <label htmlFor="username" className="block ">Name:</label>
            <input type='text' required placeholder='Enter your Name' id='username' {...register("name")} className="w-full border border-grey-100 rounded-sm focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 px-3 py-2 mb-4"/>
            <p className="text-red-500 text-xs mt-1">{errors.name?.message}</p>
            <label htmlFor="email" className="block ">E-mail:</label>
            <input type='text' required placeholder='Enter your email' id='email' {...register("email")} className="w-full border border-grey-100 rounded-sm focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 px-3 py-2 mb-4"/>
            <p className="text-red-500 text-xs mt-1">{errors.email?.message}</p>
            <label htmlFor="password" className="block ">Password:</label>
            <input type='text' required placeholder='Enter your password' id='password' {...register("password")} className="w-full border border-grey-100 rounded-sm focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 px-3 py-2 mb-4"/>
            <p className="text-red-500 text-xs mt-1">{errors.password?.message}</p>
            <label htmlFor="age" className="block ">Age:</label>
            <input type='text' required placeholder='Enter your age' id='age' {...register("age")} className="w-full border border-grey-100 rounded-sm focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 px-3 py-2 mb-4"/>
            <p className="text-red-500 text-xs mt-1">{errors.age?.message}</p>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-sm cursor-pointer" type="submit">Register </button>
        </form>
        </div>
        </div>
     );
}

export default Register;