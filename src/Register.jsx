import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const [error,seterror] = useState('')
    const [mistake,setMistake] = useState()
    const [success,setsuccess] = useState('')
    console.log(error)
    console.log(success)
    const handleRegister = e =>{
        e.preventDefault()
    
        const form = new FormData(e.currentTarget)
        const email = form.get('Email')
        const password = form.get('password')
        const name = form.get('name')
        const photo = form.get('photoUrl')
        console.log(email,password,name,photo)


       
        console.log(mistake)

        setMistake('')
        seterror('')
        if(password.length < 6){
          setMistake('Password should be at least 6 character')
          return
        }
        else if(/A-Z/.test(password)){
          setMistake(" Your password don't have a capital letter")
          return
        }
        else if(!/^(?=.*[A-Z])(?=.*[\W_]).*$/.test(password)){
          setMistake('Your password should have a special character')
          return
        }
    
    
        createUser(email,password)
        .then(res =>{
            Swal.fire(
                'Good job!',
              'You have successfully Login!',
              'success')
        
            console.log(res.user)
            
          
            setsuccess(res?.user?.email)
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
      <h1 className="text-5xl font-bold">Register now!</h1>
    </div>
   
   <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister}  className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
        </div><div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="url" name='photoUrl'  placeholder="Photo Url" className="input input-bordered" required />
        </div>
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
          <button  className="btn btn-secondary hover:bg-green-500">Register</button>
         
        </div>
      </form>
      <p className="text-red-800 mt-3">{mistake || error}</p>
          <p className="text-green-800 mt-3">User Email:{success}</p>
      <p className=" mb-3 text-center">Already have an account ?<Link to="/login" className="link link-accent">Login</Link></p>

    </div>
  </div>
</div>
            
        </div>
    );
};

export default Register;