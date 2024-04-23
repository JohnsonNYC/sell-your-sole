import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import HomePageContainer from "../container/HomePage.container";
import Head from "next/head";

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>Sell Your Sole</title>
        <meta name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <HomePageContainer />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
