import Banner from "../Banner/Banner";
import OurProducts from "../OurProducts/OurProducts";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import SubCategory from "../SubCategory/SubCategory";

const Home = () => {
    return (
        <div>
            <Banner />
            <PhotoGallery />
            <SubCategory />
            <OurProducts/>
        </div>
    );
};

export default Home;