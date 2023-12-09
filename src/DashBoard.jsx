import { useContext } from "react";
import Bonus from "./Bonus";
import { AuthContext } from "./AuthProvider";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Shared/Footer";

const DashBoard = () => {
    const {userFinal} = useContext(AuthContext)
    console.log(userFinal?.email)

    return (
        <div>
            <Bonus></Bonus>
            <div>
                <div className="w-full p-8 rounded-badge bg-orange-500">
                    {
                        userFinal?.email=="nafisbhuiyan@gmail.com" ?
                        <>
                         <h1 className="text-center my-1 font-bold text-white"><Link to="/adminProfile" className="btn btn-active">My profile</Link></h1>
                        <h1 className="text-center my-1 font-bold text-white"><Link to="/addPackage" className="btn btn-active">Add Package</Link></h1>
                        <h1 className="text-center my-1 font-bold text-white"><Link to="/manageUsers" className="btn btn-active">Manage Users</Link></h1>

                        </>
                        :
                        <>
                        <h1 className="text-center my-1 font-bold text-white"><Link to="/myProfile" className="btn  w-full  btn-active">My profile</Link></h1>
                        <h1 className="text-center my-1 font-bold text-white"><Link to="/myBooking" className="btn  w-full  btn-active">My Booking</Link></h1>
                        <h1 className="text-center my-1 font-bold text-white"><Link to="/myWhiteList"className="btn w-full   btn-active">My WhiteList</Link></h1>

                        </>
                    }

            </div>

            </div>
        </div>
    );
};

export default DashBoard;