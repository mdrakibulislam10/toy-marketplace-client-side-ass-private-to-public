import { useLoaderData } from 'react-router-dom';
import ToysRow from './ToysRow';
import { useState } from 'react';

const AllToys = () => {
    const allToys = useLoaderData();
    const [toys, setToys] = useState(allToys);

    const handleSearch = e => {
        e.preventDefault();

        const searchText = e.target.search.value;
        console.log(searchText);

        fetch(`https://toy-marketplace-server-side-six.vercel.app/toys?search=${searchText}`)
        .then(res)
    };

    return (
        <section className='lg:mx-4'>
            <form onSubmit={handleSearch} className="flex items-center md:w-3/4 lg:w-2/4 mx-auto mb-4">
                <label htmlFor="voice-search" className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </div>
                    <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-md font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Toys..." required name='search' />
                </div>
                <div className='hidden sm:block'>
                    <button type="submit" className="inline-flex items-center py-2.5 px-3 ml-2 text-md font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search
                    </button>
                </div>
                <button type="submit" className="sm:hidden inline-flex items-center py-2.5 px-3 ml-2 text-md font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
            </form>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Toys</th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => (
                                <ToysRow
                                    key={toy._id}
                                    toy={toy}
                                />
                            ))
                        }
                    </tbody>
                </table>
            </div>


        </section>
    );
};

export default AllToys;