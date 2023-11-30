import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
const {createUser} = useContext(AuthContext)
const  [error,setError] = useState()
    const  handleRegister = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email,password)

        setError('')

        if(password.length < 6){
          setError('Password should be at least 6 character')
          return
        }
        else if(/A-Z/.test(password)){
          setError(" Your password don't have a capital letter")
          return
        }
        else if(!/^(?=.*[A-Z])(?=.*[\W_]).*$/.test(password)){
          setError('Your password should have a special character')
          return
        }
        createUser(email,password)
        .then(res =>{

          Swal.fire(
            'Good job!',
          'You have successfully Registered!',
          'success')
              console.log(res.user)
            })
        .catch(error =>{
            setError(error.message)
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                  <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                  </div>
                  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleRegister}>
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
                        <button className="btn btn-primary">Register</button>
                      </div>
                    </form>
                    <p className="text-red-800">{error}</p>
                    <div className="mx-3 mb-4">
                    <p>Already have account ? please <Link to="/login" className="link-success">Login</Link></p>

                    </div>
                  </div>
                </div>
              </div>
        </div>
    );
};

export default Register;