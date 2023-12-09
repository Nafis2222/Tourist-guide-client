import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import UseAxiosPublic from "./Hooks/UseAxiosPublic";
import Swal from "sweetalert2";


const BookingForm = ({list}) => {
    const [startDate, setStartDate] = useState(new Date());
    const axiosPublic = UseAxiosPublic()


    const handlesubmit = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email')
        const image = form.get('image')
        const price = form.get('price')
        const date = form.get('date')
        const tourGuide = form.get('guide')
        console.log('ok',name,date,tourGuide)
        const bookingList ={
            name: name,
            email,
            image,
            price,
            date,
            tourGuide
        }


        axiosPublic.post('/booking', bookingList)
        .then(res=>{
            if(res?.data?.insertedId){
                Swal.fire(
                    'Good job!',
                  'You have successfully Booked a tour!',
                  'success')
    
               }
            
            console.log(res.user)
        })
    }

    return (
        <div>
              <div className="bg-blue-200 p-12 md:p-24">
            <h1 className="text-3xl font-extrabold">Form for Booking Tour</h1>
        <form onSubmit={handlesubmit}>
        <div className="md:flex gap-3">
        <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Tourist Name</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Type your name" name="name" className="input input-bordered w-full" />
            </label>
            </div>
            <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Tourist email</span>
            </label>
            <label className="input-group">
              <input type="email" name="email" placeholder="Type your email" className="input input-bordered w-full" />
            </label>
            </div>
        </div>
       
        <div className="md:flex gap-3">
        <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Tourist image</span>
            </label>
            <label className="input-group">
              <input type="url" placeholder="Enter your img url" name="image" className="input input-bordered w-full" />
            
            </label>
            </div>
            <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">price</span>
            </label>
            <label className="input-group">
              <input type="number" name="price" placeholder="Enter  price" className="input input-bordered w-full" />
            </label>
            </div>
        </div>
        
        <div className="md:flex gap-3">
       
            <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Tour guide name</span>
            </label>
            <label className="input-group">
              <input type="text" name="guide" defaultValue={list?.details?.tour_guide?.name} placeholder="Enter your tourist guide name" className="input input-bordered w-full" />
            </label>
            </div>
            <div className="form-control ">
            <label className="label">
              <span className="label-text font-semibold">Tour Date</span>
            </label>
            <label className="input-group">
              {/* <input type="date" placeholder="Enter your chosen date" name="date" className="input input-bordered w-full" /> */}
              <DatePicker name="date" className="input input-bordered w-full" selected={startDate} onChange={(date) => setStartDate(date)} />

            </label>
            </div>
        </div>
        <div className="flex gap-3">
        <div className=" w-full">
            
            <button className="w-full btn btn-accent mt-8">Book Now</button>
            </div>
         
        </div>
        </form>
        </div> 
            
        </div>
    );
};

export default BookingForm;