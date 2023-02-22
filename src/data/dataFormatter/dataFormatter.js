const fs = require("fs");

// Read the input file
let data = require("./data.json");
data = data.Sheet1;

// Process the data
const formattedData = {
    Saturday: {
        "08:00 AM-09:20 AM": [],
        "09:30 AM-10:50 AM": [],
        "11:00 AM-12:20 PM": [],
        "12:30 PM-01:50 PM": [],
        "02:00 PM-03:20 PM": [],
        "03:30 PM-4:50 PM": [],
        "05:00 PM-06:20 PM": [],
    },
    Sunday: {
        "08:00 AM-09:20 AM": [],
        "09:30 AM-10:50 AM": [],
        "11:00 AM-12:20 PM": [],
        "12:30 PM-01:50 PM": [],
        "02:00 PM-03:20 PM": [],
        "03:30 PM-4:50 PM": [],
        "05:00 PM-06:20 PM": [],
    },
    Monday: {
        "08:00 AM-09:20 AM": [],
        "09:30 AM-10:50 AM": [],
        "11:00 AM-12:20 PM": [],
        "12:30 PM-01:50 PM": [],
        "02:00 PM-03:20 PM": [],
        "03:30 PM-4:50 PM": [],
        "05:00 PM-06:20 PM": [],
    },
    Tuesday: {
        "08:00 AM-09:20 AM": [],
        "09:30 AM-10:50 AM": [],
        "11:00 AM-12:20 PM": [],
        "12:30 PM-01:50 PM": [],
        "02:00 PM-03:20 PM": [],
        "03:30 PM-4:50 PM": [],
        "05:00 PM-06:20 PM": [],
    },
    Wednesday: {
        "08:00 AM-09:20 AM": [],
        "09:30 AM-10:50 AM": [],
        "11:00 AM-12:20 PM": [],
        "12:30 PM-01:50 PM": [],
        "02:00 PM-03:20 PM": [],
        "03:30 PM-4:50 PM": [],
        "05:00 PM-06:20 PM": [],
    },
    Thursday: {
        "08:00 AM-09:20 AM": [],
        "09:30 AM-10:50 AM": [],
        "11:00 AM-12:20 PM": [],
        "12:30 PM-01:50 PM": [],
        "02:00 PM-03:20 PM": [],
        "03:30 PM-4:50 PM": [],
        "05:00 PM-06:20 PM": [],
    },
};

const days = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
];

const timeSlots = [
    { start: "08:00 AM", end: "09:20 AM" },
    { start: "09:30 AM", end: "10:50 AM" },
    { start: "11:00 AM", end: "12:20 PM" },
    { start: "12:30 PM", end: "01:50 PM" },
    { start: "02:00 PM", end: "03:20 PM" },
    { start: "03:30 PM", end: "04:50 PM" },
    { start: "05:00 PM", end: "06:20 PM" },
];

function isRoomAvailable(data, room, time) {
    // Check if any class is scheduled for the room during the given time
    return !data?.some(
        (obj) =>
            obj.Room === room &&
            obj.Day === time.day &&
            !(time.start >= obj["Start time"] && time.end <= obj["End time"])
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

for (let i = 0; i < days.length; i++) {
    for (let j = 0; j < timeSlots.length; j++) {
        const time = {
            day: days[i],
            start: timeSlots[j].start,
            end: timeSlots[j].end,
        };
        const availableRooms = findAvailableRooms(data, time);
        console.log(availableRooms);
        formattedData[days[i]][`${time.start}-${time.end}`] = availableRooms;
    }
}

// console.log(formattedData);
// Write the output file
fs.writeFileSync("./output.json", JSON.stringify(formattedData));
