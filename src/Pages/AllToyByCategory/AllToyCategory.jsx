import { useEffect, useState } from "react";
import SingleToyCategory from "./SingleToyCategory";


const AllToyCategory = () => {
  const [allToyCategory, setAllToyCategory] = useState([]);
  const [activeTab, setActiveTab] = useState("ss");



  useEffect(() => {
    fetch(`http://localhost:5000/toys/${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
        setAllToyCategory(result);
      });
  }, [activeTab]);


  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className="mt-10">
      <div className="justify-center flex">
        <img src="https://i.ibb.co/Tk9kZCM/Group-2-2.jpg" alt="" />
      </div>

      <h1 className=" font-bold  text-4xl  text-center text-[#313131] mb-10">Toy Car </h1>




      <div className="tabs flex justify-center align-middle">
        <div
          onClick={() => handleTabClick("regular")}
          className={`tab  tab-lifted regular ${activeTab == "regular" ? " bg-[#09CCD0] text-white" : ""
            }`}
        >
          Regular car
        </div>
        <div
          onClick={() => handleTabClick("sports")}
          className={`tab  tab-lifted sports ${activeTab == "sports" ? " bg-[#09CCD0] text-white" : ""
            }`}
        >
          Sports car
        </div>
        {/* <div
                onClick={() => handleTabClick("police")}
                className={`tab  tab-lifted police ${
                  activeTab == "police" ? " bg-red-500 text-white" : ""
                }`}
              >
                Police car
              </div> */}
        <div
          onClick={() => handleTabClick("truck")}
          className={`tab  tab-lifted truck ${activeTab == "truck" ? " bg-[#09CCD0] text-white" : ""
            }`}
        >
          Truck
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-3 px-4 mt-4">
        {allToyCategory?.map((singleToyCategory) => (
          <SingleToyCategory
            key={singleToyCategory._id}
            singleToyCategory={singleToyCategory}></SingleToyCategory>
        ))}
      </div>
    </div>
  );
};

export default AllToyCategory;