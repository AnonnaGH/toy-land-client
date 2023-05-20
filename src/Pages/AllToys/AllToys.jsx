



import { useLoaderData } from "react-router-dom";
import AllToysRow from "./AllToysRow";
// import AllToysRow from "./AllToysRow";

const AllToys = () => {
    const toys = useLoaderData();

    return (
        <div>
            <h1 className="text-3xl text-center">All Toys page: {toys.length}</h1>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead >
                        <tr className="bg-[#80DFEB]">
                            <th>Toy name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Seller Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {toys.length > 0 ? (
                            toys.map(toy => (
                                <AllToysRow key={toy._id} toy={toy}></AllToysRow>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6">No toys available.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;