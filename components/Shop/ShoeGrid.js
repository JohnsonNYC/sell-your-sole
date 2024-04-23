import React from "react";
import styled from "styled-components";
import ShoeCard from "./ShoeCard";

const ShoeGrid = () => {
  return (
    <GridContainer>
      <ShoeCard />
      <ShoeCard />
      <ShoeCard />
      <ShoeCard />
      <ShoeCard />
      <ShoeCard />
    </GridContainer>
  );
};

export default ShoeGrid;

const GridContainer = styled.div`
  width: 100%;
  margin-top: 30px;

  display: grid;
  grid-template-columns: repeat(3, 33%);
  grid-gap: 2px;

  @media screen and (max-width: 1025px) {
    grid-template-columns: repeat(2, 50%);
  }
`;
