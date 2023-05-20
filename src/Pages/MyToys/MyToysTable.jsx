import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AiFillDelete } from "react-icons/ai";
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



    return (
        <>
            <tr>
                <td>{ToyName}</td>
                <td>{SubCategory}</td>
                <td>${Price}</td>
                <td>{AvailableQuantity}</td>
                <td>{SellerName}</td>
                <th>

                    <button className="flex ">
                        <AiFillDelete className="text-3xl" />
                        <span>Delete</span>
                    </button>
                </th>
            </tr>
        </>
    );
};

export default MyToysTable;