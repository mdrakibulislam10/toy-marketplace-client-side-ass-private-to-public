import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import CustomerReviews from "../CustomerReviews/CustomerReviews";
import OurProducts from "../OurProducts/OurProducts";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import SubCategory from "../SubCategory/SubCategory";

const Home = () => {
    useTitle("Home");
    
    return (
        <div>
            <Banner />
            <PhotoGallery />
            <SubCategory />
            <OurProducts />
            <CustomerReviews />
        </div>
    );
};

export default Home;