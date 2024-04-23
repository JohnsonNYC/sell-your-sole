import React from "react";
import styled from "styled-components";
import Dropdown from "../DesignKit/Dropdown";
import Toggle from "../DesignKit/Toggle";

import { useMediaPredicate } from "../../hooks/hooks";

const genderOptions = [{ text: "Men" }, { text: "Women" }, { text: "Unisex" }];
const salesOptions = [{ text: "Price in Bag" }, { text: "Sale" }];
const colorOptions = [
  { text: "Black" },
  { text: "Blue" },
  { text: "Brown" },
  { text: "Green" },
];
const shopOptions = [
  { text: "$0 - $25" },
  { text: "$25 - $50" },
  { text: "$50 - $100" },
];
const shoeOptions = [
  { text: "Low Top" },
  { text: "Mid Top" },
  { text: "High Top" },
];

const sizeOptions = [{ text: "3" }, { text: 3.5 }];

const SideFilter = () => {
  const windowSize = useMediaPredicate();

  return (
    <Wrapper>
      <Toggle label={"Pick Up Today"} />

      <FilterContainer>
        <Dropdown label="Gender" options={genderOptions} />
      </FilterContainer>

      <FilterContainer>
        <Dropdown label="Sale & Offers" options={salesOptions} />
      </FilterContainer>

      <FilterContainer>
        <Dropdown label="Color" options={colorOptions} />
      </FilterContainer>

      <FilterContainer>
        <Dropdown label="Shop by Price" options={shopOptions} />
      </FilterContainer>

      <FilterContainer>
        <Dropdown label="Size" options={sizeOptions} />
      </FilterContainer>

      <FilterContainer>
        <Dropdown label="Shoe Height" options={shoeOptions} />
      </FilterContainer>
    </Wrapper>
  );
};

export default SideFilter;

const FilterContainer = styled.div`
  border-top: 1px solid #989898;
  padding: 5px 0;
`;

const Wrapper = styled.div`
  border: 1px solid red;
  max-width: 192px;
  width: 100%;
  height: 100%;
  padding: 8px 4px;
  position: sticky;
  top: 0;

  display: flex;
  flex-direction: column;

  & > div:first-of-type {
    margin-bottom: 10px;
  }
`;
