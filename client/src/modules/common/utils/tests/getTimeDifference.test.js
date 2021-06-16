import getTimeDifference from "../getTimeDifference";
import "@testing-library/jest-dom/extend-expect";

const mockTimes = [
  { time1: "01:00:00.0", time2: "01:00:20.0", desired: "00:00:20" },
  { time1: "01:00:00.0", time2: "08:00:20.0", desired: "07:00:20" },
  { time1: "01:00:00.0", time2: "00:00:20.0", desired: "23:00:20" },
  { time1: "01:00:00.2000", time2: "01:00:00.4000", desired: "00:00:00" },
  { time1: "01:20:45.0", time2: "02:00:00.0", desired: "00:39:15" },
];

describe("Format any time to the format HH:MM:SS.mmmm", () => {
  mockTimes.forEach((mT) => {
    it(`Difference between ${mT.time1} and ${mT.time2} must be ${mT.desired}`, () => {
      const timeDifference = getTimeDifference(mT.time1, mT.time2);
      expect(timeDifference).toEqual(` (+${mT.desired})`);
    });
  });
});
