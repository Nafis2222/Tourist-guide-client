import { IoDiamondOutline } from "react-icons/io5";
import Footer from "../Shared/Footer";
const About = () => {
    return (
        <div>
            <img className="h-[500px] w-full" src="https://i.ibb.co/HTxGdv7/natural.webp" alt="" />
            <div className="bg-orange-500 grid grid-cols-4">
                <div className="text-center text-white ">
                    <img className="w-12 mx-auto h-12 bg-white m-5  hover:border-8 rounded-full" src="https://i.ibb.co/hBbtqGB/download.png" alt="" />
                    <h1 className="text-2xl font-semibold">Adventure Time</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur  adipisicing .  expedita optio dolores  aperiam,  placeat mollitia?</p>
                </div>
                <div className="text-center text-white ">
                    <img className="w-12 mx-auto h-12 bg-white m-5  hover:border-8 rounded-full" src="https://i.ibb.co/s1hPpCn/images-1.png" alt="" />
                    <h1 className="text-2xl font-semibold">Branding Projects</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur  adipisicing .  expedita optio dolores  aperiam,  placeat mollitia?</p>
                </div>
                <div className="text-center text-white ">
                    <img className="w-12 mx-auto h-12 bg-white m-5  hover:border-8 rounded-full" src="https://i.ibb.co/tbgqQvy/download-1.png" alt="" />
                    <h1 className="text-2xl font-semibold">Promotion & event</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur  adipisicing .  expedita optio dolores  aperiam,  placeat mollitia?</p>
                </div>
                <div className="text-center text-white ">
                    <img className="w-12 mx-auto h-12 bg-white m-5  hover:border-8 rounded-full" src="https://i.ibb.co/GvSRTbH/images-4.jpg" alt="" />
                    <h1 className="text-2xl font-semibold">Color it all</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur  adipisicing .  expedita optio dolores  aperiam,  placeat mollitia?</p>
                </div>


            </div>
            <div className="grid max-w-screen-md md:grid-cols-2 gap-5 mx-auto my-16">
                <div className="w-full  ">
                    <img className="h-72" src="https://i.ibb.co/VVYDK3s/images-5.jpg" alt="" />
                </div>
                <div className="align-middle my-6 ">
                    <h1 className="text-4xl font-semibold">About Our Guidance</h1>
                    <h1 className="text-orange-800 my-3 font-medium">Aerial view of Cape Town with Cape Town Stadium</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet quisquam ratione quia vitae, obcaecati impedit nobis sint minima, rem totam dolor labore cupiditate corrupti suscipit, dicta eius provident pariatur quibusdam!</p>
                </div>

            </div>

            <Footer></Footer>
        </div>
    ); 
};

export default About;