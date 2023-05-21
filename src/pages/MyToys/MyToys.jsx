import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders/AuthProviders";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch(`https://toy-marketplace-server-side-six.vercel.app/usersToys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user?.email]);

    return (
        <section className="lg:mx-4">
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
                                <MyToysRow
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

export default MyToys;