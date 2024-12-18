import { formattedData, days, timeSlots } from "./initialValues.mjs";

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

// This loop will run for 6(days)*7(timeSlots) = 42 times
// It will find the available rooms for each time slot and store them in the formattedData object
function findAvailableRoomsForAllTimeSlots(data) {
    for (let i = 0; i < days.length; i++) {
        for (let j = 0; j < timeSlots.length; j++) {
            const time = {
                day: days[i],
                start: timeSlots[j].start,
                end: timeSlots[j].end,
            };
            const availableRooms = findAvailableRooms(data, time).sort(
                (a, b) => {
                    // Extract block and room numbers
                    const [blockA, roomA] = a.split("-");
                    const [blockB, roomB] = b.split("-");

                    // Compare block numbers first
                    if (blockA !== blockB) {
                        return blockA.localeCompare(blockB);
                    }

                    // If blocks are same, compare room numbers numerically
                    const roomNumA = parseInt(roomA.replace(/[^\d]/g, ""));
                    const roomNumB = parseInt(roomB.replace(/[^\d]/g, ""));
                    return roomNumA - roomNumB;
                }
            );
            formattedData[days[i]][`${time.start}-${time.end}`] =
                availableRooms;
        }
    }

    return formattedData;
}

export default findAvailableRoomsForAllTimeSlots;
