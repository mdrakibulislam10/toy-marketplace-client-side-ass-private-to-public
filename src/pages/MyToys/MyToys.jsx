import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders/AuthProviders";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    // load specific data by email
    useEffect(() => {
        fetch(`https://toy-marketplace-server-side-six.vercel.app/usersToys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user?.email]);

    // delete toy
    const handleDelete = _id => {
        fetch(`https://toy-marketplace-server-side-six.vercel.app/deleteToy/${_id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {

                    const restToys = toys.filter(toy => toy._id !== _id);
                    setToys(restToys);
                }
            })
    };

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
                                    handleDelete={handleDelete}
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