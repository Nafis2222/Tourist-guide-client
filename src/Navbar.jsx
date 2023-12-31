import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Navbar = () => {

  const {userFinal, LogOut} = useContext(AuthContext)

    const navLinks = <>
        <li><NavLink className="text-sm font-bold" to="/">Home</NavLink ></li>
        <li><NavLink className="text-sm font-bold" to="/blogs">Community</NavLink ></li>
        <li><NavLink className="text-sm font-bold" to="/aboutUs">About Us</NavLink ></li>
        {/* <li><NavLink className="text-sm font-bold" to="/contactUs">Contact us</NavLink ></li> */}
    </>

const handleClick = () =>{
  LogOut()
  .then(res =>{
      console.log(res.user)
  })
  .catch(error =>{
      console.log(error)
  })
}

console.log(userFinal?.photoURL)


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
                userFinal ? <>
                {/* <h1>{userFinal?.displayName}</h1>
                <p>{userFinal?.email}</p> */}
                <details className="dropdown">
                  <summary className="m-1 ">
                  <img className='w-12 h-12 mr-1 rounded-full' src={userFinal?.photoURL} alt="https://i.ibb.co/L97LMXw/own-pic.jpg" />
                 </summary>
                  <ul className="p-2 shadow hover:bg-cyan-950 menu dropdown-content z-[1] bg-green-400 rounded-box w-60">
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><a>Offer Announcements</a></li>
                    <li><p>{userFinal?.email}</p></li>
                    <li><p>{userFinal?.displayName}</p></li>


                  </ul>
                </details>
                <Link><button onClick={handleClick} className='btn'>Sign out</button></Link>
                </>
                
                : <>
                <details className="dropdown">
                  <summary className="m-1 ">
                    <img className='w-12 mr-2 h-12 rounded-full' src="https://i.ibb.co/j3x2YgT/download-7.png" alt="" />
                 </summary>
                  <ul className="p-2 shadow menu dropdown-content z-[1] bg-green-400 rounded-box w-52">
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><a>Item 2</a></li>
                  </ul>
                </details>
                <Link to="/login"><button className='btn'>Login</button></Link>
                </>

            } 
            </div> 
</div>
            
        </div>
    );
};

export default Navbar;