import { PROPERTIES, SALE_TYPE } from "./propertiesConstants";

export const defaultFilters: IFilters = {
  filter1: SALE_TYPE,
  filter2: PROPERTIES,
  filter3: {
    ciudad: "",
  },
};
