import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders/AuthProviders";

const CustomerReviews = () => {
    const { user } = useContext(AuthContext);

    const handleReviewPost = e => {
        e.preventDefault();

        const reviewText = e.target.review.value;

        const reviewerInfo = {
            reviewerImage: user?.photoURL,
            reviewerName: user?.displayName,
            reviewerEmail: user?.email,
            reviewText,
        };

        fetch("https://toy-marketplace-server-side-six.vercel.app/reviews", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(reviewerInfo),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    };

    return (
        <section className="lg:mx-16">
            <h2 className="text-center mb-8 text-3xl font-semibold"><span className=" border-b-4 pb-1 border-orange-600">Customer Reviews</span></h2>
            <div className="bg-lime-300 px-2 py-4 rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-6">
                    <div className="flex items-center justify-center">
                        <div className="text-center">
                            <h2 className="font-semibold text-3xl lg:text-4xl text-blue-500 mb-3">Write a Review</h2>
                            <p className="font-semibold text-lg lg:px-10">Write about our service and how we can improve more feel free to write the text box.</p>
                        </div>
                    </div>

                    <form onSubmit={handleReviewPost} className="">
                        <div className="w-full px-3">
                            <label
                                htmlFor="message"
                                className="mb-2 font-bold text-gray-900 flex items-start gap-2 ps-1 border-l-2 border-l-gray-500"
                            >
                                <img className="rounded-full w-10" src={user?.photoURL} alt="" />
                                <p>{user?.displayName}</p>
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                className="font-semibold block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Write review here..."
                                name="review"
                                required
                            ></textarea>

                            <input className="btn bg-orange-700 border-0 hover:bg-orange-600 mt-2" type="submit" value="Post Review" />
                        </div>

                    </form>
                </div>
            </div>

            <div>

            </div>
        </section>
    );
};

export default CustomerReviews;