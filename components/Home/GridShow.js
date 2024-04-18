import React from "react";
import styled from "styled-components";

const BlackKicks = "/static/BlackKicks.jpeg";
const LowTopKicks = "/static/LowTopKicks.jpeg";
const SplashKicks = "/static/SplashKicks.jpeg";

const GridShow = () => {
  return (
    <GridContainer>
      <LeftImageContainer>
        <Image src={SplashKicks} alt="Jordan Reds" />
      </LeftImageContainer>

      <RightImagesContainer>
        <ImageContainer>
          <Image src={BlackKicks} alt="Jordan Reds" />
        </ImageContainer>

        <ImageContainer>
          <Image src={LowTopKicks} alt="Jordan Reds" />
        </ImageContainer>
      </RightImagesContainer>
    </GridContainer>
  );
};

export default GridShow;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageContainer = styled.div`
  height: 50%;
  overflow: hidden;
`;

const RightImagesContainer = styled.div`
  width: 50%;
  overflow: hidden;

  & > div {
    &:first-of-type {
      margin-bottom: 10px;
    }
  }
`;

const LeftImageContainer = styled.div`
  width: 50%;
  margin-right: 10px;
`;

const GridContainer = styled.div`
  display: flex;
  margin-top: 10px;
  max-height: 674px;
`;
