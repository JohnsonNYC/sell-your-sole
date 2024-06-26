import React, { useContext, useState, useEffect, useRef } from "react";
import styled from "styled-components";
//Components
import Text from "../components/DesignKit/Text";
import ItemsList from "../components/ItemsList";
import CheckoutSummary from "../components/Checkout/CheckoutSummary";
import ShippingForm from "../components/Checkout/ShippingForm";
import ConfirmationScreen from "../components/Shop/ConfirmationScreen";

//State
import UnifiedCheckoutContext from "../components/Context/UnifiedCheckoutContext";

const propsToFilter = new Set(["isopen"]);
const shouldForwardProp = (prop) => !propsToFilter.has(prop);

const UnifiedCheckout = () => {
  const { isOpen, setIsOpen, cartData, setCartData } = useContext(
    UnifiedCheckoutContext
  );

  const wrapperRef = useRef();

  // Tab State
  const [activeTab, setActiveTab] = useState(0); // 0: review, 1: shipping details, 2: succes page?
  const [showAnimation, setShowAnimation] = useState(true);

  //Payer Details State
  const [payerDetails, setPayerDetails] = useState({
    firstName: "",
    lastName: "",
    cardNumber: "",
    expireDate: "",
    cvv: "",
  });

  // Shipping Details State
  const [shippingDetails, setShippingDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
    state: "",
    postalCode: "",
    address: "",
    city: "",
  });

  const isCheckoutDetailsFilled = Boolean(
    payerDetails.firstName &&
      payerDetails.lastName &&
      payerDetails.cardNumber &&
      payerDetails.expireDate &&
      payerDetails.cvv
  );

  const handleClose = () => {
    setShowAnimation(false);
    setTimeout(() => {
      resetState();
    }, 900);
  };

  const resetState = () => {
    setIsOpen(false);
    setShowAnimation(true);
    setActiveTab(0);
  };

  return (
    <Container isopen={isOpen}>
      <Wrapper
        ref={wrapperRef}
        className={`animate__animated ${
          showAnimation ? "animate__fadeInRight" : "animate__fadeOutRight"
        }`}
      >
        <Button onClick={handleClose}>X</Button>
        {activeTab == 0 ? (
          <>
            <ItemsList cartData={cartData} setCartData={setCartData} />
            <CheckoutSummary
              cartData={cartData}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </>
        ) : activeTab == 1 ? (
          <>
            <ShippingForm
              payerDetails={payerDetails}
              setPayerDetails={setPayerDetails}
              shippingDetails={shippingDetails}
              setShippingDetails={setShippingDetails}
            />
            <CheckoutSummary
              cartData={cartData}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              isCheckoutDetailsFilled={isCheckoutDetailsFilled}
            />
          </>
        ) : activeTab == 2 ? (
          <>
            <ConfirmationScreen cartData={cartData} />
          </>
        ) : null}
      </Wrapper>
    </Container>
  );
};

export default UnifiedCheckout;

const EmptyMessage = () => {
  return (
    <div>
      <Text>Looks like you don't have anything in your cart!</Text>
    </div>
  );
};
const Button = styled.button`
  background: unset;
  border: unset;
  position: absolute;
  right: 10px;
  z-index: 1;
  cursor: pointer;
`;
const Container = styled.div.withConfig({ shouldForwardProp })`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  height: 100%;
  width: 100%;

  display: ${(props) => (Boolean(props.isopen) ? "inline" : "none")};

  .animate__animated {
    animation-fill-mode: none;
  }
`;

const Wrapper = styled.div`
  width: 80%;
  height: 90%;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  background-color: white;
  border-radius: 6px;
  padding: 10px;

  display: flex;
`;
