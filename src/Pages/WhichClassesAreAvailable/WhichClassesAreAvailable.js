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
            <form action="" onSubmit={handleOnSubmit} className="mx-3">
                <div className="sm:flex justify-center sm:space-x-4 space-y-3 sm:space-y-0">
                    <select
                        id="countries"
                        className="appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        onChange={handleDayChange}
                        value={selectedDay}
                    >
                        <option value="" disabled>
                            🌱 Select day
                        </option>
                        {dayOptions?.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <select
                        id="countries"
                        className="appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        onChange={handleTimeChange}
                        value={selectedTime}
                    >
                        <option value="" disabled>
                            ⏰ Select time slot
                        </option>
                        {timeOptions?.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
                <button className="mt-4 px-6 py-2 bg-white border border-orange-500 rounded text-orange-500">
                    Check Available Rooms
                </button>
            </form>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-6 mx-3">
                {results?.map((result) => (
                    <div className="py-4 px-4 border bg-gray-50" key={result}>
                        <p>{result}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhichClassesAreAvailable;
