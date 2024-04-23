import React from "react";
import styled from "styled-components";
import Text from "../DesignKit/Text";

const ShoeCard = () => {
  return (
    <Wrapper>
      <PlaceholderImage />
      <Text font="roboto" weight="semibold" color="dark-orange">
        Just In
      </Text>
      <Text font="roboto">Nike Dunk low Retro</Text>
      <Text font="roboto">Men's Shoes</Text>
      <Text font="roboto">4 Colors</Text>
      <Text font="roboto">$115</Text>
    </Wrapper>
  );
};

export default ShoeCard;
const PlaceholderImage = styled.div`
  width: 100%;
  height: 70%;
  background: black;
`;
const Wrapper = styled.div`
  max-width: 343px;
  width: 100%;
  height: 500px;

  @media screen and (max-width: 700px) {
    height: 390px;
  }
`;
