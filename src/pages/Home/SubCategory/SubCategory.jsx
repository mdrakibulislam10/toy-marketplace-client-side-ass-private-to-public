import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const SubCategory = () => {
    const [categoryToys, setCategoryToys] = useState([]);
    const [subCategoryName, setSubCategoryName] = useState("monster-truck");

    useEffect(() => {
        const loadByCategory = async () => {
            const res = await fetch(`https://toy-marketplace-server-side-six.vercel.app/toys/${subCategoryName}`);
            const data = await res.json();
            console.log(data);
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
                            <div onClick={() => setSubCategoryName("monster-truck")} className='bg-[#06b6a3] p-4 rounded text-xl font-semibold text-white'>
                                Monster truck
                            </div>
                        </Tab>
                        <Tab>
                            <div onClick={() => setSubCategoryName("motorcycle")} className='bg-[#72b32d] p-4 rounded text-xl font-semibold text-white'>
                                Motorcycle
                            </div>
                        </Tab>
                        <Tab>
                            <div onClick={() => setSubCategoryName("sports-car")} className='bg-[#01739f] p-4 rounded text-xl font-semibold text-white'>
                                Sports car
                            </div>
                        </Tab>
                    </TabList>

                    <TabPanel>
                        {
                            categoryToys.map(toy => (
                                <h2 key={toy._id}>{toy.toyName}</h2>
                            ))
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            categoryToys.map(toy => (
                                <h2 key={toy._id}>{toy.toyName}</h2>
                            ))
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            categoryToys.map(toy => (
                                <h2 key={toy._id}>{toy.toyName}</h2>
                            ))
                        }
                    </TabPanel>
                </Tabs>
            </div>
        </section>
    );
};

export default SubCategory;