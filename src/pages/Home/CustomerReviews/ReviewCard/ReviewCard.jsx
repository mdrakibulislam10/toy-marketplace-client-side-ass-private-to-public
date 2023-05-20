
const ReviewCard = ({ review }) => {
    const { reviewerImage, reviewerName, reviewText } = review;

    return (
        <div className="text-center border px-2 py-4 rounded shadow">
            <img className="rounded-full w-20 mx-auto" src={reviewerImage && reviewerImage} alt="" />
            <h2 className="text-xl font-semibold my-3">{reviewerName && reviewerName}</h2>
            <p className="text-justify text-gray-600" title={reviewText && reviewText}>{reviewText && (reviewText).slice(0, 100)}...</p>
        </div>
    );
};

export default ReviewCard;