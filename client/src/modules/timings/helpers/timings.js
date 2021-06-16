import sortedIndexBy from "lodash/sortedIndexBy";
import padTime from "../../common/utils/padTime";

export const getRacesClassifications = (timings) => {
  const racesClassification = {};
  timings.map((driver) =>
    driver.races.map((race) => {
      if (!racesClassification[race.name]) {
        racesClassification[race.name] = [];
      }
      const raceTime = {
        driver,
        time: padTime(race.time),
      };
      racesClassification[race.name].splice(
        sortedIndexBy(racesClassification[race.name], raceTime, "time"),
        0,
        raceTime
      );
    })
  );
  return racesClassification;
};
