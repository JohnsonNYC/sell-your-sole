import React from "react";
import styled from "styled-components";
import Text from "../DesignKit/Text";

const ShippingForm = ({
  payerDetails,
  setPayerDetails,
  shippingDetails,
  setShippingDetails,
}) => {
  const updateKey = (e, key, type) => {
    const value = e.target.value;
    if (type == "payment") {
      let formCopy = { ...payerDetails };
      formCopy[key] = value;
      setPayerDetails(formCopy);
    }

    if (type == "shipping") {
      let formCopy = { ...shippingDetails };
      formCopy[key] = value;
      setShippingDetails(formCopy);
    }
  };

  return (
    <Wrapper>
      <CardDetails>
        <Text size="lg">Card Details</Text>

        <CardRow>
          <FormInput
            label="First Name"
            value={payerDetails.firstName}
            updateKey={(e) => updateKey(e, "firstName", "payment")}
            placeholder="John"
          />

          <FormInput
            label="Last Name"
            value={payerDetails.lastName}
            updateKey={(e) => updateKey(e, "lastName", "payment")}
            placeholder="Doe"
          />
        </CardRow>

        <CardRow>
          <FormInput
            label="Card Number"
            value={payerDetails.cardNumber}
            updateKey={(e) => updateKey(e, "cardNumber", "payment")}
            placeholder="123456789"
          />
          <HalfContainer>
            <FormInput
              label="Expiration Date"
              value={payerDetails.expireDate}
              updateKey={(e) => updateKey(e, "expireDate", "payment")}
              placeholder="MM/YY"
            />
            <FormInput
              label="CVV/CVC"
              value={payerDetails.cvv}
              updateKey={(e) => updateKey(e, "cvv", "payment")}
              placeholder="123"
            />
          </HalfContainer>
        </CardRow>
      </CardDetails>

      <CardDetails>
        <Text size="lg">Shipping Address</Text>

        <CardRow>
          <FormInput
            label="First Name"
            value={shippingDetails.firstName}
            updateKey={(e) => updateKey(e, "firstName", "shipping")}
            placeholder="John"
          />

          <FormInput
            label="Last Name"
            value={shippingDetails.lastName}
            updateKey={(e) => updateKey(e, "lastName", "shipping")}
            placeholder="Doe"
          />
        </CardRow>

        <CardRow>
          <FormInput
            label="Email"
            value={shippingDetails.email}
            updateKey={(e) => updateKey(e, "email", "shipping")}
            placeholder="test@test.com"
          />

          <FormInput
            label="Phone Number"
            value={shippingDetails.phoneNumber}
            updateKey={(e) => updateKey(e, "phoneNumber", "shipping")}
            placeholder="7187187187"
          />
        </CardRow>

        <CardRow>
          <FormInput
            label="Country"
            value={shippingDetails.country}
            updateKey={(e) => updateKey(e, "country", "shipping")}
            maxWidth="31%"
            placeholder="United States"
          />

          <FormInput
            label="State/Province"
            value={shippingDetails.state}
            updateKey={(e) => updateKey(e, "state", "shipping")}
            maxWidth="31%"
            placeholder="New York"
          />
          <FormInput
            label="Postal Code"
            value={shippingDetails.postalCode}
            updateKey={(e) => updateKey(e, "postalCode", "shipping")}
            maxWidth="31%"
            placeholder="12345"
          />
        </CardRow>

        <CardRow>
          <FormInput
            label="Address"
            value={shippingDetails.address}
            updateKey={(e) => updateKey(e, "address", "shipping")}
            placeholder="123 Memory Lane"
          />
          <FormInput
            label="City"
            value={shippingDetails.city}
            updateKey={(e) => updateKey(e, "city", "shipping")}
            placeholder="Metropolis"
          />
        </CardRow>
      </CardDetails>
    </Wrapper>
  );
};

export default ShippingForm;

const FormInput = ({
  label,
  value,
  updateKey,
  maxWidth = "100%",
  placeholder = "",
}) => {
  return (
    <Container maxWidthPercent={maxWidth}>
      <Label>{label}</Label>
      <Input value={value} onChange={updateKey} placeholder={placeholder} />
    </Container>
  );
};

const CardDetails = styled.div`
  margin-bottom: 20px;
  margin-top: 40px;
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
  max-width: ${(props) => props.maxWidthPercent};
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
