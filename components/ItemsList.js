import React from "react";
import styled from "styled-components";
// Components
import Text from "./DesignKit/Text";
import ItemRow from "./ItemRow";

const ItemsList = ({ cartData, setCartData }) => {
  return (
    <Wrapper>
      <Text font="roboto" size="lg">
        Bag
      </Text>
      {cartData && cartData.length ? (
        cartData.map((item) => (
          <ItemRow
            item={item}
            key={item.key}
            cartData={cartData}
            setCartData={setCartData}
          />
        ))
      ) : (
        <Text font="roboto" size="lg">
          There are no items in your bag.
        </Text>
      )}
    </Wrapper>
  );
};

export default ItemsList;

const Wrapper = styled.div`
  width: 70%;
  padding: 10px;
  overflow-y: auto;
`;
