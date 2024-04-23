import React from "react";
import SideFilter from "../components/Shop/SideFilter";
import styled from "styled-components";
import ShoeGrid from "../components/Shop/ShoeGrid";

const ShopPageContainer = () => {
  return (
    <Wrapper>
      <SideFilter />
      <ShoeGrid />
    </Wrapper>
  );
};

export default ShopPageContainer;

const Wrapper = styled.div`
  display: flex;
`;
