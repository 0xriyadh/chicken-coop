// Function to find all the rooms those are used for lab classes. Lab classes are those classes where for the same section, same day and same course, there are multiple slots.

function findLabRooms(courseObjects) {
    const labRooms = [];
    const seenRooms = new Set();

    for (let i = 0; i < courseObjects.length; i++) {
        const obj1 = courseObjects[i];

        for (let j = i + 1; j < courseObjects.length; j++) {
            const obj2 = courseObjects[j];

            if (
                obj1.Room === obj2.Room &&
                obj1.Section === obj2.Section &&
                obj1.Course === obj2.Course &&
                obj1.Day === obj2.Day &&
                !(obj1.Room.startsWith("UB1") || obj1.Room.startsWith("UB2")) &&
                obj1["Start time"] !== obj2["Start time"]
            ) {
                const room = obj1.Room;

                if (!seenRooms.has(room)) {
                    labRooms.push(room);
                    seenRooms.add(room);
                }
            }
        }
    }

    return labRooms.sort();
}

export default findLabRooms;
