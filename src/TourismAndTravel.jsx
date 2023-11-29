import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const TourismAndTravel = () => {
  const [all,setall] = useState()

  useEffect(()=>{
    fetch('http://localhost:5000/package')
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
             </Tabs>
            
        </div>
    );
};

export default TourismAndTravel;