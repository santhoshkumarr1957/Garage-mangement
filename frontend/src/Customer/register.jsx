import { useNavigate } from "react-router-dom";
import { registerschema } from "../components/registerschema";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import './register.css';

function Register() {
    const navigate = useNavigate()
    const{register,handleSubmit,formState:{errors}}=useForm({
        resolver:zodResolver(registerschema)
    })
    function onSubmit1(data){
        console.log(data)
        alert("register Successful")
        navigate('/')
    }

    return (
        <div className="registerform">
        
        <form onSubmit={handleSubmit(onSubmit1)} >
            <label className="label1">Register</label>
            <input type='text' required placeholder='Enter your Name' name='username' {...register("name")}/>
            <p>{errors.name?.message}</p>
            <input type='text' required placeholder='Enter your email' name='email' {...register("email")}/>
            <p>{errors.email?.message}</p>
            <input type='text' required placeholder='Enter your password' name='password' {...register("password")}/>
            <p>{errors.password?.message}</p>
            <input type='text' required placeholder='Enter your age' name='age' {...register("age")}/>
            <p>{errors.age?.message}</p>
            <button className="submitbutton" type="submit">Register</button>
        </form>
        </div>
     );
}

export default Register;