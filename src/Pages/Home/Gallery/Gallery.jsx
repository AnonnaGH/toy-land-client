

const Gallery = () => {
    const carImages = [
        'https://i.ibb.co/W6SsFkk/1-removebg-preview.png',
        'https://i.ibb.co/3WjkHxm/9-removebg-preview.png',
        'https://i.ibb.co/zHQBXp6/12-removebg-preview.png',
        'https://i.ibb.co/JdSGwm3/13-removebg-preview.png',
        'https://i.ibb.co/SmnQNG8/Capture-removebg-preview.png',
        'https://i.ibb.co/KF3bB9s/images-1-removebg-preview.png',
        'https://i.ibb.co/XSVsHDM/images-2-removebg-preview.png',
        'https://i.ibb.co/B4gY1Nk/81wv0-S9v3r-L-removebg-preview.png',
        'https://i.ibb.co/mJTYKyp/1-1-removebg-preview.png',
        'https://i.ibb.co/DY1Jz3y/images-3-removebg-preview.png',
    ];

    return (
        <div className="container mx-auto p-8">

            <div className="justify-center flex">
                <img src="https://i.ibb.co/Tk9kZCM/Group-2-2.jpg" alt="" />
            </div>

            <h1 className=" font-bold mb-4 text-4xl  text-center text-[#313131]">Toy Car Gallery</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {carImages.map((imageUrl, index) => (
                    <div key={index} className="rounded-lg overflow-hidden bg-[#E8F6F7] transition-transform duration-300 transform hover:scale-105">
                        <img src={imageUrl} alt={`Car ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;