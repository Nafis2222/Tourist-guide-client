import { useParams } from "react-router-dom";
import UseAxiosPublic from "./Hooks/UseAxiosPublic";
import { useState } from "react";
import { GoMirror } from "react-icons/go";

const PackageDetails = () => {
    const   axiosPublic = UseAxiosPublic()
    const {details} = useParams()
    const [ourDetails,setOurDetails] = useState()
    const [pic,setPic] = useState()
    // console.log(details)

    axiosPublic.get(`http://localhost:5000/package/${details}`)
    .then(res=>{
      setPic(res.data?.details?.images)
    })
    return (
        <div>
            <div className="grid mt-5 md:grid-cols-2 gap-2  mx-auto lg:grid-cols-3">
                {
                    pic?.map(single=><div className="" key={single?.id}>
                     <img className="w-full h-48" src={single?.url} alt="" />
                    </div>)
                }
                <div>
                <p className="text-2xl ml-1 md:ml-2  font-bold text-orange-600">This is our gallery section !!</p>
               <div className="flex mt-5 ">
                <h1 className="text-lg ml-1 md:ml-2 text-gray-600 font-semibold my-7">Just focus on the mirror || 
                <span ><GoMirror /></span></h1>
               <img className="w-1/2 h-32 mx-auto" src="https://i.ibb.co/27J47DT/images-21.jpg" alt="" />
               </div>

                </div>
            </div>
            
        </div>
    );
};

export default PackageDetails;