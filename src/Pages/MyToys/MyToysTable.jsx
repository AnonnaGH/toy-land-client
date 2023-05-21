import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AiFillDelete } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import Swal from 'sweetalert2';
const MyToysTable = ({ toy }) => {

    const loadedUsers = useLoaderData();
    const [toys, setToys] = useState([]);

    const {
        _id,
        ToyName,
        SubCategory,
        Price,
        AvailableQuantity,
        Rating,
        SellerName,
        Pictureurl,
        Details,
        email,
    } = toy;

    const handleDelete = () => {
        Swal.fire({
            title: "Confirm Delete",
            text: `Are you sure you want to delete this toy: "${ToyName}"?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Delete",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                console.log("delete", _id);
                fetch(`http://localhost:5000/toys/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                "Deleted!",
                                ` ${ToyName} has been deleted.`,
                                "success"
                            ).then(() => {
                                window.location.reload();
                            });

                        }
                    });
            }
        });
    };

    return (
        <>
            <tr>
                <td>{ToyName}</td>
                <td>{SubCategory}</td>
                <td>${Price}</td>
                <td>{AvailableQuantity}</td>
                <td>{SellerName}</td>
                <th>
                    <Link to={`/update/${toy._id}`}>
                        <button>
                            {" "}
                            <BsPencilSquare className="text-2xl" /> Update
                        </button>
                    </Link>
                </th>
                <th>

                    <button onClick={handleDelete} className="flex ">
                        <AiFillDelete className="text-3xl" />
                        <span>Delete</span>
                    </button>
                </th>
            </tr>
        </>
    );
};

export default MyToysTable;