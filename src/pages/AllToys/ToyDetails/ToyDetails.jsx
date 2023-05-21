import { Rating } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";

const ToyDetails = () => {
    const toy = useLoaderData();
    useTitle("Details");
    const { image, toyName, sellerName, sellerEmail, price, rating, quantity, description } = toy;

    return (
        <div className="md:w-2/3 lg:w-2/4 mx-auto mt-16">
            <div className="bg-base-100 shadow-xl p-2">
                <div>
                    <div className="card lg:card-side grid grid-cols-1 lg:grid-cols-2">
                        <div><img className="w-72 lg:w-full h-60 rounded" src={image && image} alt="Album" /></div>
                        <div className="card-body">
                            <h2 className="card-title text-2xl">{toyName && toyName}</h2>
                            <p className="font-semibold">${price && price}</p>
                            <div className="flex items-center mt-2.5 mb-5">
                                <Rating className='mx-1' style={{ maxWidth: 100 }} readOnly value={rating && rating} />

                                <span className="bg-pink-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-blue-800 ml-3">{rating && rating}</span>
                            </div>
                            <p>Quantity: {quantity && quantity} pcs.</p>
                        </div>
                    </div>
                </div>

                <div className="py-2 px-3 mt-5">
                    <h2 className="text-xl font-semibold">Seller: {sellerName && sellerName}</h2>
                    <h2 className="my-2 text-lg">Email: {sellerEmail && sellerEmail}</h2>
                    <p className="text-gray-700"><span className="font-semibold">Description: </span>{description && description}</p>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;