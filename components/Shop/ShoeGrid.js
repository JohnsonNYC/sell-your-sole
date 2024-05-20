import React from "react";
import styled from "styled-components";
import ShoeCard from "./ShoeCard";
import { seedData } from "../../seedData";

const ShoeGrid = ({ setSelectedShoeData }) => {
  return (
    <GridContainer>
      {seedData.map((el) => (
        <ShoeCard
          key={el.key}
          shoeData={el}
          setSelectedShoeData={setSelectedShoeData}
        />
      ))}
    </GridContainer>
  );
};

export default ShoeGrid;

const GridContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  padding: 0 5px;

  display: grid;
  grid-template-columns: repeat(3, 33%);
  grid-gap: 2px;

  @media screen and (max-width: 1025px) {
    grid-template-columns: repeat(2, 50%);
  }

  & > div {
    margin: 0 auto;
  }
`;
