import React from "react";
import * as S from "./styles";

const DriverPositionsByRaceHeader = () => (
  <S.DriverTimingsByRace>
    <div>
      <strong>Race</strong>
    </div>
    <div>
      <strong>Rank</strong>
    </div>
  </S.DriverTimingsByRace>
);

const DriverPositionsByRace = ({ driver, racesClassification }) => {
  return (
    <>
      <S.Title>Ranks by Races</S.Title>
      <DriverPositionsByRaceHeader />
      {Object.entries(racesClassification).map(([race, times]) => {
        const positionAtRace = times.findIndex(
          (time) => time.driver._id === driver._id
        );
        return (
          <S.DriverTimingsByRace key={race}>
            <div>{race}</div>
            <div>{positionAtRace + 1}</div>
          </S.DriverTimingsByRace>
        );
      })}
    </>
  );
};

export default DriverPositionsByRace;
