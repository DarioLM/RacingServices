import padTime from "../padTime";
import "@testing-library/jest-dom/extend-expect";

const mockTimes = [
  { unformated: "", desired: "" },
  { unformated: 25, desired: "" },
  { unformated: null, desired: "" },
  { unformated: "1:4:4.2", desired: "01:04:04.2000" },
  { unformated: "1:24:4.2", desired: "01:24:04.2000" },
  { unformated: "16:05:44.2456", desired: "16:05:44.2456" },
  { unformated: "1:1:1.1", desired: "01:01:01.1000" },
];

describe("Format any time to the format HH:MM:SS.mmmm", () => {
  mockTimes.forEach((mT) => {
    it(`Format ${mT.unformated} to ${mT.desired}`, () => {
      const formatedTime = padTime(mT.unformated);
      expect(formatedTime).toEqual(mT.desired);
    });
  });
});
