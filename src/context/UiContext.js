import { createContext, useState } from "react";

export const UiContext = createContext();

export const UiProvider = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const [openSearch, setOpenSearch] = useState(false);

  return (
    <UiContext.Provider
      value={{ openDrawer, setOpenDrawer, openSearch, setOpenSearch }}
    >
      {children}
    </UiContext.Provider>
  );
};
