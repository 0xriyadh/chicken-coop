export const dayOptions = [
  { value: "Saturday", label: "Saturday" },
  { value: "Sunday", label: "Sunday" },
  { value: "Monday", label: "Monday" },
  { value: "Tuesday", label: "Tuesday" },
  { value: "Wednesday", label: "Wednesday" },
  { value: "Thursday", label: "Thursday" },
];

export const timeOptions = [
  {
    value: "08:00 AM-09:20 AM",
    label: "08:00 AM-09:20 AM",
    startTime: new Date(`01/01/1970 ${"08:00"}`).getTime(),
    endTime: new Date(`01/01/1970 ${"09:20"}`).getTime(),
  },
  {
    value: "09:30 AM-10:50 AM",
    label: "09:30 AM-10:50 AM",
    startTime: new Date(`01/01/1970 ${"09:30"}`).getTime(),
    endTime: new Date(`01/01/1970 ${"10:50"}`).getTime(),
  },
  {
    value: "11:00 AM-12:20 PM",
    label: "11:00 AM-12:20 PM",
    startTime: new Date(`01/01/1970 ${"11:00"}`).getTime(),
    endTime: new Date(`01/01/1970 ${"12:20"}`).getTime(),
  },
  {
    value: "12:30 PM-01:50 PM",
    label: "12:30 PM-01:50 PM",
    startTime: new Date(`01/01/1970 ${"12:30"}`).getTime(),
    endTime: new Date(`01/01/1970 ${"13:50"}`).getTime(),
  },
  {
    value: "02:00 PM-03:20 PM",
    label: "02:00 PM-03:20 PM",
    startTime: new Date(`01/01/1970 ${"14:00"}`).getTime(),
    endTime: new Date(`01/01/1970 ${"15:20"}`).getTime(),
  },

  {
    value: "03:30 PM-04:50 PM",
    label: "03:30 PM-04:50 PM",
    startTime: new Date(`01/01/1970 ${"15:30"}`).getTime(),
    endTime: new Date(`01/01/1970 ${"16:50"}`).getTime(),
  },

  {
    value: "05:00 PM-06:20 PM",
    label: "05:00 PM-06:20 PM",
    startTime: new Date(`01/01/1970 ${"17:00"}`).getTime(),
    endTime: new Date(`01/01/1970 ${"18:20"}`).getTime(),
  },
];

export const getCurrentTimeSlot = () => {
  const currentTime = new Date()
    .toLocaleTimeString("en-US", {
      hour12: false,
      hour: "numeric",
      minute: "numeric",
    })
    .replace(" AM", "")
    .replace(" PM", "");

  const freeTimeSlots = timeOptions.filter((time) => {
    return (
      time.startTime > new Date(`01/01/1970 ${currentTime}`).getTime() &&
      time.endTime > new Date(`01/01/1970 ${currentTime}`).getTime()
    );
  });

  if (freeTimeSlots.length > 0) {
    return freeTimeSlots[0].label;
  }
  return "";
};
