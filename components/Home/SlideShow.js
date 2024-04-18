import React from "react";
import styled from "styled-components";

const FallOff = "/static/FallOffKicks.jpeg";
const HangOff = "/static/HangOffKicks.jpeg";
const YellowOffWhite = "/static/YellowOffWhite.jpeg";

const SlideShow = () => {
  return (
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
  );
};

export default SlideShow;

const SliderContainer = styled.div`
  display: flex;
  max-width: 100%;
  width: 100%;
  margin-top: 10px;
  overflow-y: auto;

  & > div {
    &:first-of-type {
      margin: 0 5px 0 0;
    }
    margin: 0 10px;
  }
`;

const SliderCell = styled.div`
  max-width: 385px;
  min-width: 385px;
  width: 100%;
  height: 500px;
  overflow-y: hidden;
  overflow-x: auto;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
