import React from "react";
import styled from "styled-components";
import { Search } from "lucide-react";

const BurgerMenu = () => {
  return (
    <Wrapper>
      <Search color={"white"} />
    </Wrapper>
  );
};

export default BurgerMenu;

const Wrapper = styled.div`
  margin-left: auto;
`;
