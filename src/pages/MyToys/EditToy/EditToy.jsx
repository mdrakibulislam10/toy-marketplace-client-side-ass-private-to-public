import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../../hooks/useTitle";

const EditToy = () => {
    useTitle("Edit Toy")
    const toy = useLoaderData();
    // console.log(toy);

    const { _id, price, quantity, description } = toy;

    const handleUpdateToy = e => {
        e.preventDefault();

        const form = e.target;
        const price = form.price?.value;
        const quantity = form.quantity?.value;
        const description = form.description?.value;

        const toyInfo = {
            price,
            quantity,
            description
        };

        fetch(`https://toy-marketplace-server-side-six.vercel.app/updateToy/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(toyInfo),
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Product updated successfully.',
                        showConfirmButton: true,
                        timer: 10000
                    });
                }
            })
    };


    return (
        <div className="my-16">
            <form onSubmit={handleUpdateToy} className="w-full max-w-3xl mx-auto border-2 p-3 rounded border-gray-500">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3">
                        <label
                            className="block tracking-wide text-gray-700 font-bold mb-2"
                            htmlFor="grid-price"
                        >
                            Update price
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-price"
                            type="text"
                            placeholder="Price"
                            name="price"
                            required
                            defaultValue={price && price}
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label
                            className="block tracking-wide text-gray-700 font-bold mb-2"
                            htmlFor="grid-quantity"
                        >
                            Update quantity
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-quantity"
                            type="text"
                            placeholder="quantity"
                            name="quantity"
                            required
                            defaultValue={quantity && quantity}
                        />
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label
                            htmlFor="message"
                            className="block mb-2 font-bold text-gray-900"
                        >
                            Update detail description
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Write description here..."
                            name="description"
                            required
                            defaultValue={description && description}
                        ></textarea>
                    </div>
                </div>

                <div className="flex justify-center">
                    <input
                        className="btn btn-accent w-full font-bold text-lg"
                        type="submit"
                        value="Update Toy"
                    />
                </div>
            </form>
        </div>
    );
};

export default EditToy;