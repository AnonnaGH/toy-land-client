import car from '../../../assets/carBanner.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/9rSrCHf/banner.png")` }}>



            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img className='max-w-5xl ' src={car} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm  ">
                    <h1 className=" font-bold text-[#FF6F69]">Baby & Kids Toy</h1>
                    <p className="py-6 text-5xl font-bold">Making Childhood Magical </p>
                </div>
            </div>
        </div>


    );
};

export default Banner;