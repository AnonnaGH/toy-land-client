



import { useLoaderData } from "react-router-dom";
import AllToysRow from "./AllToysRow";
import useTitle from "../../hooks/useTitle";


const AllToys = () => {
    useTitle('All Toys');
    const toys = useLoaderData();

    return (
        <div>

            <div className="justify-center flex mt-10">
                <img src="https://i.ibb.co/Tk9kZCM/Group-2-2.jpg" alt="" />
            </div>

            <h1 className="font-bold  text-4xl  text-center text-[#605f5f] mb-10">All Toys : {toys.length}</h1>

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