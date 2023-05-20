import { useState, useEffect } from 'react';

const TopToysTrend = () => {
    const [countdown, setCountdown] = useState({
        days: '11',
        hours: '10',
        minutes: '55',
        seconds: '57',
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(calculateCountdown());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    function calculateCountdown() {
        const targetDate = new Date('2023-07-01');
        const currentDate = new Date();
        const timeDifference = targetDate - currentDate;

        let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        days = days.toString().padStart(2, '0');
        hours = hours.toString().padStart(2, '0');
        minutes = minutes.toString().padStart(2, '0');
        seconds = seconds.toString().padStart(2, '0');

        return { days, hours, minutes, seconds };
    }

    return (
        <div className="bg-center bg-cover py-12" style={{ backgroundImage: 'url("https://i.ibb.co/Ydx1wVp/Untitled-1.png")' }}>
            <div className="text-center text-white">
                <h2 className="text-2xl font-semibold text-[#484747]">BIG DISCOUNT EVER</h2>
                <h1 className=" text-4xl md:text-6xl font-extrabold my-4 text-[#4b4b4b] mb-8">Top Toys Trend</h1>
                <div className="flex flex-wrap justify-center mb-8">
                    <div className="flex items-center mr-6">
                        <div className="bg-white rounded-full p-4 text-4xl font-bold mr-1 text-[#313131]">{countdown.days} </div>
                        <div className="text-[#313131] font-bold text-sm">Days</div>
                    </div>
                    <div className="flex items-center mr-6">
                        <div className="bg-white rounded-full p-4 text-4xl font-bold mr-1 text-[#313131]">{countdown.hours}</div>
                        <div className="text-[#313131] font-bold">Hours</div>
                    </div>
                    <div className="flex items-center mr-6">
                        <div className=" bg-white rounded-full p-4 text-4xl font-bold mr-1 text-[#313131]">{countdown.minutes}</div>
                        <div className="text-[#313131] font-bold">Minutes</div>
                    </div>
                    <div className="flex items-center mr-6">
                        <div className=" bg-white rounded-full p-4 text-4xl font-bold mr-1 text-[#313131]">{countdown.seconds}</div>
                        <div className="text-[#313131] font-bold">Secs</div>
                    </div>
                </div>
                <a href="#" className="btn bg-[#09CCD0] text-white py-2 px-6 rounded-md font-bold border-0">
                    SHOP NOW
                </a>
            </div>
        </div >
    );
};

export default TopToysTrend;
