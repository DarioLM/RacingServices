import styled from "styled-components";

const MAX_ROW_HEIGHT = "50px";

const Title = styled.div`
  font-size: 1.5em;
  border-bottom: 4px solid #ffab12;
  color: white;
  font-weight: bold;
  padding: 20px;
`;

const Table = styled.div`
  padding: 20px;
`;

const TableRow = styled.div`
  display: grid;
  position: relative;
  align-items: center;
  height: ${MAX_ROW_HEIGHT};
  border-bottom: ${({ borderBottom }) =>
    borderBottom ? `2px solid ${borderBottom}` : "none"};
  grid-template-columns: 0.5fr 1fr 3fr 3fr 3fr;
  margin: 15px 0px;
  > div:first-child {
    font-weight: bold;
  }
  > img {
    max-height: ${MAX_ROW_HEIGHT};
    border-radius: 50%;
  }
`;

const RacesMenu = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  z-index: 2;
  bottom: 0;
  width: 100%;
  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #282c34;
    font-weight: 600;
    border-left: 2px solid #282c34;
    height: 40px;
    background: orange;
    text-align: center;
    padding: 5px 10px;
    flex: 1;
    text-decoration: none;
  }
`;

export { Title, Table, TableRow, RacesMenu };
