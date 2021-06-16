import React from "react";
import RaceTable from "./RaceTable";
import * as S from "../styles";

const Races = ({ racesClassification }) => (
  <div>
    {racesClassification && (
      <>
        <S.RacesMenu>
          {Object.keys(racesClassification).map((race) => (
            <a href={`#${race}`}>{race}</a>
          ))}
        </S.RacesMenu>
        {Object.entries(racesClassification).map(([race, times]) => (
          <RaceTable key={race} race={race} times={times} />
        ))}
      </>
    )}
  </div>
);
export default Races;
