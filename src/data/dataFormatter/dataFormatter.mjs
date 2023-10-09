import fs from "fs";
import findAvailableRoomsForAllTimeSlots from "./availableRoomsFinder.mjs";
import findLabRooms from "./labroomsFinder.mjs";
const rawData = fs.readFileSync("./rawData.json", "utf-8");
let data = JSON.parse(rawData);

// Read the input file
data = data.Sheet1;

const finalOutput = {
  availableRooms: findAvailableRoomsForAllTimeSlots(data),
  labRooms: findLabRooms(data),
};

// Write the output file
fs.writeFileSync("./data.json", JSON.stringify(finalOutput));
