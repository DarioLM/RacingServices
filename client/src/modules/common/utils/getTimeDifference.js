const getTimesDifference = (t1, t2) => {
  const [hMS, milliseconds] = t1.split(".");
  const [hours, minutes, seconds] = hMS.split(":");

  const [hMS2, milliseconds2] = t2.split(".");
  const [hours2, minutes2, seconds2] = hMS2.split(":");

  const t1InSeconds =
    Number(hours) * 60 * 60 + Number(minutes) * 60 + Number(seconds);
  const t2InSeconds =
    Number(hours2) * 60 * 60 + Number(minutes2) * 60 + Number(seconds2);
  const secondsDifference = String(t2InSeconds - t1InSeconds);

  return ` (+${new Date(secondsDifference * 1000)
    .toISOString()
    .substr(11, 8)})`;
};

export default getTimesDifference;
