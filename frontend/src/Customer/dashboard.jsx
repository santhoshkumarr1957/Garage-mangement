import { useState } from "react";
import { useLocation } from "react-router-dom";

function Dashboard() {
    const location =useLocation()
    const[logindata,setLogindata]=useState("")
    function displaydata(){
        setLogindata(location.state)
        console.log(logindata)
    }
    return ( 
        <button onClick={displaydata}>submit</button>
     );
}

export default Dashboard;