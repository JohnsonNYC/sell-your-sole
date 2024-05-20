import React from "react";
import styled from "styled-components";
import Text from "../DesignKit/Text";
import Image from "next/image";

const ShoeCard = ({ shoeData, setSelectedShoeData }) => {
  const { title, price, imageUrl } = shoeData || {};
  return (
    <Wrapper onClick={() => setSelectedShoeData(shoeData)}>
      <ImageContainer>
        {imageUrl ? (
          <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
        ) : null}
      </ImageContainer>
      <Text font="roboto" weight="semibold" color="dark-orange">
        Just In
      </Text>
      <Text font="roboto">{title}</Text>
      <Text font="roboto">Men's Shoes</Text>
      <Text font="roboto">4 Colors</Text>
      <Text font="roboto">${price}</Text>
    </Wrapper>
  );
};

export default ShoeCard;
const ImageContainer = styled.div`
  width: 100%;
  height: 70%;
  position: relative;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  cursor: pointer;

  @media screen and (max-width: 700px) {
    height: 390px;
  }
`;
