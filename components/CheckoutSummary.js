import React from "react";
import styled from "styled-components";

//Components
import Text from "./DesignKit/Text";
import Button from "./DesignKit/Button";

const CheckoutSummary = () => {
  return (
    <Wrapper>
      <Text font="roboto" weight="bold" size="lg">
        Summary
      </Text>

      <Text font="roboto">Do you have a Promo Code?</Text>

      <Row>
        <Text font="roboto">Subtotal</Text>
        <Text font="roboto">$380.00</Text>
      </Row>

      <Row>
        <Text font="roboto">Estimated Shipping & Handling</Text>
        <Text font="roboto">$8.00</Text>
      </Row>

      <Row>
        <Text font="roboto">Estimated Tax</Text>
        <Text font="roboto">$8.00</Text>
      </Row>

      <Break />

      <Row>
        <Text font="roboto">Total</Text>
        <Text font="roboto">$388.00</Text>
      </Row>

      <Break />

      <ButtonContainer>
        <Button color="black">Checkout</Button>
        <Button>Paypal</Button>
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
