import { useState } from "react";

const AddAToy = () => {
    const [toyData, setToyData] = useState({
        pictureUrl: '',
        name: '',
        sellerName: '',
        sellerEmail: '',
        subCategory: '',
        price: '',
        rating: '',
        availableQuantity: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setToyData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(toyData);
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-2xl font-bold mb-4">Add A Toy</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-gray-700 text-sm font-bold" htmlFor="pictureUrl">Picture URL of the toy:</label>
                        <input
                            type="text"
                            id="pictureUrl"
                            name="pictureUrl"
                            value={toyData.pictureUrl}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />

                        <label className="text-gray-700 text-sm font-bold" htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={toyData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />

                        <label className="text-gray-700 text-sm font-bold" htmlFor="sellerName">Seller Name:</label>
                        <input
                            type="text"
                            id="sellerName"
                            name="sellerName"
                            value={toyData.sellerName}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />

                        <label className="text-gray-700 text-sm font-bold" htmlFor="sellerEmail">Seller Email:</label>
                        <input
                            type="email"
                            id="sellerEmail"
                            name="sellerEmail"
                            value={toyData.sellerEmail}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="text-gray-700 text-sm font-bold" htmlFor="subCategory">Sub-category:</label>
                        <select
                            id="subCategory"
                            name="subCategory"
                            value={toyData.subCategory}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 appearance-none"
                        >
                            <option value="" disabled>Select sub-category</option>
                            <option value="Math Toys">Math Toys</option>
                            <option value="Language Toys">Language Toys</option>
                            <option value="Science Toys">Science Toys</option>
                        </select>

                        <label className="text-gray-700 text-sm font-bold" htmlFor="price">Price:</label>
                        <input
                            type="text"
                            id="price"
                            name="price"
                            value={toyData.price}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />

                        <label className="text-gray-700 text-sm font-bold" htmlFor="rating">Rating:</label>
                        <input
                            type="text"
                            id="rating"
                            name="rating"
                            value={toyData.rating}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />

                        <label className="text-gray-700 text-sm font-bold" htmlFor="availableQuantity">Available Quantity:</label>
                        <input
                            type="text"
                            id="availableQuantity"
                            name="availableQuantity"
                            value={toyData.availableQuantity}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />

                        <label className="text-gray-700 text-sm font-bold" htmlFor="description">Detail Description:</label>
                        <textarea
                            id="description"
                            name="description"
                            value={toyData.description}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        ></textarea>
                    </div>
                </div>

                <button
                    type="submit"
                    className="bg-[#09CCD0] hover:bg-[#3C404B] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddAToy;