import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Basic = () => {
    return (
        <div>
            
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Basic;