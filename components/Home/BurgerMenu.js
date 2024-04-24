import React from "react";
import styled from "styled-components";
import { Menu } from "lucide-react";

const BurgerMenu = () => {
  return (
    <Wrapper>
      <Menu color={"white"} />
    </Wrapper>
  );
};

export default BurgerMenu;

const Wrapper = styled.div`
  margin-left: auto;
`;
