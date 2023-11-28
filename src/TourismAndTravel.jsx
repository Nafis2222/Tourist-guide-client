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
               <h2>Any content 1</h2>
             </TabPanel>
             <TabPanel>
               <h2>Any content 2</h2>
             </TabPanel>
             </Tabs>
            
        </div>
    );
};

export default TourismAndTravel;