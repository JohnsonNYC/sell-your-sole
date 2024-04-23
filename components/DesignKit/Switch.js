import React from "react";
import styled from "styled-components";

const Switch = () => {
  return (
    <SwitchContainer>
      <input type="checkbox" />
      <Slider className="slider round" />
    </SwitchContainer>
  );
};

export default Switch;

const SwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 42px;
  height: 24px;

  & > input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + .slider {
      background-color: #2196f3;
    }

    &:focus + .slider {
      box-shadow: 0 0 1px #2196f3;
    }

    &:checked + .slider:before {
      transform: translateX(16px);
    }
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 2px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;
