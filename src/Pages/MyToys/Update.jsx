import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const { id } = useParams();
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    const handleToyUpdate = (data) => {
        fetch(`https://toy-land-server-p4cjvnjxo-anonnagh.vercel.app/toysUpdate/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                if (result.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Toy updated successfully",
                    }).then(() => {
                        window.location.href = "/mytoys";
                    });
                }
            });
    };

    const onSubmit = (data) => {
        handleToyUpdate(data);
    };

    // Fetch toy data and set default values
    useEffect(() => {
        fetch(`https://toy-land-server-p4cjvnjxo-anonnagh.vercel.app/toys/details/${id}`)
            .then((res) => res.json())
            .then((toy) => {
                // Set default values for form inputs using setValue
                setValue("ToyName", toy.ToyName);
                setValue("SubCategory", toy.SubCategory);
                setValue("Price", toy.Price);
                setValue("AvailableQuantity", toy.AvailableQuantity);
                setValue("Pictureurl", toy.Pictureurl);
                setValue("Details", toy.Details);
            });
    }, [id, setValue]);

    return (
        <div className=" bg-[#80DFEB]">
            <div className="w-full md:w-2/4 mx-auto">
                <div className="p-8  bg-[#bdebf1] ">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="p-7 bg-white rounded shadow-md"
                    >
                        <div className="justify-center flex">
                            <img src="https://i.ibb.co/Tk9kZCM/Group-2-2.jpg" alt="" />
                        </div>

                        <h1 className=" font-bold  text-4xl  text-center text-[#605f5f] mb-10">Update Toy</h1>

                        {/* Form fields and inputs */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="ToyName" className="block">
                                    Toy Name
                                </label>
                                <input
                                    type="text"
                                    id="ToyName"
                                    {...register("ToyName", { required: true })}
                                    className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                                />
                                {errors.ToyName && (
                                    <span className="text-red-500">Toy Name is required</span>
                                )}
                            </div>
                            <div>
                                <label htmlFor="SubCategory" className="block">
                                    Sub Category
                                </label>
                                <select
                                    id="SubCategory"
                                    {...register("SubCategory", { required: true })}
                                    className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                                >
                                    <option value="regular">Regular car</option>
                                    <option value="sports">Sports car</option>
                                    <option value="truck">Truck</option>
                                </select>
                                {errors.SubCategory && (
                                    <span className="text-red-500">Sub Category is required</span>
                                )}
                            </div>

                            {/* Other form fields */}

                            <div>
                                <label htmlFor="Price" className="block">
                                    Price
                                </label>
                                <input
                                    type="number"
                                    id="Price"
                                    {...register("Price", { required: true, min: 0 })}
                                    className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                                />
                                {errors.Price && (
                                    <span className="text-red-500">
                                        Price is required and must be a positive number
                                    </span>
                                )}
                            </div>
                            <div>
                                <label htmlFor="AvailableQuantity" className="block">
                                    Quantity
                                </label>
                                <input
                                    type="number"
                                    id="AvailableQuantity"
                                    {...register("AvailableQuantity", { required: true, min: 0 })}
                                    className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                                />
                                {errors.AvailableQuantity && (
                                    <span className="text-red-500">
                                        Quantity is required and must be a positive number
                                    </span>
                                )}
                            </div>

                            {/* Other form fields */}

                            <div>
                                <label htmlFor="Pictureurl" className="block">
                                    Picture url
                                </label>
                                <textarea
                                    id="Pictureurl"
                                    {...register("Pictureurl", { required: true })}
                                    className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                                ></textarea>
                                {errors.Pictureurl && (
                                    <span className="text-red-500">Picture url is required</span>
                                )}
                            </div>
                            <div>
                                <label htmlFor="Details" className="block">
                                    Details
                                </label>
                                <textarea
                                    id="Details"
                                    {...register("Details", { required: true })}
                                    className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                                ></textarea>
                                {errors.Details && (
                                    <span className="text-red-500">Details is required</span>
                                )}
                            </div>
                        </div>

                        <div className="text-center">
                            <input
                                type="submit"
                                value="Update Toy"
                                className="w-1/2 bg-[#75e6f5] hover:bg-[#171f20] text-white font-bold py-2 px-4 rounded mx-auto mt-4"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update;