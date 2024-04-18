import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import HomePageContainer from "../container/HomePage.container";

export default function Home() {
  return (
    <Wrapper>
      <Header />
      <HomePageContainer />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
