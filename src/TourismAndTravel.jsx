import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const TourismAndTravel = () => {
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
              <div className='grid gap-6 grid-cols-2'>
              <img className='w-full h-60' src="https://i.ibb.co/fkNg4gg/images-6.jpg" alt="" />
              <img className='w-full h-60' src="https://i.ibb.co/VVKJH9h/images-7.jpg" alt="" />
              </div>
             <iframe className='w-3/4 my-10  mx-auto' title="vimeo-player" src="https://player.vimeo.com/video/105977011?h=ec6048285e" width="full" height="360" frameBorder="0"    allowfullscreen></iframe>
            

        
            
             
               </div>
             </TabPanel>
             <TabPanel>
              <video src="https://player.vimeo.com/video/105977011?h=ec6048285e"></video>
               <h2>Any content 2</h2>
             </TabPanel>
             </Tabs>
            
        </div>
    );
};

export default TourismAndTravel;