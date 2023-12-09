import Banner from './Banner';
import Contacts from './Contacts';
import Review from './OtherRoutes/Review';
import Footer from './Shared/Footer';
import TourType from './TourType';
import TourismAndTravel from './TourismAndTravel';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TourismAndTravel></TourismAndTravel>
            <TourType></TourType>
            <Review></Review>
            <Contacts></Contacts>
            <Footer></Footer>
        </div>
    );
};

export default Home;