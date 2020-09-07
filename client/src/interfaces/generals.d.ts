declare interface BigObject<T> {
  [index: string]: T;
}

declare interface IAPIResult<T> {
  ok: boolean;
  result: T;
}

declare interface ICity {
  region: string;
  codigoDaneDepartamento: number;
  departamento: string;
  codigoDaneMunicipio: number;
  municipio: string;
}
