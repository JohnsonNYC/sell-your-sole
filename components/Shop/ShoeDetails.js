import React from "react";
import styled from "styled-components";
import Text from "../DesignKit/Text";

const ShoeDetails = ({ selectedShoeData }) => {
  console.log({ selectedShoeData });
  const { title, sizes, styledId, price, material, details, color } =
    selectedShoeData || {};

  return (
    <Wrapper>
      <Image />
      <DetailsContainer>
        <Text>{title}</Text>
        {sizes && sizes.length ? sizes.join(" / ") : null}
        {details && details.length ? (
          <ul>
            {details.map((text) => (
              <li>
                <Text>{text}</Text>
              </li>
            ))}
          </ul>
        ) : null}
      </DetailsContainer>
    </Wrapper>
  );
};

export default ShoeDetails;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.div`
  max-width: 495px;
  width: 100%;
  height: 495px;
  border: 1px solid red;
`;
