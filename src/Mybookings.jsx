import { useState } from "react";
import DashBoard from "./DashBoard";
import UseAxiosPublic from "./Hooks/UseAxiosPublic";
import { useEffect } from "react";
import { Axios } from "axios";
import { useParams } from "react-router-dom";

const Mybookings = () => {
    const axiosPublic = UseAxiosPublic()
    const {id} = useParams()
    const [book, setBook] = useState()
    useEffect(()=>{
        axiosPublic.get('/booking')
        .then(res=>{
            setBook(res.data)
        })
    },[])
    console.log(book)
    return (
        <div>
            <DashBoard></DashBoard>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         Apply Button
        </th>
        <th>Name</th>
        <th>Price</th>
        <th>Status</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
      {
        book?.map(just=> 
            (<tr key={just?._id}>
        <th>
          <button className="btn btn-sm btn-accent">Apply</button>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={just?.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{just?.tourGuide}</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          {just?.email}
          <br/>
          <span className="badge badge-ghost badge-sm">{just?.price}</span>
        </td>
        <td><button className="btn btn-ghost btn-xs">In Review</button>
</td>
        <th>
          <button className="btn btn-ghost btn-xs">Pay Now</button>
        </th>
      </tr>
            ))
      }
      

     
      
    </tbody>
    
    
  
  </table>
</div>
            
        </div>
    );
};

export default Mybookings;