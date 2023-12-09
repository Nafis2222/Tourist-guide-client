import { useState } from "react";
import UseAxiosPublic from "./Hooks/UseAxiosPublic";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from "react-router-dom";
const TourType = () => {
    const [type,setType] = useState()
    const axiosPublic = UseAxiosPublic()

    useEffect(()=>{
        axiosPublic.get('/package')
        .then(res=>{
            setType(res.data)
        })
    },[])
    return (
        <div>
            <div className="w-10/12 mx-auto" style={{backgroundImage:  `url('https://i.ibb.co/nj8P0VJ/paris-notre-dame-france-seine.jpg')`}}>
                <h1 className="text-center text-white font-semibold">Find a tour by clicking on specific it</h1>
                <h1 className="text-center font_bold text-3xl text-gray-300">Tour Type</h1>
                <div className="text-center my-8">
                <Swiper
           slidesPerView={4} 
           spaceBetween={30}
           centeredSlides={true}
           pagination={{
             clickable: true,
           }}
           modules={[Pagination]}
           className="mySwiper">
               {
                    type?.map(just=>
                        <div className="my-8" key={just?._id}>
                   
        <SwiperSlide><Link to={`/package/${just?._id}`}><img className="w-32 h-32 mx-auto border-4 border-black rounded-full" src={just?.type_img} alt=''/></Link>
        <h1 className='text-4xl font-medium text-center text-black '>{just?.tour_type}</h1> </SwiperSlide>
        
       
     
                        </div>
                        
                        )
                }
                </Swiper>
                </div>
            </div>
            
        </div>
    );
};

export default TourType;