import { NavLink } from "react-router-dom";

const Bonus = () => {
    return (
        <div>
            <div className="bg-green-500  text-white h-72 w-full relative">
                <div className="absolute mt-6 lg:mt-10 ml-4 ml-24 lg:ml-32">
                  <div className="flex md:gap-40 justify-between">
                    <div>
                    <h1 className="font-semibold text-xl">Shop</h1>
                    <h1 className="font-bold md:text-2xl" >We also have a wide range of <br /> capable, skilled & challenger <br /> Coach</h1>
                    <h1 className="border-black w-2/12 border-b-4"></h1>
                    <NavLink>                    <button className="btn mt-3 lg:mt-5 text-green-700 btn-active">View Coach</button>
                    </NavLink>
                  </div>
                  <div>
                    <img  src="https://i.ibb.co/m5PKzWH/download-21.jpg" alt="" />
                  </div>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Bonus;