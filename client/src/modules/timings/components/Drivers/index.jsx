import React, { useState } from "react";
import DriverDetails from "./DriverDetails";
import * as S from "./styles";

const Drivers = ({ timings, racesClassification }) => {
  const [driverSelected, setDriverSelected] = useState(null);

  if (driverSelected) {
    return (
      <DriverDetails
        driver={driverSelected}
        racesClassification={racesClassification}
        goBack={() => setDriverSelected(null)}
      />
    );
  }

  return (
    <S.DriversMasonry>
      {timings.map((driver) => (
        <S.Driver key={driver._id} onClick={() => setDriverSelected(driver)}>
          <div>{driver.name}</div>
          <img src={driver.picture} alt="Driver avatar" />
          <div>
            <strong>Age:</strong> {driver.age}
          </div>
          <div>
            <strong>Team:</strong> {driver.team}
          </div>
        </S.Driver>
      ))}
    </S.DriversMasonry>
  );
};
export default Drivers;
