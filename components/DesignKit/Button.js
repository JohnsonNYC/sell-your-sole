import React from "react";
import styled from "styled-components";

const Button = ({ children, color }) => {
  const fontColor = color == "black" ? "white" : "black";

  return (
    <StyledButton backgroundColor={color} fontColor={fontColor}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  padding: 16px 24px;
  background: ${(props) => props.backgroundColor || "white"};
  color: ${(props) => props.fontColor};
  border-radius: 50px;
  font-family: "Roboto";
  font-size: 16px;
`;
