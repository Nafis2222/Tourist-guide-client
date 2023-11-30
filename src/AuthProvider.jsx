import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import app from "./firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [userFinal,setuserFinal] = useState(null)
    const [loading,setLoading] = useState(true)

    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn = (email,password) =>{
        setLoading(true)

        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInWithGoogle = () =>{
        return signInWithPopup(auth,provider)
    }

    const LogOut = () =>{
        setLoading(true)

        return signOut(auth)
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log(currentUser)
            setuserFinal(currentUser)
            setLoading(false)

        })
        return unSubscribe
       
    },[])
    const AuthInfo = {userFinal,loading,createUser,logIn,signInWithGoogle,LogOut}
    return (
        <AuthContext.Provider value={AuthInfo}>
          {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;