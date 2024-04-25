import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { X } from "lucide-react";

const ContentDrawer = ({ children, depVar, setDepVar }) => {
  const [height, setHeight] = useState("0%"); // For Animation Control
  const [showDrawer, setShowDrawer] = useState(false); // For DOM Control

  const drawerRef = useRef();

  useEffect(() => {
    if (depVar) {
      setShowDrawer(true);
      setTimeout(() => {
        setHeight("80%");
      }, 10);
    } else {
      setHeight("0%");
      setTimeout(() => {
        setShowDrawer(false);
      }, 300);
    }
  }, [depVar]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setDepVar(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return showDrawer ? (
    <Container>
      <DrawerContainer ref={drawerRef} height={height}>
        <X onClick={() => setDepVar(null)} />
        {children}
      </DrawerContainer>
    </Container>
  ) : null;
};

export default ContentDrawer;

const DrawerContainer = styled.div`
  width: 100%;
  height: ${(props) => props.height};

  position: fixed;
  bottom: 0;
  overflow: hidden;

  background: white;
  border-radius: 19px;
  padding: 10px;

  transition: height 0.2s ease-in;
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
`;
