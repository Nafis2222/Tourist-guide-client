import { useParams } from "react-router-dom";
import Bonus from "./Bonus";
import UseAxiosPublic from "./Hooks/UseAxiosPublic";
import { useEffect } from "react";
import { useState } from "react";
import RatingComment from "./RatingComment";

const GuideDetails = () => {
    const {id} = useParams()
    const axiosPublic = UseAxiosPublic()
    const [just,setJust] = useState()
    useEffect(()=>{
        axiosPublic.get(`/package/${id}`)
        .then(res=>{
            setJust(res.data)
        })
    },[])
    console.log(id)
    return (
        <div>
            <Bonus></Bonus>
            <div className="grid mx-auto text-end gap-8 grid-cols-2">
                <div className="my-auto">
                    <h1 className="text-lg"> <span className="text-green-600 font-semibold">{just?.details?.tour_guide?.name}</span> :  Name </h1>
                    <h1 className="text-lg">   <span className="text-green-600 font-semibold">{just?.details?.tour_guide?.education} </span> : Education</h1>
                    <h1 className="text-lg">   <span className="text-green-600 font-semibold">{just?.details?.tour_guide?.skills}</span>: Skills</h1>
                </div>
                <div className="w-full my-8 flex gap-3 justify-evenly">
                   <div> <img className="rounded-full" src={just?.details?.tour_guide?.profile_pic} alt="" /></div>
                
                <div className="my-auto">
                    <h1 className="text-lg">Phone : <span className="text-green-600 font-semibold">{just?.details?.tour_guide?.contact_details?.phone}</span></h1>
                    <h1 className="text-lg">Email : <span className="text-green-600 font-semibold">{just?.details?.tour_guide?.contact_details?.email}</span></h1>
                    <h1 className="text-lg">Work Experience : <span className="text-green-600 font-semibold">{just?.details?.tour_guide?.work_experience}</span></h1>
                </div>
                </div>
                </div>
                <RatingComment></RatingComment>
        </div>
    );
};

export default GuideDetails;