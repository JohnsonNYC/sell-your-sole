import React, { useContext } from "react";
// Components
import SearchBar from "./SearchBar";
import styled from "styled-components";
import Text from "./DesignKit/Text";

// Context
import { UnifiedCheckoutProvider } from "../components/Context/UnifiedCheckoutContext";
import UnifiedCheckoutContext from "../components/Context/UnifiedCheckoutContext";

const Header = () => {
  const { setIsOpen } = useContext(UnifiedCheckoutContext);

  return (
    <UnifiedCheckoutProvider>
      <HeaderContainer>
        <LeftContainer>
          <Text font="bebas" size="xl" weight="bold" color="white">
            SYS
          </Text>
          <Text font="bebas" size="lg" color="white">
            Shop
          </Text>
          <Text font="bebas" size="lg" color="white">
            Feed
          </Text>
          <Text font="bebas" size="lg" color="white">
            Events
          </Text>
        </LeftContainer>

        <RightContainer>
          <SearchBar />
          <Text font="bebas" size="lg" color="white">
            Sell
          </Text>
          <Text font="bebas" size="lg" color="white">
            Login
          </Text>

          <Text
            font="bebas"
            size="lg"
            color="white"
            handleClick={() => setIsOpen(true)}
          >
            Cart
          </Text>
        </RightContainer>
      </HeaderContainer>
    </UnifiedCheckoutProvider>
  );
};

export default Header;

const HeaderContainer = styled.header`
  background: #0a0a0a;
  display: flex;
  height: 115px;
  padding: 10px;
`;
const LeftContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  & > div {
    margin: 0 15px;
    cursor: pointer;
  }
`;
const RightContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  & > * {
    margin: 0 10px;
    cursor: pointer;
  }
`;
