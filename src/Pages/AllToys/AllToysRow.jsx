
import { Link } from "react-router-dom";

const AllToysRow = ({ toy }) => {
    const {
        _id,
        ToyName,
        SubCategory,
        Price,
        AvailableQuantity,
        Ratings,
        SellerName,
        Pictureurl,
        Details,
        email,
    } = toy;
    return (

        <tr>


            <td>{ToyName}</td>
            <td>{SubCategory}</td>
            <td>${Price}</td>
            <td>{AvailableQuantity}</td>
            <td>{SellerName}</td>
            <th>
                <Link to={`/toys/${_id}`}> <button className="btn border-0  bg-[#09CCD0]">View Details</button></Link>
            </th>
        </tr>
    );
};

export default AllToysRow;