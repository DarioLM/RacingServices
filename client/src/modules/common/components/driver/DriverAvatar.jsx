import React from "react";
import styled from "styled-components";

const StyledDriverAvatar = styled.img`
  border-radius: 50%;
`;

const DriverAvatar = ({ url }) => (
  <StyledDriverAvatar src={url} alt="Driver avatar" />
);

export default DriverAvatar;
