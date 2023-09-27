import React, { useEffect, useState } from "react";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import { dayOptions, timeOptions } from "../../data/daysAndTimeSlots";

const AvailableClasses = () => {
    const [availableClassrooms, setAvailableClassrooms] = useState({});
    const [labClasses, setLabClasses] = useState({});
    const [selectedDay, setSelectedDay] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("/data.json");
            const data = await response.json();
            setAvailableClassrooms(data.availableRooms);
            setLabClasses(data.labRooms);
        }
        fetchData();
    }, []);

    const handleDayChange = (event) => {
        setSelectedDay(event.target.value);
    };
    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
    };
    const handleOnSubmit = (event) => {
        event.preventDefault();
        if (selectedDay && selectedTime) {
            setResults(availableClassrooms[selectedDay][selectedTime]);
        }
    };
    return (
        <div>
            <form action="" onSubmit={handleOnSubmit} className="mx-3">
                <div className="sm:flex justify-center sm:space-x-4 space-y-3 sm:space-y-0">
                    <select
                        id="day"
                        className="appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
                        id="time"
                        className="appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
                <PrimaryButton type="submit" label="Check Available Rooms" />
            </form>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-6 mx-3">
                {results?.map((result) => (
                    <div
                        className={`py-4 px-4 border ${
                            labClasses.includes(result) ? `bg-blue-100` : `bg-gray-50`
                        }`}
                        key={result}
                    >
                        <p>{result}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AvailableClasses;
