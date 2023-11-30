import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
    const {logIn,signInWithGoogle} = useContext(AuthContext)
    const [error,seterror] = useState('')
    const location = useLocation()
    const navigate = useNavigate()


    const form = location.state?.from?.pathname || "/"
    console.log(form)
console.log(error)

    const handleLogin = e =>{
        e.preventDefault()
              const form = new FormData(e.currentTarget)
        const email = form.get('Email')
        const password = form.get('password')
        console.log(email,password)
            logIn(email,password)
            .then(res => {
                const user = res.user
                if(user){
                    Swal.fire(
                        'Good job!',
                      'You have successfully Login!',
                      'success')
                }
                navigate(form, {replace: true});
                console.log(user)
            })
            .catch(error =>{
                seterror(error.message)
            })
        
   
       

    }
    const handleGoogle = () =>{
      signInWithGoogle()
        .then(res =>{
           const user = res.user
           console.log(user)
           if(user){
            Swal.fire(
                'Good job!',
              'You have successfully Login with social!',
              'success')

           }
          //  navigate('/')
            console.log(user)
        })
        .catch(error =>{
            seterror(error.message)
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
   
   <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='Email' required placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" required placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <h1 ><button  className="btn btn-accent w-full">Login</button></h1>
          <p>{error}</p>
        </div>
      </form>
      <p className=" mb-3 text-center">Don't have account ?<Link to="/register" className="link link-accent">Register</Link></p>
      <h1 className="text-center mb-2 font-medium">Or,</h1>
      <button onClick={handleGoogle} className=" btn btn-active hover:bg-green-600 mx-2">  Continue with Google</button>
    </div>
   
  </div>
</div>
        </div>
    );
};

export default Login;