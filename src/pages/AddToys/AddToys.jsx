
const AddToys = () => {
    return (
        <div className="mb-16">
            <form className="w-full max-w-3xl mx-auto">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block tracking-wide text-gray-700 font-bold mb-2" htmlFor="image">
                            Picture URL of the toy
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-img" type="text" placeholder="Photo URL" name="image" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block tracking-wide text-gray-700 font-bold mb-2" htmlFor="toy-name">
                            Toy Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-toyNm" type="text" placeholder="Toy Name" name="toyName" />
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block tracking-wide text-gray-700 font-bold mb-2" htmlFor="seller-name">
                            Seller Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-sellerNm" type="text" placeholder="Seller Name" name="sellerName" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block tracking-wide text-gray-700 font-bold mb-2" htmlFor="seller-email">
                            Seller Email
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="Seller Email" />
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block tracking-wide text-gray-700 font-bold mb-2" htmlFor="grid-category">
                            Select Sub-category
                        </label>
                        <div className="relative">
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-category">
                                {/* add value */}
                                <option>New Mexico</option>
                                <option>Missouri</option>
                                <option>Texas</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block tracking-wide text-gray-700 font-bold mb-2" htmlFor="grid-price">
                            Price
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-price" type="text" placeholder="Price" />
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block tracking-wide text-gray-700 font-bold mb-2" htmlFor="grid-rating">
                            Rating
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-rating" type="text" placeholder="Rating" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block tracking-wide text-gray-700 font-bold mb-2" htmlFor="grid-quantity">
                            Available quantity
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-quantity" type="text" placeholder="Available quantity" />
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">

                        <label htmlFor="message" className="block mb-2 font-bold text-gray-900">Detail description</label>
                        <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

                    </div>
                </div>

                <div className="flex justify-center">
                    <input className="btn btn-accent w-full font-bold text-lg" type="submit" value="Post Toys" />
                </div>
            </form>
        </div>
    );
};

export default AddToys;