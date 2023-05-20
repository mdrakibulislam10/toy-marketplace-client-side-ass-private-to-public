import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const SubCategory = () => {
    return (
        <section className="mb-16 lg:mx-32">
            <h2 className="text-center mb-8 text-3xl font-semibold"><span className=" border-b-4 pb-1 border-orange-600">Sub Category</span></h2>

            <div className='text-center'>
                <Tabs>
                    <TabList>
                        <Tab>
                            <div className='bg-[#06b6a3] p-4 rounded text-xl font-semibold text-white'>
                                Sports car
                            </div>
                        </Tab>
                        <Tab>
                            <div className='bg-[#72b32d] p-4 rounded text-xl font-semibold text-white'>
                                Police car
                            </div>
                        </Tab>
                        <Tab>
                            <div className='bg-[#01739f] p-4 rounded text-xl font-semibold text-white'>
                                Public bus
                            </div>
                        </Tab>
                    </TabList>

                    {/* map and return */}
                    <TabPanel>
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </section>
    );
};

export default SubCategory;