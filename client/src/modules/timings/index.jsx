import React, { useState, useMemo } from "react";
import useFetch from "../common/hooks/useFetch";
import { getRacesClassifications } from "./helpers/timings";
import Races from "./components/Races";
import Global from "./components/Global";
import Drivers from "./components/Drivers";
import { VIEW_MODES } from "../../constants";

const Timings = ({ view }) => {
  const { data: timings } = useFetch("/api/timings");

  const racesClassification = useMemo(
    () => timings && getRacesClassifications(timings),
    [timings]
  );

  if (!timings) return <div>Loading...</div>;

  switch (view) {
    case VIEW_MODES.GLOBAL:
      return (
        <Global timings={timings} racesClassification={racesClassification} />
      );
    case VIEW_MODES.RACES:
      return <Races racesClassification={racesClassification} />;
    case VIEW_MODES.DRIVERS:
      return (
        <Drivers timings={timings} racesClassification={racesClassification} />
      );
    default:
      return (
        <Global timings={timings} racesClassification={racesClassification} />
      );
  }
};
export default Timings;
