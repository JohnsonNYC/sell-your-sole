import React from "react";
import styled from "styled-components";

const propsToFilter = new Set(["fontColor"]);
const shouldForwardProp = (prop) => !propsToFilter.has(prop);

const Button = (props) => {
  const { children, color, ...rest } = props;

  const fontColor = color == "black" ? "white" : "black";

  return (
    <StyledButton backgroundcolor={color} fontColor={fontColor} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button.withConfig({ shouldForwardProp })`
  padding: 16px 24px;
  background: ${(props) => props.backgroundcolor || "white"};
  color: ${(props) => props.fontColor};
  border-radius: 50px;
  font-family: "Roboto";
  font-size: 16px;
  cursor: pointer;

  &:disabled {
    opacity: 0.33;
  }
`;
