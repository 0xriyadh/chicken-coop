import React, { useEffect, useState } from "react";
import { dayOptions, timeOptions } from "../../data/daysAndTimeSlots";

const WhichClassesAreAvailable = () => {
    const [data, setData] = useState({});
    const [selectedDay, setSelectedDay] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("/data.json");
            const data = await response.json();
            setData(data);
        }
        fetchData();
    }, []);

    const handleDayChange = (event) => {
        setSelectedDay(event.target.value);
        console.log(event.target.value);
        console.log(data);
    };
    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
        console.log(event.target.value);
        console.log(data);
    };
    const handleOnSubmit = (event) => {
        event.preventDefault();
        if (selectedDay && selectedTime) {
            setResults(data[selectedDay][selectedTime]);
        }
    };
    return (
        <div>
            <form action="" onSubmit={handleOnSubmit}>
                <div className="flex justify-center space-x-4">
                    <div>
                        <select
                            className="appearance-none bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline cursor-pointer"
                            onChange={handleDayChange}
                            value={selectedDay}
                        >
                            <option value="" disabled>
                                Select day
                            </option>
                            {dayOptions?.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <select
                            className="appearance-none bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline cursor-pointer"
                            onChange={handleTimeChange}
                            value={selectedTime}
                        >
                            <option value="" disabled>
                                Select time slot
                            </option>
                            {timeOptions?.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg
                                className="fill-current h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 12l-5-5 1.41-1.41L10 9.18l3.59-3.59L15 7l-5 5z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <button>Check Available Rooms</button>
            </form>
            <div>
                {results?.map((result) => (
                    <div key={result.id}></div>
                ))}
            </div>
        </div>
    );
};

export default WhichClassesAreAvailable;
