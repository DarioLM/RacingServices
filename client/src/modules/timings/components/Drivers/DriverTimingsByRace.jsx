import React from "react";
import padTime from "../../../common/utils/padTime";
import * as S from "./styles";

const TimingsByRaceHeader = () => (
  <S.DriverTimingsByRace>
    <div>
      <strong>Race</strong>
    </div>
    <div>
      <strong>Time</strong>
    </div>
  </S.DriverTimingsByRace>
);

const DriverTimingsByRace = ({ driver }) => {
  return (
    <>
      <S.Title>Timings by Races</S.Title>
      <TimingsByRaceHeader />
      {driver?.races.map((race) => (
        <S.DriverTimingsByRace key={race.name}>
          <div>{race.name}</div>
          <div>{padTime(race.time)}</div>
        </S.DriverTimingsByRace>
      ))}
    </>
  );
};

export default DriverTimingsByRace;
