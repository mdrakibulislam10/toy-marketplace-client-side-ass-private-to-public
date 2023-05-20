
const Banner = () => {
    return (
        <div>
            {/* <img className="w-full lg:h-screen" src="" alt="" /> */}


            <div className="hero md:h-screen" style={{ backgroundImage: `url("https://i.ibb.co/vmFMJs7/istockphoto-544653226-612x612.png")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-5xl">
                        <h1 className="mb-5 text-5xl font-bold">Discover a World of Miniature Racing</h1>
                        <p className="mb-5">Embark on a Thrilling Journey of Toy Car Racing! Unleash Your Inner Speedster and Experience the Excitement of High-Octane Fun. Get Ready to Race, Drift, and Conquer with Our Incredible Collection of Toy Cars!</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;