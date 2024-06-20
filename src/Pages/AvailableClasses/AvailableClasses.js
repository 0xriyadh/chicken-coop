import React, { useEffect, useState } from "react";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import {
    dayOptions,
    timeOptions,
    getCurrentTimeSlot,
} from "../../data/daysAndTimeSlots";
import { useRef } from "react";
import FindCommonRooms from "../../utils/findCommonRooms";

const AvailableClasses = () => {
    const currentDay = new Date().toLocaleString("en-us", { weekday: "long" });
    const currentTime = getCurrentTimeSlot();
    const [availableClassrooms, setAvailableClassrooms] = useState({});
    const [selectedDay, setSelectedDay] = useState(currentDay);
    const [selectedTime, setSelectedTime] = useState([]);
    const [results, setResults] = useState([]);
    const [tempRes, setTempRes] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("/data.json");
            const data = await response.json();
            setAvailableClassrooms(data.availableRooms);
            console.log(availableClassrooms[selectedDay])
        }
        fetchData();
    }, []);

    const handleDayChange = (event) => {
        setSelectedDay(event.target.value);
    };

    const handleTimeChange = (event) => {
        const selectedValue = event.target.value;
    
        // If the checkbox is checked, add it to the selectedTime array
        if (event.target.checked && selectedTime.length < 2) {
            setSelectedTime((prevSelectedTime) => [...prevSelectedTime, selectedValue]);
        } else {
            // If the checkbox is unchecked, remove it from the selectedTime array
            setSelectedTime((prevSelectedTime) => prevSelectedTime.filter((value) => value !== selectedValue));
        }
        console.log(selectedTime)
    };
    
    const handleOnSubmit = (event) => {
        event.preventDefault();
        if (selectedDay && selectedTime) {
            setResults(availableClassrooms[selectedDay][selectedTime]);
            
            if(selectedTime.length == 1) {
                setResults(availableClassrooms[selectedDay][selectedTime])
            }

            else if(selectedTime.length > 1) {
                for(let i = 0; i < selectedTime.length-1; i++) {
                    let ls1 = availableClassrooms[selectedDay][selectedTime[i]]
                    let ls2 = availableClassrooms[selectedDay][selectedTime[i+1]]

                    let ls_comm = FindCommonRooms(ls1, ls2)

                    if(ls_comm) {
                        setResults(ls_comm)
                    }

                    else {
                        setResults([])
                    }
                }
            }
            
        }
    };

    return (
        <div>
            <form action="" onSubmit={handleOnSubmit} className="mx-3">
                <div className="sm:flex justify-center sm:space-x-4 space-y-3 sm:space-y-0">
                    <select
                        id="day"
                        className="select"
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

                </div>
                <div className="mt-3">
                    {timeOptions?.map((option) => (
                        <div key={option.value}>
                            <input
                                type="checkbox"
                                value={option.value}
                                onChange={handleTimeChange}
                                className="mr-2"
                                disabled={selectedTime.length === 2 && !selectedTime.includes(option.value)}
                            />
                            <label htmlFor={option.value}>{option.label}</label>
                        </div>
                    ))}
                </div>
                <PrimaryButton
                    type="submit"
                    label="Check Available Rooms"
                    className="mt-4"
                />
            </form>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-6 mx-3">
                {results?.map((result) => (
                    <div
                        className={`py-4 px-4 border rounded ${
                            result.endsWith("L")
                                ? `bg-blue-100 dark:bg-blue-800/30 dark:border-blue-600/30`
                                : `bg-gray-50 dark:bg-gray-700 dark:border-gray-600`
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
