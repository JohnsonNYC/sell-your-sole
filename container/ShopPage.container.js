import React, { useState } from "react";
import SideFilter from "../components/Shop/SideFilter";
import styled from "styled-components";
import ShoeGrid from "../components/Shop/ShoeGrid";
import ContentDrawer from "../components/ContentDrawer";
import ShoeDetails from "../components/Shop/ShoeDetails";

const ShopPageContainer = () => {
  const [selectedShoeData, setSelectedShoeData] = useState(null);

  return (
    <Wrapper>
      <SideFilter />
      <ShoeGrid setSelectedShoeData={setSelectedShoeData} />
      <ContentDrawer depVar={selectedShoeData} setDepVar={setSelectedShoeData}>
        <ShoeDetails selectedShoeData={selectedShoeData} />
      </ContentDrawer>
    </Wrapper>
  );
};

export default ShopPageContainer;

const Wrapper = styled.div`
  display: flex;
`;
