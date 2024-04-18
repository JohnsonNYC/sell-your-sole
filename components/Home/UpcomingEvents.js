import React from "react";
import styled from "styled-components";
import Text from "../DesignKit/Text";

const UpcomingEvents = () => {
  return (
    <Wrapper>
      <EventTile>
        {/* <Image /> */}
        <Description>
          <Text font="roboto" size="lg">
            SYS in NYC
          </Text>
          <Text font="roboto" size="sm">
            March 20th 2024
          </Text>
          <Text font="roboto" size="sm">
            12:00pm - 7:00pm
          </Text>
        </Description>
      </EventTile>

      <EventTile>
        {/* <Image /> */}
        <Description>
          <Text font="roboto" size="lg">
            SYS in Colorado
          </Text>
          <Text font="roboto" size="sm">
            October 20th 2024
          </Text>
          <Text font="roboto" size="sm">
            12:00pm - 7:00pm
          </Text>
        </Description>
      </EventTile>
    </Wrapper>
  );
};

export default UpcomingEvents;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;
const EventTile = styled.div`
  height: 280px;
  max-width: 560px;
  width: 100%;
  position: relative;
  background: black;
`;

const Description = styled.div`
  padding: 10px;
  background: #c4c4c4;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
