import React from "react";
import getTimesDifference from "../../../common/utils/getTimeDifference";
import * as S from "../styles";

const RaceTableHeader = () => (
  <S.TableRow borderBottom={"#868686"}>
    <div>Rank</div>
    <div />
    <div>Driver</div>
    <div>Team</div>
    <div>Time</div>
  </S.TableRow>
);

const RaceTable = ({ race, times }) => (
  <S.Table>
    <S.Title id={race}>{race}</S.Title>
    <RaceTableHeader />
    {times.map((time, position) => (
      <S.TableRow key={position}>
        <div>{`#${position + 1}`}</div>
        <img src={time.driver.picture} alt="Driver avatar" />
        <div>
          {time.driver.name} {`(${time.driver.age})`}
        </div>
        <div>{time.driver.team}</div>
        <div>
          {time.time}
          {position > 0 && getTimesDifference(times[0].time, time.time)}
        </div>
      </S.TableRow>
    ))}
  </S.Table>
);

export default RaceTable;
