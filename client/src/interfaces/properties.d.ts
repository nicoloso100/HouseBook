declare interface ITypes {
  label: string;
  value: string;
  selected?: boolean;
}

declare interface IProperties {
  casa: ITypes;
  apartamento: ITypes;
  oficina: ITypes;
  bodega: ITypes;
  local: ITypes;
  finca: ITypes;
  otro: ITypes;
}

declare interface ISaleType {
  venta: ITypes;
  arriendo: ITypes;
}
