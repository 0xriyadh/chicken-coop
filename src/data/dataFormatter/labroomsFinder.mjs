// Function to find all the rooms those are used for lab classes. Lab classes are those classes where for the same section, same day and same course, there are multiple slots.
/* 
    Example:
    {
      "Sl": 473,
      "Course": "CSE110",
      "Faculty": "DFD",
      "Section": 1,
      "Day": "Thursday",
      "Start time": "08:00 AM",
      "End time": "09:20 AM",
      "Room": "UB40101"
    },
    {
      "Sl": 474,
      "Course": "CSE110",
      "Faculty": "DFD",
      "Section": 1,
      "Day": "Thursday",
      "Start time": "09:30 AM",
      "End time": "10:50 AM",
      "Room": "UB40101"
    }
    "UB40101" is a lab room for "CSE110" course for section 1 on Thursday. So, it should be included in the output.

    {
      "Sl": 393,
      "Course": "BUS529",
      "Faculty": "TBA",
      "Section": 1,
      "Day": "Sunday",
      "Start time": "06:00 PM",
      "End time": "09:00 PM",
      "Room": "UB20801"
    },
    {
      "Sl": 394,
      "Course": "BUS529",
      "Faculty": "TBA",
      "Section": 2,
      "Day": "Thursday",
      "Start time": "06:00 PM",
      "End time": "09:00 PM",
      "Room": "UB20801"
    }
    However, "UB20801" is not a lab room for "BUS529" course as the section is different. So, it should not be included in the output.
*/
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
