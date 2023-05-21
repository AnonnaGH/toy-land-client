import AllToyCategory from "../../AllToyByCategory/AllToyCategory";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";

import ReviewSection from "../ReviewSection/ReviewSection";
import TopToysTrend from "../TopToysTrend/TopToysTrend";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllToyCategory></AllToyCategory>


            <TopToysTrend></TopToysTrend>
            <ReviewSection></ReviewSection>

            <Gallery></Gallery>
        </div>
    );
};


export default Home;
