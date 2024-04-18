import React from "react";
import styled from "styled-components";
import HomeBanner from "../components/Home/HomeBanner";
import GridShow from "../components/Home/GridShow";
import SlideShow from "../components/Home/SlideShow";
import UpcomingEvents from "../components/Home/UpcomingEvents";

const HomePageContainer = () => {
  return (
    <Wrapper>
      <HomeBanner />
      <GridShow />
      <SlideShow />
      <UpcomingEvents />
    </Wrapper>
  );
};

export default HomePageContainer;

const Wrapper = styled.div``;
