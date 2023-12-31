import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {userFinal, loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    if(loading){
        return <span className="loading loading-bars loading-lg"></span>
    }
    if(userFinal){
       return children
    }
    
    return    <Navigate  state={{form: location}} to="/login" replace></Navigate>
    
    
};

export default PrivateRoute;