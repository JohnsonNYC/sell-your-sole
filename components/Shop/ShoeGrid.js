import React from "react";
import styled from "styled-components";
import ShoeCard from "./ShoeCard";

const seedData = [
  {
    key: crypto.randomUUID(),
    title: "Shoe A",
    sizes: ["8.0", "8.5", "9.0"],
    price: "100.00",
    styleId: crypto.randomUUID(),
    color: ["Blanc Optique"],
    material: "Leather",
    details: [
      "10 High Top Sneaker",
      "Leather Upper",
      "Perforated and smooth leather panels",
      "Saint Laurent and SL/10H-debossed padded ankle",
      "SL/10H debossed at side",
      "Leather lining",
      "Leather Sole",
    ],
  },
  {
    key: crypto.randomUUID(),
    title: "Shoe B",
    sizes: ["8.0", "8.5", "9.0"],
    price: "100.00",
    styleId: crypto.randomUUID(),
    color: ["Blanc Optique"],
    material: "Leather",
    details: [
      "10 High Top Sneaker",
      "Leather Upper",
      "Perforated and smooth leather panels",
      "Saint Laurent and SL/10H-debossed padded ankle",
      "SL/10H debossed at side",
      "Leather lining",
      "Leather Sole",
    ],
  },
  {
    key: crypto.randomUUID(),
    title: "Shoe C",
    sizes: ["8.0", "8.5", "9.0"],
    price: "100.00",
    styleId: crypto.randomUUID(),
    color: ["Blanc Optique"],
    material: "Leather",
    details: [
      "10 High Top Sneaker",
      "Leather Upper",
      "Perforated and smooth leather panels",
      "Saint Laurent and SL/10H-debossed padded ankle",
      "SL/10H debossed at side",
      "Leather lining",
      "Leather Sole",
    ],
  },
  {
    key: crypto.randomUUID(),
    title: "Shoe D",
    sizes: ["8.0", "8.5", "9.0"],
    price: "100.00",
    styleId: crypto.randomUUID(),
    color: ["Blanc Optique"],
    material: "Leather",
    details: [
      "10 High Top Sneaker",
      "Leather Upper",
      "Perforated and smooth leather panels",
      "Saint Laurent and SL/10H-debossed padded ankle",
      "SL/10H debossed at side",
      "Leather lining",
      "Leather Sole",
    ],
  },
  {
    key: crypto.randomUUID(),
    title: "Shoe E",
    sizes: ["8.0", "8.5", "9.0"],
    price: "100.00",
    styleId: crypto.randomUUID(),
    color: ["Blanc Optique"],
    material: "Leather",
    details: [
      "10 High Top Sneaker",
      "Leather Upper",
      "Perforated and smooth leather panels",
      "Saint Laurent and SL/10H-debossed padded ankle",
      "SL/10H debossed at side",
      "Leather lining",
      "Leather Sole",
    ],
  },
  {
    key: crypto.randomUUID(),
    title: "Shoe F",
    sizes: ["8.0", "8.5", "9.0"],
    price: "100.00",
    styleId: crypto.randomUUID(),
    color: ["Blanc Optique"],
    material: "Leather",
    details: [
      "10 High Top Sneaker",
      "Leather Upper",
      "Perforated and smooth leather panels",
      "Saint Laurent and SL/10H-debossed padded ankle",
      "SL/10H debossed at side",
      "Leather lining",
      "Leather Sole",
    ],
  },
];

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
