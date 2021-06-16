import React from "react";
import { VIEW_MODES } from "../../constants";
import * as S from "./styles";

const Menu = ({ view, setView }) => (
  <S.Menu>
    <div id="logo">Racing Services</div>
    <div
      className={`menu-item ${
        view === VIEW_MODES.GLOBAL ? "menu-item-active" : ""
      }`}
      onClick={() => setView(VIEW_MODES.GLOBAL)}
    >
      Global Classification
    </div>
    <div
      className={`menu-item ${
        view === VIEW_MODES.RACES ? "menu-item-active" : ""
      }`}
      onClick={() => setView(VIEW_MODES.RACES)}
    >
      Races Classification
    </div>
    <div
      className={`menu-item ${
        view === VIEW_MODES.DRIVERS ? "menu-item-active" : ""
      }`}
      onClick={() => setView(VIEW_MODES.DRIVERS)}
    >
      Drivers
    </div>
  </S.Menu>
);

export default Menu;
