import React, { useState, useEffect } from "react";

export const useOpen = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  return [isOpen, setIsOpen];
};

export const useMediaPredicate = () => {
  const [windowSize, setWindowSize] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};
