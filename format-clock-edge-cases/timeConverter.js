function formatAs12HourClock(time) {
   if (typeof time !== "string") {
     return "Incorrect timing format";
   }
  const correctTimingFormat = time.match(/^(\d{1,2}):(\d{2})$/);

  if (!correctTimingFormat) {
    return "Incorrect timing format";
  }

   if (time.length == 4) {
     time = time.padStart(5, "0");
   }

   const match = time.match(/^(\d{1,2}):(\d{2})$/);

   if (!match) {
     return "Incorrect timing format";
   }

   const hours = Number(time.slice(0, 2));
   const minutes = Number(time.slice(3, 5));

   // 00:00
   if (time === "00:00") {
     return `12:00 am`;
   }

   // 12:00
   if (time === "12:00") {
     return `12:00 pm`;
   }

   // 00:xx
   if (hours === 0) {
     return `12:${minutes.toString().padStart(2, "0")} am`;
   }

   // 01:xx - 11:xx
   if (hours < 12) {
     return `${time} am`;
   }

   // 12:xx
   if (hours === 12) {
     return `${time} pm`;
   }

   // 13:00 - 21:59
   if (hours > 12 && hours < 22 && minutes < 10) {
     return `${(hours - 12).toString().padStart(2, "0")}:${minutes
       .toString()
       .padStart(2, "0")} pm`;
   }

   if (hours > 12 && hours < 22 && minutes >= 10) {
     return `${(hours - 12).toString().padStart(2, "0")}:${minutes} pm`;
   }

   // 22:00 - 23:59
   if (hours >= 22 && minutes < 10) {
     return `${hours - 12}:${minutes.toString().padStart(2, "0")} pm`;
   }

   if (hours >= 22 && minutes >= 10) {
     return `${hours - 12}:${minutes} pm`;
   }
}

export { formatAs12HourClock };
