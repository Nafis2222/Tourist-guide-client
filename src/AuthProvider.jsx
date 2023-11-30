import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "./firebase.config";




export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    const createUser = (email,password) =>{
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const SignIn = (email,password) => {
      return  signInWithEmailAndPassword(auth,email,password)
    }

    const GoogleSignIn = () =>{
        return signInWithPopup(auth,provider)
    }

    const Logout = () =>{
        return signOut(auth)
    }

 


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)

        })
        return unSubscribe()
       
    },[])


    const AuthInfo = {
        user,loading,
        createUser,SignIn,GoogleSignIn,Logout
    }
   
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;