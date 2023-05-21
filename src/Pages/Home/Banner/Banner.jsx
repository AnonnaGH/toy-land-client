import car from '../../../assets/carBanner.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/9rSrCHf/banner.png")` }}>


            {/* font-bgFont */}
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left pl-32">
                    <img className=' ' src={car} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm pr-20 ">
                    <h1 className="text-2xl  text-[#FF6F69]">Spark Joy & Imagination</h1>
                    <p className=" py-6 text-6xl font-extrabold  text-[#605f5f] ">Baby Kids Toy </p>
                    <p className="py-6 text-1xl font-bold text-[#757A7B]">Get Upto 30% Off On Your First Order. </p>
                    <a className="btn bg-[#09CCD0] border-0">SHOP NOW</a>
                </div>
            </div>
        </div>


    );
};

export default Banner;