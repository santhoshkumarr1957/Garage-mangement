import { Link, Outlet } from "react-router-dom";


function Admindashboard() {
    return ( 
        <div>
            <label>Admindashboard</label>
            <Link to={"customer"}>Customerpage </Link>
            <Link to={"inventory"}>Inventorypage </Link>
            <Link to={"jobavailable"}>Jobavailablepage </Link>
            <Link to={"jobdetails"}>Jobdetailspage </Link>
            <Link to={"mechanics"}>Mechanicspage </Link>
            <Outlet/>
        </div>
     );
}

export default Admindashboard;