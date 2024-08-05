import React, { createContext, useState } from "react";

const UnifiedCheckoutContext = createContext();

export const UnifiedCheckoutProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartData, setCartData] = useState([]);
  console.log({ isOpen });
  const stateStore = { isOpen, setIsOpen, cartData, setCartData };

  return (
    <UnifiedCheckoutContext.Provider value={stateStore}>
      {children}
    </UnifiedCheckoutContext.Provider>
  );
};

export default UnifiedCheckoutContext;
