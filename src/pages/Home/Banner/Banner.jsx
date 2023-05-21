import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <section data-aos="fade-up" data-aos-duration="1000" className="mb-16">
            <div className="hero rounded md:h-screen" style={{ opacity: "0.9", backgroundImage: `url("https://i.ibb.co/vmFMJs7/istockphoto-544653226-612x612.png")` }}>
                <div className=""></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-5xl">
                        <h2 className="mb-5 text-3xl md:text-5xl font-bold text-blue-600">Discover a World of Miniature Racing</h2>
                        <p className="mb-5 text-lg font-bold">Embark on a Thrilling Journey of Toy Car Racing! Unleash Your Inner Speedster and Experience the Excitement of High-Octane Fun. Get Ready to Race, Drift, and Conquer with Our Incredible Collection of Toy Cars!</p>
                        <Link to={"/allToys"} className="btn btn-primary">View All Toys</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;