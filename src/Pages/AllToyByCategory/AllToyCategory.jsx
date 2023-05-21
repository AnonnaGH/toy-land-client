import { useEffect, useState } from "react";
import SingleToyCategory from "./SingleToyCategory";


const AllToyCategory = () => {
  const [allToyCategory, setAllToyCategory] = useState([]);
  const [activeTab, setActiveTab] = useState("ss");



  useEffect(() => {
    fetch(`https://toy-land-server-p4cjvnjxo-anonnagh.vercel.app/toys/${activeTab}`)
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

      <h1 className=" font-bold  text-4xl  text-center text-[#605f5f] mb-10">Shop by category </h1>




      <div className="tabs flex justify-center align-middle mb-10">
        <div
          onClick={() => handleTabClick("regular")}
          className={`tab  tab-lifted  regular ${activeTab == "regular" ? " bg-[#09CCD0] text-white" : "text-[#176d6e]  font-bold border-gray-400  "
            }`}
        >
          Regular car
        </div>
        <div
          onClick={() => handleTabClick("sports")}
          className={`tab  tab-lifted sports ${activeTab == "sports" ? " bg-[#09CCD0] text-white" : "text-[#176d6e] font-bold border-gray-400 "
            }`}
        >
          Sports car
        </div>

        <div
          onClick={() => handleTabClick("truck")}
          className={`tab  tab-lifted truck ${activeTab == "truck" ? " bg-[#09CCD0] text-white" : " text-[#176d6e] font-bold border-gray-400 "
            }`}
        >
          Truck
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-3 px-4 mt-4 ">
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