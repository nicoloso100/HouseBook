import { createContext } from "react";

export const defaultCreatePostContext = {
  isCreate: false,
  isEdit: false,
};

const CreatePostContext = createContext(defaultCreatePostContext);

export default CreatePostContext;
