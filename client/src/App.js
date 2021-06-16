import React, { useState } from "react";
import Timings from "./modules/timings";
import Menu from "./modules/menu";
import { VIEW_MODES } from "./constants";
import * as S from "./styles";

const App = () => {
  const [view, setView] = useState(VIEW_MODES.GLOBAL);
  return (
    <S.App>
      <Menu view={view} setView={setView} />
      <Timings view={view} />
    </S.App>
  );
};

export default App;
