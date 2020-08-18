declare interface IFilter1 {
  venta: boolean;
  arriendo: boolean;
}

declare interface IFilter2 {
  casas: boolean;
  apartamentos: boolean;
  oficinas: boolean;
  bodegas: boolean;
  locales: boolean;
  fincas: boolean;
  otros: boolean;
}

declare interface IFilter3 {
  ciudad: string;
}

declare interface IFilters {
  filter1: IFilter1;
  filter2: IFilter2;
  filter3: IFilter3;
}
