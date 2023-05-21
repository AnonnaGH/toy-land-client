
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
const Gallery = () => {


    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])
    const carImages = [



        'https://i.ibb.co/xSw2qWw/Untitled-1.png',
        'https://i.ibb.co/Hn6c0QX/2.png',
        'https://i.ibb.co/k6Wxj7k/5.png',
        'https://i.ibb.co/HFhQ5FF/11.png',

        'https://i.ibb.co/Nxm4rYN/8.png',
        'https://i.ibb.co/MNqPzZV/9.png',
        'https://i.ibb.co/X8nKZG3/3.png',
        'https://i.ibb.co/F8B9qvZ/4.png',
        'https://i.ibb.co/z8n5PqR/10.png',

        'https://i.ibb.co/9w3B81r/7.png',
    ];

    return (
        <div className="container mx-auto p-8 mt-10">

            <div className="justify-center flex">
                <img src="https://i.ibb.co/Tk9kZCM/Group-2-2.jpg" alt="" />
            </div>

            <h1 className=" font-bold  text-4xl  text-center text-[#605f5f] mb-10">Toy Car Gallery</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {carImages.map((imageUrl, index) => (
                    <div data-aos="flip-left" key={index} className="rounded-lg overflow-hidden bg-[#E8F6F7] transition-transform duration-300 transform hover:scale-105">
                        <img src={imageUrl} alt={`Car ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;