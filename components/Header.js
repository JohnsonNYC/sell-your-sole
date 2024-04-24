import React, { useContext } from "react";

// Components
import SearchBar from "./SearchBar";
import styled from "styled-components";
import Text from "./DesignKit/Text";
import { useMediaPredicate } from "../hooks/hooks";
import { useRouter } from "next/router";

// Context
import { UnifiedCheckoutProvider } from "../components/Context/UnifiedCheckoutContext";
import UnifiedCheckoutContext from "../components/Context/UnifiedCheckoutContext";
import BurgerMenu from "./Home/BurgerMenu";

const Header = () => {
  const { setIsOpen } = useContext(UnifiedCheckoutContext);
  let isMobile = useMediaPredicate() < 900;
  const router = useRouter();

  const handleGoShop = () => {
    router.push("/shop");
  };

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <UnifiedCheckoutProvider>
      <HeaderContainer>
        {isMobile ? null : (
          <LeftContainer>
            <Text
              font="bebas"
              size="xl"
              weight="bold"
              color="white"
              handleClick={handleGoHome}
            >
              SYS
            </Text>
            <Text
              font="bebas"
              size="lg"
              color="white"
              handleClick={handleGoShop}
            >
              Shop
            </Text>
            <Text font="bebas" size="lg" color="white">
              Feed
            </Text>
            <Text font="bebas" size="lg" color="white">
              Events
            </Text>
          </LeftContainer>
        )}

        {isMobile ? null : (
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
        )}

        {isMobile ? <BurgerMenu /> : null}
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

  @media screen and (max-width: 900px) {
    height: 50px;
  }
`;
const LeftContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  & > div {
    margin: 0 15px;
    cursor: pointer;
  }

  @media screen and (max-width: 900px) {
    display: none;
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

  @media screen and (max-width: 900px) {
    display: none;
  }
`;
