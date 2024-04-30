import React from "react";
import styled from "styled-components";
import Text from "../DesignKit/Text";

const ItemRow = ({ imgSrc, name, size, price }) => {
  return (
    <Wrapper>
      <ImagePlaceholder />

      <ItemDetails>
        <Text size="xl">Sneaker Name</Text>
        <Text>Size</Text>
        <Text>Price</Text>
      </ItemDetails>
    </Wrapper>
  );
};

export default ItemRow;

const ItemDetails = styled.div`
  margin-left: 10px;

  display: flex;
  flex-direction: column;

  & > div:last-of-type {
    margin-top: auto;
  }
`;

const Wrapper = styled.div`
  display: flex;
`;

const ImagePlaceholder = styled.div`
  width: 100px;
  height: 100px;
  background: black;
`;
