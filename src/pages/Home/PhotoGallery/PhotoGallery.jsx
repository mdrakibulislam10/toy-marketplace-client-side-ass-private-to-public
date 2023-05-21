
const PhotoGallery = () => {

    const images = [
        "https://img.freepik.com/free-photo/distracted-girl-with-toys-looking-away_23-2147663716.jpg?w=996&t=st=1684544068~exp=1684544668~hmac=fab1ad6695c22349d5c1258b252eb68956a0adefb3d6d3a52915999bdcc3f058",
        "https://img.freepik.com/free-photo/side-view-little-kid-playing-with-car_23-2149307029.jpg?w=996&t=st=1684544707~exp=1684545307~hmac=6dd33821320101422489575dedb134d9990d5dd82ebd8b4b89fdb9298a3d33b2",
        "https://img.freepik.com/free-photo/kid-playing-home_23-2148131061.jpg?w=996&t=st=1684544651~exp=1684545251~hmac=c3f3ba1ee9950f0945fa9bbcdab595e686baaaca4f30a5acee76ec2bcfec4333",
        "https://img.freepik.com/free-photo/father-son-playing-with-toy-cars_23-2148500801.jpg?w=996&t=st=1684544680~exp=1684545280~hmac=0b4cdfdf417da75adfb5c2a0826cf5914e0ebe8246bd9116e4af6bd12c797b64",
        "https://img.freepik.com/free-photo/little-boy-autumn-park_1303-5459.jpg?w=996&t=st=1684544793~exp=1684545393~hmac=570964a04f21bc0e0e33ba2ed8e63fe16ee7f620426dc61954d129aa8de4d101"
    ];

    return (
        <section className="mb-16">
            <h2 className="text-center mb-8 text-2xl lg:text-3xl font-semibold"><span className="border-b-4 sm:pb-1 border-orange-600">Photo Gallery</span></h2>
            <div className="flex flex-wrap justify-center gap-4">
                {
                    images.map((img, i) =>
                        <img data-aos="zoom-in" className="w-96 h-60 rounded hover:scale-105" key={i} src={img} alt="" />
                    )
                }
            </div>
        </section>
    );
};

export default PhotoGallery;