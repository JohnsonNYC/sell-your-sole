import React from "react";
import styled from "styled-components";

import Text from "./DesignKit/Text";

const ItemRow = () => {
  return (
    <Container>
      <Row>
        <PH />
        <Details>
          <Text font="roboto">Nike Trail Aireez</Text>
          <Text font="roboto" size="xs">
            Men's Running Vest
          </Text>

          <IconContainer>
            <Button
              backgroundColor="#E75480"
              fontColor="white"
              borderColor={"#E75480"}
            >
              Favorite
            </Button>
            <Button
              backgroundColor="white"
              fontColor="black"
              borderColor={"gray"}
            >
              Delete
            </Button>
          </IconContainer>
        </Details>
        <Price font="roboto" size="md">
          $100.00
        </Price>
      </Row>

      <ShippingDetails>
        <Text font="roboto" weight="medium">
          Shipping
        </Text>
        <Text font="roboto" size="xs">
          Arrives by Wed, Apr 24
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

const Button = styled.button`
  font-size: 14px;
  border-radius: 20px;
  padding: 2px 10px;

  border: 1px solid ${(props) => props.borderColor};
  background: ${(props) => props.backgroundColor};
  color: ${(props) => props.fontColor};
  cursor: pointer;
`;
const IconContainer = styled.div`
  margin-top: auto;

  & > button:last-of-type {
    margin-left: 10px;
  }
`;

const PH = styled.div`
  width: 164px;
  height: 164px;
  background: black;
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
