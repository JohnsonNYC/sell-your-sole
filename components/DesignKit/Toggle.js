import React from "react";
import styled from "styled-components";
import Text from "./Text";
import Switch from "./Switch";

const Toggle = ({ label }) => {
  return (
    <Wrapper>
      <Text font="roboto">{label}</Text>
      <Switch />
    </Wrapper>
  );
};

export default Toggle;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
