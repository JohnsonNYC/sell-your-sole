import React, { useState, useContext } from "react";
import styled from "styled-components";
import Text from "../DesignKit/Text";
import UnifiedCheckoutContext from "../Context/UnifiedCheckoutContext";
import Image from "next/image";

const ShoeDetails = ({ shoeData }) => {
  const { cartData, setCartData } = useContext(UnifiedCheckoutContext);
  const { title, sizes, imageUrl, details } = shoeData || {};

  const [success, setSuccess] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");

  const addToCart = () => {
    let shoeDataCopy = { ...shoeData };
    delete shoeDataCopy.sizes;
    shoeDataCopy["size"] = selectedSize;

    setCartData([...cartData, shoeDataCopy]);

    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
      setSelectedSize("");
    }, 3000);
  };

  return (
    <Wrapper>
      <ImageContainer>
        <Image
          src={imageUrl}
          alt={title}
          fill={true}
          style={{ objectFit: "cover" }}
          sizes={"(max-width: 300px) 100%"}
          loading="lazy"
        />
      </ImageContainer>
      <DetailsContainer>
        <Title size="lg" font="roboto">
          {title}
        </Title>
        <SizeContainer>
          {sizes && sizes.length
            ? sizes.map((size, i) => (
                <ButtonPill
                  key={`size_${i}`}
                  font="roboto"
                  size="lg"
                  color={size == selectedSize ? "black" : "grey"}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </ButtonPill>
              ))
            : null}
        </SizeContainer>

        <Button onClick={addToCart} disabled={!selectedSize || success}>
          {success ? `ADDED TO CART` : `$100.00 / ADD TO CART`}
        </Button>

        {details && details.length ? (
          <ListContainer>
            <Text font="roboto" weight="medium">
              DETAILS
            </Text>
            {details.map((text, i) => (
              <li key={`detail_${i}`}>
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

const SizeContainer = styled.div`
  display: flex;
  & > button {
    margin-right: 10px;
  }
`;

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

  &:enabled:hover {
    border: 1px solid #8373dc;
    background: #8373dc;
    cursor: pointer;
  }
`;

const ButtonPill = styled.button.attrs((props) => ({
  style: {
    color: props.color,
    border: `1px solid ${props.color}`,
  },
}))`
  border-radius: 10px;
  width: fit-content;
  height: auto;
  background: none;
  font-size: 20px;

  &:hover {
    cursor: pointer;
    color: black;
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

const ImageContainer = styled.div`
  max-width: 495px;
  width: 100%;
  height: 495px;
  position: relative;
`;
