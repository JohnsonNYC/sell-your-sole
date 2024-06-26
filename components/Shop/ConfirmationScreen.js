import React from "react";
import styled from "styled-components";
import Text from "../DesignKit/Text";
import { PackageOpen } from "lucide-react";

const ConfirmationScreen = ({ cartData }) => {
  return (
    <Container>
      <Text font="roboto">Order Confirmed</Text>
      <Text font="roboto">
        Your order is confirmed. You'll receive an email with your order deatils
        and tracking information once your order has shipped
      </Text>
      <OrderDetails>
        <div>
          <Text font="roboto" size="lg">
            Order Number: 123456789
          </Text>
          <Text font="roboto">Estimated Arrival: December 20, 2028</Text>

          <ReceiptDetails>
            {cartData.map((shoeData) => (
              <Row key={shoeData.key} shoeData={shoeData} />
            ))}
          </ReceiptDetails>
          <ButtonPill>Track Order</ButtonPill>
        </div>
        <div>
          <PackageOpen size={100} strokeWidth={1.5} />

          <div>
            <ButtonPill>Cancel Order</ButtonPill>
            <ButtonPill>Return to Shopping</ButtonPill>
          </div>
        </div>
      </OrderDetails>
    </Container>
  );
};

export default ConfirmationScreen;

const Row = ({ shoeData }) => {
  const { title, price, imageUrl } = shoeData || {};
  return (
    <RowContainer>
      <Text>{title}</Text>
      <Ellipsis />
      <Text>${price}</Text>
    </RowContainer>
  );
};

const Ellipsis = styled.div`
  width: 100%;
  border-bottom: 2px dotted grey;
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;

  & > div:first-of-type,
  div:last-of-type {
    min-width: fit-content;
  }
`;
const ReceiptDetails = styled.div`
  width: 100%;
`;
const Container = styled.div`
  padding: 20px;
`;

const OrderDetails = styled.div`
  width: 100%;
  display: flex;
  margin-top: 40px;
  padding: 10px;
  & > div {
    width: 50%;
    &:last-of-type {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

const ButtonPill = styled.button`
  min-width: fit-content;
  height: 30px;
  border: 1px solid grey;
  border-radius: 10px;
  margin-top: 10px;
  background: none;

  &:hover {
    cursor: pointer;
    scale: 1.1;
    transition: scale 200ms ease-in;
  }
`;
