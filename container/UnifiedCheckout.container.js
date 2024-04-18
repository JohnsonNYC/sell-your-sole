import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
//Components
import ItemsList from "../components/ItemsList";
import CheckoutSummary from "../components/CheckoutSummary";
//State
import UnifiedCheckoutContext from "../components/Context/UnifiedCheckoutContext";

const UnifiedCheckout = () => {
  const { isOpen, setIsOpen } = useContext(UnifiedCheckoutContext);
  const [showAnimation, setShowAnimation] = useState(false);

  const handleClose = () => {
    setShowAnimation(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 1000);
  };

  useEffect(() => {
    if (isOpen) setShowAnimation(true);
  }, []);

  return (
    <Container isOpen={isOpen}>
      <Wrapper
        className={`animate__animated ${
          showAnimation ? "animate__fadeInRight" : "animate__fadeOutRight"
        }`}
      >
        <Button onClick={handleClose}>X</Button>
        <ItemsList />
        <CheckoutSummary />
      </Wrapper>
    </Container>
  );
};

export default UnifiedCheckout;

const Button = styled.button`
  background: unset;
  border: unset;
  position: absolute;
  right: 10px;
  z-index: 1;
  cursor: pointer;
`;
const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  height: 100%;
  width: 100%;

  display: ${(props) => (props.isOpen ? "inline" : "none")};

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
