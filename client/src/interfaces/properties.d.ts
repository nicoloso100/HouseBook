declare interface ITypes {
  label: string;
  value: string;
  selected?: boolean;
}

declare interface IProperties {
  casas: ITypes;
  apartamentos: ITypes;
  oficinas: ITypes;
  bodegas: ITypes;
  locales: ITypes;
  fincas: ITypes;
  otros: ITypes;
}

declare interface ISaleType {
  venta: ITypes;
  arriendo: ITypes;
}
