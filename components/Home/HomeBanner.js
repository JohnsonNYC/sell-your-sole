import React from "react";
import styled from "styled-components";
// Components
import Text from "../DesignKit/Text";
// Utils
import { formattedDate } from "../../utils/dates.utils";

const RedJordans = "/static/JordanOnes.jpeg";
const today = new Date();

const HomeBanner = () => {
  return (
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
  );
};

export default HomeBanner;

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

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
