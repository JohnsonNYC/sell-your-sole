import React, { useMemo } from "react";
import styled from "styled-components";

//Components
import Text from "./DesignKit/Text";
import Button from "./DesignKit/Button";

const CheckoutSummary = ({ cartData }) => {
  const cartTotal = useMemo(() => {
    return cartData.reduce((acc, curr) => {
      acc += parseInt(curr.price);
      return acc;
    }, 0);
  }, [cartData]);

  const shippingAndHandling = cartTotal ? 8 : 0;
  const estimatedTax = cartTotal ? 4 : 0;
  const total = cartTotal + shippingAndHandling + estimatedTax;

  return (
    <Wrapper>
      <Text font="roboto" weight="bold" size="lg">
        Summary
      </Text>

      <Text font="roboto">Do you have a Promo Code?</Text>

      <Row>
        <Text font="roboto">Subtotal</Text>
        <Text font="roboto">${cartTotal}</Text>
      </Row>

      <Row>
        <Text font="roboto">Estimated Shipping & Handling</Text>
        <Text font="roboto">${shippingAndHandling}</Text>
      </Row>

      <Row>
        <Text font="roboto">Estimated Tax</Text>
        <Text font="roboto">${estimatedTax}</Text>
      </Row>

      <Break />

      <Row>
        <Text font="roboto">Total</Text>
        <Text font="roboto">${total}</Text>
      </Row>

      <Break />

      <ButtonContainer>
        <Button color="black" disabled={Boolean(total == 0)}>
          Checkout
        </Button>
        <Button disabled={Boolean(total == 0)}>Paypal</Button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default CheckoutSummary;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > button {
    margin-bottom: 10px;
  }
`;

const Break = styled.div`
  width: 100%;
  display: block;
  border-bottom: 1px solid gray;
  margin: 15px 0;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0;
`;
const Wrapper = styled.div`
  width: 30%;
  padding: 10px;

  & > div {
    &:first-of-type {
      margin-bottom: 10px;
    }
  }
`;
