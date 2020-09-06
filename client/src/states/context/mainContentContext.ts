import { createContext } from "react";

export const defaultMainContentContext = {
  isContact: false,
  isShow: false,
  isEdit: false,
  isRemove: false,
};

const MainContentContext = createContext(defaultMainContentContext);

export default MainContentContext;
