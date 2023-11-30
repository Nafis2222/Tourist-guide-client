import { Link, useParams } from "react-router-dom";
import UseAxiosPublic from "./Hooks/UseAxiosPublic";
import { useState } from "react";
import { GoMirror } from "react-icons/go";
import About from "./OtherRoutes/About";

const PackageDetails = () => {
    const   axiosPublic = UseAxiosPublic()
    const {details} = useParams()
    const [ourDetails,setOurDetails] = useState()
    const [pic,setPic] = useState()
    const [about,setAbout] = useState()
    const [accordation, setAccordation] = useState()
    const [list,setList] = useState()
    // console.log(details)

    axiosPublic.get(`http://localhost:5000/package/${details}`)
    .then(res=>{
      setPic(res.data?.details?.images)
      setAbout(res.data?.details?.about)
      setAccordation(res.data?.details?.plan)
      setList(res.data)
    //   res.data?.details?.tour_guide
    //   console.log(list)
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
            <div className="text-center">
            <h1 className="text-4xl font-semibold mt-5 ">About Our Tour section</h1>
            <p className="text-xl text-gray-500 mb-5 ">Here you can see about our places that is related with Our package details as well</p>
            </div>
           <div className="grid grid-cols-1 gap-5">
           {
                about?.map(simple=>
                <div className="" key={simple?._id}>
                    <div className="card card-body md:card-side   bg-base-100 shadow-xl">
                      <figure><img className="w-80 h-full" src={simple?.picture} alt="Movie"/></figure>
                      <div className="card-body md:w-1/2">
                        <h2 className="card-title">{simple?.title} </h2>
                        <p className="font-bold text-orange-600"> ${simple?.cost}.</p>
                        <h1 className="text-xl text-gray-500">{simple?.rating} superb</h1>
                        <p>{simple?.description}</p>
                       
                      </div>
                    </div>
                </div>)
            }
           </div>
           <h1 className="text-center text-4xl font-light mt-5">Tour plan</h1>
           <p className="text-center text-xl mt-2 mb-4">Our plan is given below</p>
           <div>
            {
                accordation?.map(one=>
                    <div key={one?._id} className="collapse collapse-arrow bg-base-200">
                      <input type="radio" name="my-accordion-2"  /> 
                      <div className="collapse-title text-xl font-medium">
                      <button className="btn btn-info rounded-r-badge btn-sm mx-3">Day : {one?.day}</button>
                        {one?.title}
                      </div>
                      <div className="collapse-content"> 
                        <p>
                            {one?.description}
                        </p>
                      </div>
                    </div>
                    
                    )
            }

           </div>

           <div>
           <div class="dropdown dropdown-bottom md:mx-96 items-center">
              <div tabindex="0" role="button" class="btn m-1">Tour-Guide Officer</div>
              <ul class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li className="w-full  "><Link to={`/package/${list?.details?.tour_guide?.name}`}>
                  <div>
                    <img className="w-24 h-24 rounded-full mx-auto" src={list?.details?.tour_guide?.profile_pic} alt="" />
                    <div className="text-center">
                        <h1 className="font-bold">{list?.details?.tour_guide?.name}</h1>
                        <p>{list?.details?.tour_guide?.education}</p>
                    </div>
                  </div>
                </Link></li>
              </ul>
            </div>
             
           </div>
           
            
        </div>
    );
};

export default PackageDetails;