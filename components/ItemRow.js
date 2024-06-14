import React from "react";
import styled from "styled-components";

import Text from "./DesignKit/Text";
import Image from "next/image";
import { getTwoDaysFromNow } from "../utils/dates.utils";

const ItemRow = ({ item, cartData, setCartData }) => {
  const { key, title, price, imageUrl, material } = item || {};

  const removeItem = () => {
    const cartCopy = [...cartData];
    const foundItemIndex = cartCopy.findIndex((item) => item.key === key);
    cartCopy.splice(foundItemIndex, 1);
    setCartData(cartCopy);
  };

  return (
    <Container>
      <Row>
        <ImageContainer>
          <Image
            src={imageUrl}
            alt={title}
            fill={true}
            sizes={"(max-width: 300px) 100%"}
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
        </ImageContainer>
        <Details>
          <Text font="roboto">{title}</Text>
          <Text font="roboto" size="xs">
            {material}
          </Text>

          <IconContainer>
            <Button
              backgroundcolor="#E75480"
              fontcolor="white"
              bordercolor={"#E75480"}
            >
              Favorite
            </Button>
            <Button
              backgroundcolor="white"
              fontcolor="black"
              bordercolor={"gray"}
              onClick={removeItem}
            >
              Delete
            </Button>
          </IconContainer>
        </Details>
        <Price font="roboto" size="md">
          ${price}
        </Price>
      </Row>

      <ShippingDetails>
        <Text font="roboto" weight="medium">
          Shipping
        </Text>
        <Text font="roboto" size="xs">
          Arrives by {getTwoDaysFromNow()}
        </Text>

        <Text className="c-ir-pick-up" font="roboto" size="xs">
          Free Pickup
        </Text>
        <Text font="roboto" size="xs" weight="medium">
          Find a Store
        </Text>
      </ShippingDetails>
    </Container>
  );
};

export default ItemRow;

const Container = styled.div`
  border-bottom: 1px solid gray;
  padding-bottom: 20px;
  margin-bottom: 30px;
`;

const ShippingDetails = styled.div`
  margin-top: 10px;

  .c-ir-pick-up {
    margin-top: 30px;
  }
`;

const Button = styled.button.attrs((props) => ({
  style: {
    color: props.fontcolor,
    border: `1px solid ${props.bordercolor}`,
    background: props.backgroundcolor,
  },
}))`
  font-size: 14px;
  border-radius: 20px;
  padding: 2px 10px;
  cursor: pointer;
`;

const IconContainer = styled.div`
  margin-top: auto;

  & > button:last-of-type {
    margin-left: 10px;
  }
`;

const ImageContainer = styled.div`
  width: 164px;
  height: 164px;
  background: black;
  position: relative;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;

const Price = styled(Text)`
  margin-left: auto;
`;
const Row = styled.div`
  display: flex;
`;
