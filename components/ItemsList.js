import React from "react";
import styled from "styled-components";
// Components
import Text from "./DesignKit/Text";
import ItemRow from "./ItemRow";

const ItemsList = () => {
  return (
    <Wrapper>
      <Text font="roboto" size="lg">
        Bag
      </Text>

      <ItemRow />
      <ItemRow />
      <ItemRow />
    </Wrapper>
  );
};

export default ItemsList;

const Wrapper = styled.div`
  width: 70%;
  padding: 10px;
  border: 1px solid red;
  overflow-y: auto;
`;
