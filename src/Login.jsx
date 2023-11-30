import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const {SignIn,GoogleSignIn} = useContext(AuthContext)
    const [error,setError] = useState()
    const handleLogin = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email,password)
        SignIn(email,password)
        .then(res=>{
          Swal.fire(
            'Well Done!',
                     'You have successfully Login!',
                     'success'
          )
          setError = null

            console.log(res.user)
        })
        .catch(error =>{
            setError(error.message)
        })
    }


    const handlegoogle = () =>{
        GoogleSignIn()
        .then(res =>{
            console.log(res.user)
        })
        .catch(error =>{
            console.log(user)
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                  <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                  </div>
                  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleLogin}>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                          <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                      </div>
                      <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                      </div>
                    </form>
                    <p className="text-red-700">{error}</p>
                    <div className="mx-3 mb-4">
                    <p>Don't have account ? please <Link to="/register" className="link-success">Register</Link></p>
                    <button onClick={handlegoogle} className="btn btn-accent w-full mt-3">Continue with Google</button>

                    </div>
                  </div>
                </div>
              </div>
        </div>
    );
};

export default Login;