import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders/AuthProviders";
import MyToysRow from "./MyToysRow";
import Swal from "sweetalert2";

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
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this product!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://toy-marketplace-server-side-six.vercel.app/deleteToy/${_id}`, {
                        method: "DELETE",
                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data);
                            if (data.deletedCount) {
                                Swal.fire(
                                    'Deleted Successfully!',
                                    'Your product has been deleted.',
                                    'success'
                                )
                                const restToys = toys.filter(toy => toy._id !== _id);
                                setToys(restToys);
                            }
                        })
                }
                // else {
                //     console.log("cancel");
                // }
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