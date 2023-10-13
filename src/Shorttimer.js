import React from 'react'
import { useState, useEffect } from 'react';
const Shorttimer = () => {
    const [time, setTime] = useState(300); // Initial time in seconds (25 minutes)
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let timer;

        if (isActive && time > 0) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        } else if (time === 0) {
            // Timer reached 0, handle completion or reset here
            handleTimerComplete();
        }

        return () => clearInterval(timer);
    }, [isActive, time]);

    const handleStartPause = () => {
        setIsActive((prevIsActive) => !prevIsActive);
    };

    const handleReset = () => {
        setIsActive(false);
        setTime(300);
    };

    const handleTimerComplete = () => {
        setIsActive(false);
        // You can add additional logic here for completion
    };


    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        if (minutes === 0 && seconds === 0) { alert("You have taken a short break! Let's get back to work Now"); }
        document.title = String(minutes).padStart(2, '0') + ':' + String(remainingSeconds).padStart(2, '0');
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    };
    return (
        <>

            <h1 class="text-6xl font-bold tracking-tight text-gray-900 sm:text-7xl"> {formatTime(time)}</h1>
            <div class="mt-3 flex items-center justify-center gap-x-6">
                <a href="#" class="rounded-2xl text-gray-900  px-3.5 py-2.5 text-sm font-semibold  border border-gray-900  hover:border-none hover:bg-gray-900 hover:text-white" onClick={handleStartPause}>{isActive ? 'Pause' : 'Start'}</a>
                <a href="#" class="rounded-2xl text-gray-900  px-3.5 py-2.5 text-sm font-semibold border border-gray-900  hover:border-none hover:bg-gray-900 hover:text-white " onClick={handleReset}>Reset</a>
                <a href="#" class="text-sm font-semibold text-gray-900 hover:underline ">Contact support <span aria-hidden="true">&rarr;</span></a>
            </div></>
    )
}

export default Shorttimer