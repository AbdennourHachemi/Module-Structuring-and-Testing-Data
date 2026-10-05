function formatAs12HourClock(time) {
  if (time.length == 4) {
    c;
    time = time.padStart(5, "0");
  }

  if (typeof time !== "string") {
    return "nccorect timing format";
  }

  const match = time.match(/^(\d{1,2}):(\d{2})$/);

  if (!match) {
    return "Inccorect timing format";
  }

  const hours = Number(time.slice(0, 2));
  const minutes = Number(time.slice(3, 5));

  if (time === "12:00") {
    return `12:00 pm`;
  }

  if (hours < 12) {
    return `${time} am`;
  }
  if (hours >= 12) {
    return `${time} pm`;
  }
  if (hours == 24) {
    return `12:00 am`;
  }

  if (hours > 12 && hours < 22 && minutes < 10) {
    return `${(hours - 12).toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")} pm`;
  }

  if (hours > 12 && hours < 22 && minutes < 10) {
    return `${(hours - 12).toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")} pm`;
  }
  if (hours > 12 && hours < 22 && minutes >= 10) {
    return `${(hours - 12).toString().padStart(2, "0")}:${minutes} pm`;
  }
  if (hours >= 22 && minutes < 10) {
    return `${hours - 12}:${minutes.toString().padStart(2, "0")} pm`;
  }
  if (hours >= 22 && minutes >= 10) {
    return `${hours - 12}:${minutes} pm`;
  }
  if (hours >= 12 && minutes >= 10) {
    return `${hours}:${minutes} pm`;
  }
}

export { formatAs12HourClock };
