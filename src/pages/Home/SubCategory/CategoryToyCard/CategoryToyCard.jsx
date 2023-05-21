import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Link } from 'react-router-dom';

const CategoryToyCard = ({ toy }) => {
    const { _id, image, toyName, price, rating } = toy;

    return (
        <>
            <div className="w-full max-w-s border bg-gray-100 shadow-xl rounded-lg">
                <div className="p-3 rounded-lg">
                    <img className="h-60 w-full rounded-lg" src={image && image} alt="" />
                </div>
                <div className="px-5 pb-5">
                    <h5 className="text-2xl my-4 font-semibold tracking-tight text-gray-900">{toyName && toyName}</h5>

                    <div className="">
                        <div className="flex items-center mt-2.5 mb-5">
                            <Rating className='mx-1' style={{ maxWidth: 100 }} readOnly value={rating && rating} />

                            <span className="bg-pink-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-blue-800 ml-3">{rating && rating}</span>

                        </div>
                        <div className="flex items-center justify-between flex-wrap gap-2">
                            <span className="text-3xl font-bold text-gray-900">${price && price}</span>
                            <Link to={`/toy/${_id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Details</Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default CategoryToyCard;