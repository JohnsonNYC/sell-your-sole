import React, { createContext, useState } from "react";

const UnifiedCheckoutContext = createContext();

export const UnifiedCheckoutProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <UnifiedCheckoutContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </UnifiedCheckoutContext.Provider>
  );
};

export default UnifiedCheckoutContext;
