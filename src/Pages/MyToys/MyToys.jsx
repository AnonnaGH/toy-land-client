import { useContext, useEffect, useState } from "react";
import MyToysTable from "./MyToysTable";
import { AuthContext } from "../../providers/AuthProvider";
import useTitle from "../../hooks/useTitle";


const MyToys = () => {
    useTitle('My Toys');
    const { user } = useContext(AuthContext);
    const [allToys, setAllToys] = useState([]);
    const [searchText, setSearchText] = useState("")
    const url = `https://toy-land-server-p4cjvnjxo-anonnagh.vercel.app/my-toys/${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setAllToys(data));
    }, [url]);


    const handleSearch = () => {
        fetch(`https://toy-land-server-p4cjvnjxo-anonnagh.vercel.app/toySearchByName/${searchText}`)
            .then((res) => res.json())
            .then((data) => setAllToys(data));
    }


    const handleSort = (sortOrder) => {
        // Sort the toys based on price
        const sortedToys = [...allToys].sort((a, b) => {
            if (sortOrder === "asc") {
                return a.Price - b.Price;
            } else {
                return b.Price - a.Price;
            }
        });

        // Update the sorted toys in the state
        setAllToys(sortedToys);
    };

    return (
        <div>
            <div className="justify-center flex mt-10">
                <img src="https://i.ibb.co/Tk9kZCM/Group-2-2.jpg" alt="" />
            </div>

            <h1 className=" font-bold mb-20 lg:mb-0 md:mb-0 text-4xl  text-center text-[#605f5f]">My Toyes  {allToys.length}</h1>

            <div className="overflow-x-auto w-full">

                <div className="flex justify-between px-6">
                    <div>
                        <div className="dropdown">
                            <label tabIndex={0} className="btn m-1  bg-[#09CCD0] border-0">
                                Sort by Price
                            </label>
                            <ul
                                tabIndex={0}
                                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                <li onClick={() => handleSort("asc")}>
                                    <a>Low to High</a>
                                </li>
                                <li onClick={() => handleSort("desc")}>
                                    <a>High to Low</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="form-control flex justify-center mb-4">
                        <div className="input-group">
                            <input
                                onChange={(e) => setSearchText(e.target.value)}
                                type="text"
                                placeholder="Search…"
                                className="input input-bordered"
                            />
                            <button onClick={handleSearch} className="btn btn-square border-0 bg-[#09CCD0]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <table className="table w-full ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Toy name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Seller Name</th>
                            <th> Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {allToys.map((toy) => (
                            <MyToysTable key={toy._id} toy={toy}></MyToysTable>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;