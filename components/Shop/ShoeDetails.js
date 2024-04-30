import React from "react";
import styled from "styled-components";
import Text from "../DesignKit/Text";

const ShoeDetails = ({ selectedShoeData }) => {
  const { title, sizes, styledId, price, material, details, color } =
    selectedShoeData || {};

  return (
    <Wrapper>
      <Image />
      <DetailsContainer>
        <Title size="lg" font="roboto">
          {title}
        </Title>
        {sizes && sizes.length ? (
          <Text font="roboto" size="lg">
            {sizes.join(" / ")}
          </Text>
        ) : null}

        <Button>$100.00 / ADD TO CART</Button>

        {details && details.length ? (
          <ListContainer>
            <Text font="roboto" weight="medium">
              DETAILS
            </Text>
            {details.map((text) => (
              <li>
                <Text font="roboto" weight="medium">
                  {text}
                </Text>
              </li>
            ))}
          </ListContainer>
        ) : null}

        <Text font="roboto" weight="medium">
          Style: sl418026-04g80-9043
        </Text>
        <Text font="roboto" weight="medium">
          Color: Blanc Optqiue
        </Text>
        <Text font="roboto" weight="medium">
          Material: Leather
        </Text>
      </DetailsContainer>
    </Wrapper>
  );
};

export default ShoeDetails;

const Button = styled.button`
  border-radius: 20px;
  padding: 10px;
  width: fit-content;
  border: 1px solid grey;
  font-size: 12px;
  background: grey;
  color: white;
  margin-top: 20px;
  margin-bottom: 10px;

  &:hover {
    border: 1px solid #8373dc;
    background: #8373dc;
  }
`;

const ListContainer = styled.ul`
  padding-inline-start: 0px;
  & > li {
    margin: 5px 0;
    list-style-type: none;
  }
`;
const Title = styled(Text)`
  font-size: 48px;
`;
const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
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
  background: purple;
`;
