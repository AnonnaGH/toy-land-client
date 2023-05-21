


import React from 'react';

const reviews = [
    {
        id: 1,
        name: 'Benjamin',
        comment: 'I bought this toy car for my nephew, and it exceeded my expectations. The quality is excellent, and it has a great range of motion. The remote control is easy to use, even for a young child, and the car responds quickly to commands.',
        image: 'https://i.ibb.co/pvdDRXn/3-a4479e1a-cbd3-48af-834e-nn2c8093b00d76-140x140-1.png',
    },
    {
        id: 2,
        name: 'Noah',
        comment: "This toy car is fantastic! The attention to detail is remarkable, from the realistic design to the smooth movement. My son absolutely loves playing with it and spends hours racing it around the house. It's sturdy and well-built, making it perfect for energetic play.",
        image: 'https://i.ibb.co/M6BTCV9/2-d5820cc3-e706-486a-aedd-14536ee7b27d-140x140-1.png',
    },
    {
        id: 3,
        name: 'Alexander',
        comment: 'I am really impressed with this toy car. The bright colors and sleek design make it visually appealing. The wheels are smooth and provide excellent traction, allowing the car to move effortlessly on various surfaces. The durability is remarkable; it has endured crashes and bumps without any damage. A fantastic purchase!',
        image: 'https://i.ibb.co/pvdDRXn/3-a4479e1a-cbd3-48af-834e-2c8093b00d76-140x140-1.png',
    },
    {
        id: 4,
        name: 'Ethan',
        comment: 'This toy car is a winner! The attention to detail is remarkable, making it look just like a real race car. The sound effects add an extra level of excitement, and the speed is impressive. The materials used are of high quality, ensuring it will last for a long time. It is an absolute joy to play with.',
        image: 'https://i.ibb.co/M6BTCV9/2-d5820cc3-e706-486a-aedd-14536ee7b27d-140x140-1.png',
    },
    {
        id: 5,
        name: 'William',
        comment: 'I highly recommend this toy car. The remote control is intuitive, and the car is incredibly responsive, providing a thrilling and immersive play experience. The lights and sounds make it even more engaging. It is evident that a lot of thought has gone into its design, resulting in a top- notch toy car that offers endless fun.',
        image: 'https://i.ibb.co/M6BTCV9/2-d5820cc3-e706-486a-aedd-14536ee7b27d-140x140-1.png',
    }
    // Add more reviews here
];

const ReviewSection = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const nextReview = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const previousReview = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    return (

        <div className="max-w-xl mx-auto mb-10 ">
            <div className="justify-center flex mt-10 ">
                <img src="https://i.ibb.co/Tk9kZCM/Group-2-2.jpg" alt="" />
            </div>

            <h1 className=" font-bold  text-4xl  text-center text-[#605f5f] mb-5">Our Client Say’s</h1>

            <div className="flex items-center justify-between mb-4 ">
                <button
                    className="p-2 rounded-full bg-[#09CCD0] text-white hover:bg-[#313641] focus:outline-none"
                    onClick={previousReview}
                >
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            fillRule="evenodd"
                            d="M10 18a1 1 0 01-1-1v-4a1 1 0 112 0v4a1 1 0 01-1 1zm8-7a1 1 0 01-.293.707l-7 7a1 1 0 01-1.414 0l-7-7A1 1 0 012 10V4a1 1 0 011-1h14a1 1 0 011 1v6z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
                <button
                    className="p-2 rounded-full bg-[#09CCD0] text-white hover:bg-[#313641] focus:outline-none"
                    onClick={nextReview}
                >
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            fillRule="evenodd"
                            d="M10 2a1 1 0 01.707.293l7 7a1 1 0 01-1.414 1.414L10 4.414 3.707 10.707a1 1 0 11-1.414-1.414l7-7A1 1 0 0110 2zm8 7a1 1 0 01-1 1h-14a1 1 0 01-1-1V4a1 1 0 011-1h14a1 1 0 011 1v5z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
            <div className="bg-[#E8F6F7] rounded-lg shadow p-4">
                <div className="flex items-center mb-4">
                    <img
                        className="w-12 h-12 rounded-full mr-4"
                        src={reviews[activeIndex].image}
                        alt={reviews[activeIndex].name}
                    />
                    <div>
                        <h3 className="text-xl font-medium">{reviews[activeIndex].name}</h3>
                    </div>
                </div>
                <p className="text-gray-600">{reviews[activeIndex].comment}</p>
            </div>
        </div>
    );
};

export default ReviewSection;
