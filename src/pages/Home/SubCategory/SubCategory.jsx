import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryToyCard from './CategoryToyCard/CategoryToyCard';
import { FaCar, FaMotorcycle, FaTruckMonster } from 'react-icons/fa';

const SubCategory = () => {
    const [categoryToys, setCategoryToys] = useState([]);
    const [subCategoryName, setSubCategoryName] = useState("monster-truck");

    useEffect(() => {
        const loadByCategory = async () => {
            const res = await fetch(`https://toy-marketplace-server-side-six.vercel.app/toys/${subCategoryName}`);
            const data = await res.json();
            // console.log(data);
            setCategoryToys(data);
        };
        loadByCategory();
    }, [subCategoryName]);

    return (
        <section className="mb-16 lg:mx-32">
            <h2 className="text-center mb-8 text-3xl font-semibold"><span className=" border-b-4 pb-1 border-orange-600">Sub Category</span></h2>

            <div className='text-center'>
                <Tabs>
                    <TabList>
                        <Tab>
                            <div onClick={() => setSubCategoryName("monster-truck")} className='bg-[#06b6a3] p-4 rounded text-xl font-semibold text-white flex flex-col items-center'>
                                Monster truck
                                <FaTruckMonster className='text-4xl mt-2' />
                            </div>
                        </Tab>
                        <Tab>
                            <div onClick={() => setSubCategoryName("motorcycle")} className='bg-[#72b32d] p-4 rounded text-xl font-semibold text-white flex flex-col items-center'>
                                Motorcycle
                                <FaMotorcycle className='text-4xl mt-2' />
                            </div>
                        </Tab>
                        <Tab>
                            <div onClick={() => setSubCategoryName("sports-car")} className='bg-[#01739f] p-4 rounded text-xl font-semibold text-white flex flex-col items-center'>
                                Sports car
                                <FaCar className='text-4xl mt-2' />
                            </div>
                        </Tab>
                    </TabList>


                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-12 mt-4">
                            {subCategoryName === "monster-truck" &&
                                categoryToys.map(toy => (
                                    <CategoryToyCard
                                        key={toy._id}
                                        toy={toy}
                                    />
                                ))
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-12 mt-4">
                            {subCategoryName === "motorcycle" &&
                                categoryToys.map(toy => (
                                    <CategoryToyCard
                                        key={toy._id}
                                        toy={toy}
                                    />
                                ))
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-12 mt-4">
                            {subCategoryName === "sports-car" &&
                                categoryToys.map(toy => (
                                    <CategoryToyCard
                                        key={toy._id}
                                        toy={toy}
                                    />
                                ))
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </section>
    );
};

export default SubCategory;