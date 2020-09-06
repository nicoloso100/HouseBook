declare interface IFilter1 extends ISaleType {}

declare interface IFilter2 extends IProperties {}

declare interface IFilter3 {
  ciudad: string;
}

declare interface IFilters {
  filter1: IFilter1;
  filter2: IFilter2;
  filter3: IFilter3;
}
