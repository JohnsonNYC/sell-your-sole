import React, { useState } from "react";
import Text from "../components/DesignKit/Text";
import styled from "styled-components";
import ItemRow from "../components/Checkout/ItemRow";
import { useRouter } from "next/router";

const CheckoutContainer = () => {
  const [contactInfoText, setContactInfoText] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [lineOneAddress, setLineOneAddress] = useState("");
  const [lineTwoAddress, setLineTwoAddress] = useState("");
  const [city, setCity] = useState("");
  const [locationState, setLocationState] = useState("");
  const [country, setCountry] = useState("");
  const [zipcode, setZipcode] = useState("");

  const router = useRouter();

  const goBackToShop = () => {
    router.push("/shop");
  };

  return (
    <Wrapper>
      <Container>
        <Tag>SYS</Tag>
        <NavLine>{"cart > information > shipping > payment"}</NavLine>
        <Text className="contact-title" font="robot" size="xl">
          Contact Information
        </Text>
        <CircularInput
          placeholder="email"
          value={contactInfoText}
          onChange={(e) => setContactInfoText(e.target.value)}
        />

        <Text font="robot" size="xl" className="form-title">
          Shipping Address
        </Text>

        <form>
          <SplitContainer>
            <RectInput
              placeholder="first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              marginRight="10px"
            />
            <RectInput
              placeholder="last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              marginLeft="10px"
            />
          </SplitContainer>
          <RectInput
            placeholder="street address"
            value={lineOneAddress}
            onChange={(e) => setLineOneAddress(e.target.value)}
          />
          <RectInput
            placeholder="apt"
            value={lineTwoAddress}
            onChange={(e) => setLineTwoAddress(e.target.value)}
          />
          <RectInput
            placeholder="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <SplitContainer>
            <RectInput
              placeholder="state"
              value={locationState}
              onChange={(e) => setLocationState(e.target.value)}
              marginRight="10px"
            />
            <RectInput
              placeholder="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              marginRight="10px"
              marginLeft="10px"
            />
            <RectInput
              placeholder="zipcode"
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
              marginLeft="10px"
            />
          </SplitContainer>
        </form>

        <Text
          font="roboto"
          size="xs"
          handleClick={goBackToShop}
          showPointer={true}
        >
          {"> return to shop"}
        </Text>
      </Container>

      <Break />

      <Container>
        <ItemRow />
        <PriceDetails>
          <div>
            <Text font="roboto" size="md">
              Subtotal
            </Text>
            <Text font="roboto" size="md">
              $645.00
            </Text>
          </div>
          <div>
            <Text font="roboto" size="md">
              Shipping
            </Text>
            <Text font="roboto" size="md">
              Calculated in next step
            </Text>
          </div>
          <div>
            <Text font="roboto" size="md">
              Total
            </Text>
            <Text font="roboto" size="md">
              USD $655.00
            </Text>
          </div>
        </PriceDetails>
      </Container>
    </Wrapper>
  );
};

export default CheckoutContainer;

const PriceDetails = styled.div`
  margin-top: 20px;

  & > div {
    display: flex;
    padding: 10px 0;
    justify-content: space-between;

    &:first-of-type,
    &:last-of-type {
      border-top: 1px solid black;
    }
  }
`;

const Break = styled.div`
  border: 1px solid black;
`;

const SplitContainer = styled.div`
  display: flex;
  align-items: center;
`;
const CircularInput = styled.input`
  height: 50px;
  width: 100%;
  border: 1px solid #5f5f5f;
  border-radius: 20px;
  padding: 10px;
`;

const RectInput = styled.input`
  height: 50px;
  width: 100%;
  margin-bottom: 25px;
  padding: 10px;
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "0px")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "0px")};
`;
const NavLine = styled.div``;

const Tag = styled.div`
  width: 215px;
  height: 95px;
  font-size: 48px;
  margin-bottom: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: #323232;
`;
const Container = styled.div`
  width: 100%;
  padding: 40px;
`;
const Wrapper = styled.div`
  display: flex;
  padding: 40px;

  .contact-title,
  .form-title {
    margin: 20px 0;
  }
`;
