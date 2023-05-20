import AllToyCategory from "../../AllToyByCategory/AllToyCategory";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllToyCategory></AllToyCategory>
            <Gallery></Gallery>
        </div>
    );
};


export default Home;
