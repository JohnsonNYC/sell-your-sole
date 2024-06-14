import React, { useState } from "react";
import styled from "styled-components";
import Text from "../DesignKit/Text";

const ShippingForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [cvv, setCvv] = useState("");

  const isEmpty = Boolean(
    firstName && lastName && cardNumber && expireDate && cvv == ""
  );

  return (
    <Wrapper>
      <CardDetails>
        <CardRow>
          <FormInput
            label="First Name"
            value={firstName}
            setValue={setFirstName}
          />

          <FormInput
            label="Last Name"
            value={lastName}
            setValue={setLastName}
          />
        </CardRow>

        <CardRow>
          <FormInput
            label="Card Number"
            value={cardNumber}
            setValue={setCardNumber}
          />
          <HalfContainer>
            <FormInput
              label="Expiration Date"
              value={expireDate}
              setValue={setExpireDate}
            />
            <FormInput label="CVV/CVC" value={cvv} setValue={setCvv} />
          </HalfContainer>
        </CardRow>
      </CardDetails>

      <CardDetails>
        <Text>Billing Address</Text>

        <CardRow>
          <FormInput
            label="First Name"
            value={firstName}
            setValue={setFirstName}
          />

          <FormInput
            label="Last Name"
            value={lastName}
            setValue={setLastName}
          />
        </CardRow>

        <CardRow>
          <FormInput label="Email" value={firstName} setValue={setFirstName} />

          <FormInput
            label="Phone Number"
            value={firstName}
            setValue={setFirstName}
          />
        </CardRow>

        <CardRow>
          <FormInput
            label="Country"
            value={firstName}
            setValue={setFirstName}
          />

          <FormInput
            label="State/Province"
            value={firstName}
            setValue={setFirstName}
          />
          <FormInput
            label="Postal Code"
            value={firstName}
            setValue={setFirstName}
          />
        </CardRow>

        <FormInput label="Address" value={firstName} setValue={setFirstName} />

        <FormInput label="City" value={firstName} setValue={setFirstName} />
      </CardDetails>
    </Wrapper>
  );
};

export default ShippingForm;

const FormInput = ({ label, value, setValue }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Container>
      <Label>{label}</Label>
      <Input value={value} onChange={(e) => handleChange(e)} />
    </Container>
  );
};

const CardDetails = styled.div`
  margin-bottom: 40px;
`;

const CardRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 10px;

  & > * {
    width: 48%;
  }
`;

const Label = styled.label`
  font-family: Roboto;
`;

const Input = styled.input`
  height: 40px;
  padding: 20px 10px;
  border: 1px solid grey;
  border-radius: 10px;
`;

const Wrapper = styled.form`
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const HalfContainer = styled.div`
  display: flex;
  justify-content: space-between;

  & > * {
    width: 48%;
  }
`;
