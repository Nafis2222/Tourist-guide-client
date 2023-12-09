import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const TourismAndTravel = () => {
  const [all,setall] = useState()
// http://localhost:5000/package
  useEffect(()=>{
    fetch('https://tourisst.vercel.app/package')
    .then(res=>res.json())
    .then(data=>setall(data))
    
  },[])

  const handleView = (id) =>{
    console.log(id)
  }
    return (
        <div>
             <Tabs>
             <TabList>
               <Tab>Overview</Tab>
               <Tab>Our packages</Tab>
               <Tab>Meet Our Tour Guides</Tab>

             </TabList>
             <TabPanel>
             <div className=''>
              <div className='grid gap-6 md:grid-cols-2'>
              <img className='w-full h-60' src="https://i.ibb.co/fkNg4gg/images-6.jpg" alt="" />
              <img className='w-full h-60' src="https://i.ibb.co/VVKJH9h/images-7.jpg" alt="" />
              </div>
             <iframe className='w-3/4 md:my-10  mx-auto' title="vimeo-player" src="https://player.vimeo.com/video/105977011?h=ec6048285e" width="full" height="360" frameBorder="0"    allowFullScreen></iframe>
            

        
            
             
               </div>
             </TabPanel>
             <TabPanel>
              <div className='grid md:grid-cols-3'>
              {
                all?.map(
                  every=>
                  <div key={every} className=''>
                    <div className="card my-3 md:w-80 bg-base-100 shadow-xl">
                    <figure><img className='md:w-80 h-40' src={every?.img} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">{every?.tour_type}</h2>
                      <h2 className="card-title">{every?.tour_title}</h2>
                      <p>price : {every?.price}$</p>
                      <div className="card-actions justify-end">
                       <Link to={`/package/${every?._id}`}><button className='btn btn-info'>View Package</button></Link>
                      </div>
                    </div>
                  </div>
                  </div>
                  )
              }
              </div>
             </TabPanel>
             <TabPanel>
              <div>
                <h1 className="text-3xl my-7 font-bold text-center">Our Tour Guide List is shown Below</h1>
                <div>
                <div className="overflow-x-auto mb-10">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th> Name</th>
        <th>Contacts</th>
        <th>Skills</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
      {
        all?.map(just=>
          <tr key={just?._id}>
        
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={just?.details?.tour_guide?.profile_pic} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{just?.details?.tour_guide?.name}</div>
              <div className="text-sm opacity-50">{just?.details?.tour_guide?.education}</div>
            </div>
          </div>
        </td>
        <td>
          {just?.details?.tour_guide?.contact_details?.email}
          <br/>
          <span className="badge badge-ghost badge-sm">{just?.details?.tour_guide?.contact_details?.phone}
</span>
        </td>
        <td>{just?.details?.tour_guide?.skills}</td>
        <th>
          <Link to={`/guideDetails/${just?._id}`}><button  className="btn btn-ghost btn-xs">details</button>
</Link>
        </th>
      </tr>
          )
      }      
   
      
     
    </tbody>
   
    
  </table>
</div>
                </div>
              </div>
             </TabPanel>
             </Tabs>
            
        </div>
    );
};

export default TourismAndTravel;