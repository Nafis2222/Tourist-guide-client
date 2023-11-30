import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Navbar = () => {

  const {user, Logout} = useContext(AuthContext)

    const navLinks = <>
        <li><NavLink className="text-sm font-bold" to="/">Home</NavLink ></li>
        <li><NavLink className="text-sm font-bold" to="/">Community</NavLink ></li>
        <li><NavLink className="text-sm font-bold" to="/">Blogs</NavLink ></li>
        <li><NavLink className="text-sm font-bold" to="/aboutUs">About Us</NavLink ></li>
        <li><NavLink className="text-sm font-bold" to="/contactUs">Contact us</NavLink ></li>
    </>

const handleLogout = () =>{
  Logout()
  .then(res =>{
      console.log(res.user)
  })
  .catch(error =>{
      console.log(error)
  })
}



    return (
        <div>
          {/* max-w-5xl fixed z-10 bg-opacity-20 bg-black text-white */}
            <div className="navbar max-w-5xl fixed z-10 bg-opacity-20 bg-black text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <img className="w-16 h-16 rounded-lg" src="https://i.ibb.co/sRgpgcx/logo.png" alt="" />
    <a className="btn btn-ghost text-xl">NTG'</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
          {
                user ? <><img className='w-12 h-12 mr-1 rounded-full' src="https://i.ibb.co/L97LMXw/own-pic.jpg" alt="" />
                <Link><button onClick={handleLogout} className='btn'>Sign out</button></Link></>
                
                : <>
                <img className='w-12 mr-2 h-12' src="https://i.ibb.co/J50xnVF/user.png" alt="" />
                <Link to="/login"><button className='btn'>Login</button></Link>
                </>

            }  
            </div> 
</div>
            
        </div>
    );
};

export default Navbar;