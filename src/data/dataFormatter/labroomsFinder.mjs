// Function to find all the rooms those are used for lab classes. Lab classes are those classes where for the same section, same day and same course, there are multiple slots.

function findLabRooms(courseObjects) {
  const labRooms = [];
  const seenRooms = new Set();

  for (let i = 0; i < courseObjects.length; i++) {
    const course1 = courseObjects[i];

    for (let j = i + 1; j < courseObjects.length; j++) {
      const course2 = courseObjects[j];

      if (
        course1.Room === course2.Room &&
        course1.Section === course2.Section &&
        course1.Course === course2.Course &&
        course1.Day === course2.Day &&
        !(course1.Room.startsWith("UB1") || course1.Room.startsWith("UB2")) &&
        course1["Start time"] !== course2["Start time"]
      ) {
        const room = course1.Room;

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
