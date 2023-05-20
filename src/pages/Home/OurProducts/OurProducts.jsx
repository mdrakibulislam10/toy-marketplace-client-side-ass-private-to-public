import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const OurProducts = () => {
    return (
        <div className="mb-16">
            <h2 className="text-center mb-8 text-3xl font-semibold"><span className=" border-b-4 pb-1 border-orange-600">About Our Products</span></h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-0">

                <div className="w-full h-full bg-orange-200 flex items-center justify-center order-2 lg:order-1">
                    <div className="text-center p-2 md:px-6">
                        <h2 className="text-3xl md:text-5xl font-semibold text-blue-400">Cars Collection</h2>
                        <p className="my-4 md:font-semibold">Our collection includes various types of toy cars, ranging from classic designs to modern and innovative models. Whether you're looking for sturdy and durable vehicles for outdoor adventures or interactive and educational cars for indoor play, we have something to suit every preference and age group.</p>

                        <Marquee pauseOnHover speed={80}>
                            <img className="h-36 sm:h-48 w-52 sm:w-80 rounded-lg" src="https://m.media-amazon.com/images/I/61taLUjwxCL._SX522_.jpg" alt="" />
                            <img className="h-36 sm:h-48 w-52 sm:w-80 mx-2 rounded-lg" src="https://rukminim1.flixcart.com/image/416/416/jj1qrgw0/musical-toy/m/z/b/school-bus-toy-for-kids-baybee-original-imaf6cfczgmkpr34.jpeg?q=70" alt="" />
                            <img className="h-36 sm:h-48 w-52 sm:w-80 rounded-lg" src="https://rukminim1.flixcart.com/image/416/416/vehicle-pull-along/p/g/d/maisto-1-12-ducati-1199-panigale-original-imaehyb3vmnmabgv.jpeg?q=70" alt="" />
                            <img className="h-36 sm:h-48 w-52 sm:w-80 mx-2 rounded-lg" src="https://khelaghortoys.com/wp-content/uploads/2022/02/81bDGSYdgaL.jpg" alt="" />
                        </Marquee>

                        <Link to={"/allToys"}><button className="btn mt-4 bg-orange-600 hover:bg-sky-600 border-0">View Our All Toys</button></Link>
                    </div>
                </div>

                <img className="w-full h-full order-1 lg:order-2" src="https://montessorimamatoys.com/cdn/shop/collections/montessori_mama_ages_5-8_image.jpg?v=1669090467" alt="" />
            </div>
        </div>
    );
};

export default OurProducts;