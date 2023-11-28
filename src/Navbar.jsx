import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink ></li>
        <li><NavLink to="/">Community</NavLink ></li>
        <li><NavLink to="/">Blogs</NavLink ></li>
        <li><NavLink to="/">About Us</NavLink ></li>
        <li><NavLink to="/">Contact us</NavLink ></li>
    </>


    return (
        <div>
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
    <img className="w-16 h-16" src="https://i.ibb.co/sRgpgcx/logo.png" alt="" />
    <a className="btn btn-ghost text-xl">NTG'</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
  <NavLink to="/login"> <button className="btn ">Login</button></NavLink >
  </div>
</div>
            
        </div>
    );
};

export default Navbar;