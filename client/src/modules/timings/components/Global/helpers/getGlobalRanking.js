import cloneDeep from "lodash/cloneDeep";

// https://en.wikipedia.org/wiki/Formula_One_racing
const POINTS_POSITION = {
  1: 25,
  2: 18,
  3: 15,
  4: 12,
  5: 10,
  6: 8,
  7: 6,
  8: 4,
  9: 2,
  10: 1,
};

const positionToPoints = (position) => {
  if (position > 10) {
    return 0;
  }
  return POINTS_POSITION[position];
};

const getGlobalRanking = (timings, racesClassification) => {
  const globalRanking = cloneDeep(timings);
  globalRanking.forEach((driver, index) => {
    globalRanking[index] = {
      ...globalRanking[index],
      points: Object.values(racesClassification).reduce((prev, current) => {
        const position = current.findIndex(
          (race) => race.driver.name === driver.name
        );
        return prev + positionToPoints(position + 1);
      }, 0),
    };
  });
  return globalRanking.sort((p1, p2) => p2.points - p1.points);
};

export default getGlobalRanking;
