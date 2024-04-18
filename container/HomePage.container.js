import React from "react";
import styled from "styled-components";
// Components
import Text from "../components/DesignKit/Text";
// Utils
import { formattedDate } from "../utils/dates.utils";

const RedJordans = "/static/JordanOnes.jpeg";
const BlackKicks = "/static/BlackKicks.jpeg";
const LowTopKicks = "/static/LowTopKicks.jpeg";
const SplashKicks = "/static/SplashKicks.jpeg";
const FallOff = "/static/FallOffKicks.jpeg";
const HangOff = "/static/HangOffKicks.jpeg";
const YellowOffWhite = "/static/YellowOffWhite.jpeg";

const today = new Date();

const HomePageContainer = () => {
  return (
    <Wrapper>
      <BannerContainer>
        <Text weight="semibold">Upcoming Events</Text>
        <Image src={RedJordans} alt="Jordan Reds" />
        <Tag>
          <Text weight="semibold" color="white">
            Sell Your Sole
          </Text>
          <Text color="white" size="xs">
            {formattedDate(today)}
          </Text>
        </Tag>
      </BannerContainer>
      <GridContainer>
        <LeftImageContainer>
          <Image src={SplashKicks} alt="Jordan Reds" />
        </LeftImageContainer>

        <RightImagesContainer>
          <Image src={BlackKicks} alt="Jordan Reds" />
          <Image src={LowTopKicks} alt="Jordan Reds" />
        </RightImagesContainer>
      </GridContainer>

      <SliderContainer>
        <SliderCell>
          <Image src={FallOff} />
        </SliderCell>
        <SliderCell>
          <Image src={HangOff} />
        </SliderCell>
        <SliderCell>
          <Image src={YellowOffWhite} />
        </SliderCell>
      </SliderContainer>
    </Wrapper>
  );
};

export default HomePageContainer;

const SliderContainer = styled.div`
  display: flex;
`;

const SliderCell = styled.div`
  max-width: 385px;
  width: 100%;
  height: 500px;
`;

const RightImagesContainer = styled.div`
  width: 50%;

  & > img {
    height: 50%;

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
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Wrapper = styled.div``;

const BannerContainer = styled.div`
  width: 100%;
  height: 500px;
  position: relative;

  & > div:first-of-type {
    width: fit-content;
    position: absolute;
    top: 2rem;
    left: 4rem;
    text-transform: uppercase;
  }
`;

const Tag = styled.div`
  width: fit-content;
  position: absolute;
  left: 4rem;
  bottom: 2rem;
`;
