import styled from "styled-components";

const AUTO_CHANGE_DETAIL_MENU_DURATION = "10s";

const Title = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  border-bottom: 4px solid #ffab12;
`;

const DriversMasonry = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  gap: 5%;
`;

const Driver = styled.div`
  padding: 10px;
  width: 20%;
  align-items: center;
  border: 2px solid #ffab12;
  box-sizing: border-box;
  margin: 10px;
  border-radius: 3px;
  cursor: pointer;
  > div:first-child {
    font-size: 1.2em;
    width: fit-content;
    float: left;
    display: contents;
  }
  > img {
    border-radius: 50%;
    float: right;
  }
`;

const DriverDetails = styled.div`
  display: grid;
  grid-template-rows: 20% 80%;
  height: calc(100vh - 105px);
`;

const DriverDetailsHeader = styled.div`
  border-bottom: 2px solid grey;
  display: grid;
  grid-template-rows: 60% 20% 20%;

  .driver-name {
    font-size: 2em;
    font-weight: bold;
    padding: 0px 20px;
    display: flex;
    align-items: center;
  }
  > div:first-child {
    display: flex;
    align-items: center;
  }
  > div {
    padding: 0px 20px;
  }
`;
const DriverDetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
`;

const DriverDetailsMenu = styled.div`
  position: fixed;
  bottom: 0px;
  right: 0;
  display: grid;
  grid-template-columns: repeat(3, 33%);
  .menu-option {
    position: relative;
  }
  .menu-detail {
    width: 100px;
    font-weight: bold;
    padding: 10px;
    text-align: center;
    cursor: pointer;
    border-bottom: 4px solid #ffab12;
    color: white;
  }
  .menu-detail--active {
    background-color: #ffab12;
    color: #282c34;
  }
  .progress-bar {
    height: 4px;
    animation: progressBar ${AUTO_CHANGE_DETAIL_MENU_DURATION} ease-in;
    background-color: white;
    position: absolute;
    bottom: 0;
  }

  @keyframes progressBar {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
`;

const DriverTimingsByRace = styled.div`
  display: flex;
  gap: 10%;
  width: 40%;
  margin: 5px 0px;
  justify-content: space-between;
`;

const BackButton = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  background-color: #ffab12;
  padding: 10px;
  font-weight: bold;
  color: #282c34;
  cursor: pointer;
`;

export {
  Title,
  DriversMasonry,
  Driver,
  DriverDetails,
  DriverDetailsHeader,
  DriverDetailsContent,
  DriverDetailsMenu,
  DriverTimingsByRace,
  BackButton,
};
