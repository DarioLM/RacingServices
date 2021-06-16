import React, { useState, useEffect } from "react";
import DriverAvatar from "../../../common/components/driver/DriverAvatar";
import DriverTimingsByRace from "./DriverTimingsByRace";
import DriverPositionsByRace from "./DriversPositionsByRace";
import * as S from "./styles";

const DETAILS_VIEW = {
  TIMINGS: "Timings",
  GLOBAL: "Global",
  RANKS: "Ranks",
};

const DriverDetailsContent = ({ view, driver, racesClassification }) => {
  switch (view) {
    case DETAILS_VIEW.TIMINGS:
      return <DriverTimingsByRace driver={driver} />;
    case DETAILS_VIEW.GLOBAL:
      return <DriverTimingsByRace driver={driver} />;
    case DETAILS_VIEW.RANKS:
      return (
        <DriverPositionsByRace
          driver={driver}
          racesClassification={racesClassification}
        />
      );
    default:
      return <DriverTimingsByRace driver={driver} />;
  }
};

const DriverDetails = ({ driver, goBack, racesClassification }) => {
  const [detailsView, setDetailsView] = useState(DETAILS_VIEW.TIMINGS);

  useEffect(() => {
    const INTERVAL_ACTIONS = {
      [DETAILS_VIEW.TIMINGS]: DETAILS_VIEW.GLOBAL,
      [DETAILS_VIEW.GLOBAL]: DETAILS_VIEW.RANKS,
      [DETAILS_VIEW.RANKS]: DETAILS_VIEW.TIMINGS,
    };
    const autoChangeMenuInterval = setInterval(
      () => setDetailsView((detailsView) => INTERVAL_ACTIONS[detailsView]),
      10000
    );
    return () => clearInterval(autoChangeMenuInterval);
  }, []);

  return (
    <S.DriverDetails>
      <S.DriverDetailsHeader>
        <div>
          <DriverAvatar url={driver.picture} />
          <div className="driver-name">{driver.name}</div>
        </div>
        <div>
          <strong>Age: </strong> {driver.age}
        </div>
        <div>
          <strong>Team: </strong> {driver.team}
        </div>
      </S.DriverDetailsHeader>
      <S.DriverDetailsContent>
        <DriverDetailsContent
          view={detailsView}
          driver={driver}
          racesClassification={racesClassification}
        />
        <S.BackButton onClick={() => goBack()}>{`< Back`}</S.BackButton>
      </S.DriverDetailsContent>
      <S.DriverDetailsMenu>
        {Object.values(DETAILS_VIEW).map((label) => (
          <div key={label} className="menu-option">
            <div
              className={`menu-detail ${
                detailsView === label ? "menu-detail--active" : ""
              }`}
              onClick={() => setDetailsView(label)}
            >
              {label}
            </div>
            <div className={detailsView === label ? "progress-bar" : ""} />
          </div>
        ))}
      </S.DriverDetailsMenu>
    </S.DriverDetails>
  );
};

export default DriverDetails;
