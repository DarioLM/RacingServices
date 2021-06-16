import React, { useMemo } from "react";
import getGlobalRanking from "./helpers/getGlobalRanking";
import * as S from "../styles";

const GlobalTableHeader = () => (
  <S.TableRow borderBottom={"#868686"}>
    <div>Rank</div>
    <div />
    <div>Driver</div>
    <div>Team</div>
    <div>Points</div>
  </S.TableRow>
);

const Global = ({ timings, racesClassification }) => {
  const globalRanking = useMemo(
    () => getGlobalRanking(timings, racesClassification),
    [timings]
  );
  return (
    <S.Table>
      <GlobalTableHeader />
      {globalRanking.map((driver, position) => (
        <S.TableRow key={driver._id}>
          <div>{`#${position + 1}`}</div>
          <img src={driver.picture} alt="Driver avatar" />
          <div>
            {driver.name} {`(${driver.age})`}
          </div>
          <div>{driver.team}</div>
          <div>
            <strong>{driver.points}</strong> Points
          </div>
        </S.TableRow>
      ))}
    </S.Table>
  );
};
export default Global;
