import styled from "styled-components";

const MENU_COLOR_A = "#ffab12";

const Menu = styled.div`
  display: grid;
  grid-template-columns: 5fr 2fr 2fr 2fr;
  height: 100px;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  border-bottom: 5px solid ${MENU_COLOR_A};
  box-shadow: white 1px -14px 10px 11px;

  > #logo {
    font-weight: bold;
    font-size: 3vw;
    color: ${MENU_COLOR_A};
  }

  > .menu-item {
    border-bottom: 4px solid ${MENU_COLOR_A};
    padding: 10px;
    margin: 0px 10px;
    text-align: center;
    box-sizing: border-box;
    cursor: pointer;
  }

  > .menu-item-active {
    background-color: #ffab12;
    color: #282c34;
    font-weight: 600;
  }
`;

export { Menu };
