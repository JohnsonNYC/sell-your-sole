import React, { useState } from "react";
import styled from "styled-components";
import Text from "./Text";
import { ChevronDown } from "lucide-react";

const Dropdown = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <LabelContainer onClick={() => setIsOpen(!isOpen)}>
        <Text font="roboto">{label}</Text>
        <ChevronDown className={`chevron ${isOpen ? "open" : ""}`} />
      </LabelContainer>

      {options && options.length ? (
        <OptionsContainer className={`${isOpen ? "open" : ""}`}>
          {options.map((opt, i) => (
            <OptionsRow key={opt.key || i} option={opt} />
          ))}
        </OptionsContainer>
      ) : null}
    </Wrapper>
  );
};

const OptionsRow = ({ option }) => {
  const { text } = option || {};
  const [isToggled, setIsToggled] = useState(false);

  const updateToggle = (e) => {
    e.stopPropagation();
    setIsToggled(!isToggled);
  };

  return (
    <OptionRowWrapper onClick={updateToggle}>
      <input type="checkbox" checked={isToggled} onChange={updateToggle} />
      <Text font="roboto">{text}</Text>
    </OptionRowWrapper>
  );
};
export default Dropdown;

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  .chevron {
    transition: transform 0.25s ease-in;
    &.open {
      transform: rotate(180deg);
    }
  }
`;
const OptionRowWrapper = styled.div`
  display: flex;
  padding: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > .sk-typography {
    padding: 5px;
  }
`;
const OptionsContainer = styled.div`
  overflow: hidden;
  max-height: 0px;
  transition: 0.25s ease-in;

  &.open {
    max-height: 200px;
  }
`;
