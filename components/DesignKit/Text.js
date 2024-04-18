import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  font-family: ${(props) => props.font}, sans-serif;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
`;

const colorMap = { "dark-black": "#28282B", black: "#36454f", white: "#fff" };
const textMap = { bebas: "Bebas Neue", roboto: "Roboto" };
const weightMap = { regular: 400, medium: "500", semibold: "600", bold: "700" };
const sizeMap = {
  xxs: "12px",
  xs: "14px",
  sm: "16px",
  md: "18px",
  lg: "20px",
  xl: "24px",
};

const Text = ({
  children,
  className = "",
  font = "bebas",
  weight = "regular",
  size = "sm",
  color = "black",
  handleClick = null,
}) => {
  const defaultColor = colorMap[color];
  const defaultSize = sizeMap[size];
  const defaultWeight = weightMap[weight];
  const defaultFont = textMap[font];

  return (
    <StyledDiv
      font={defaultFont}
      weight={defaultWeight}
      size={defaultSize}
      color={defaultColor}
      className={className}
      onClick={handleClick}
    >
      {children}
    </StyledDiv>
  );
};

export default Text;
