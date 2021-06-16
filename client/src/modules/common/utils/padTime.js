const padTime = (time) => {
  if (!time || typeof time !== "string") return "";
  const [hMS, milliseconds] = time.split(".");
  const [hours, minutes, seconds] = hMS.split(":");
  return `${hours.padStart(2, "0")}:${minutes.padStart(
    2,
    "0"
  )}:${seconds.padStart(2, "0")}.${milliseconds.padEnd(4, "0")}`;
};

export default padTime;
