import fs from "fs";
import { formattedData, days, timeSlots } from "./initialValues.js";
const rawData = fs.readFileSync("./rawData.json", "utf-8");
let data = JSON.parse(rawData);

// Read the input file
data = data.Sheet1;

function isRoomAvailable(data, room, time) {
    // Check if any class is scheduled for the room during the given time
    return !data?.some(
        (obj) =>
            obj.Room === room &&
            obj.Day === time.day &&
            !(time.start === obj["Start time"] && time.end === obj["End time"])
    );
}

// Function to find available rooms for a specific time
function findAvailableRooms(data, time) {
    // Collect all the room numbers
    const rooms = new Set(data.map((obj) => obj.Room));

    // Filter out the rooms that are not available
    const availableRooms = [...rooms].filter((room) =>
        isRoomAvailable(data, room, time)
    );

    return availableRooms;
}

// This loop will run for 6(days)*7(timeSlots) = 42 times.
// It will find the available rooms for each time slot and store them in the formattedData object.
for (let i = 0; i < days.length; i++) {
    for (let j = 0; j < timeSlots.length; j++) {
        const time = {
            day: days[i],
            start: timeSlots[j].start,
            end: timeSlots[j].end,
        };
        const availableRooms = findAvailableRooms(data, time).sort();
        formattedData[days[i]][`${time.start}-${time.end}`] = availableRooms;
    }
}

// Write the output file
fs.writeFileSync("./output.json", JSON.stringify(formattedData));
