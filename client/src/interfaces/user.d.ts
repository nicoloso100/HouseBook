declare type IUser = IUserInformation | null;

declare interface IUserInformation {
  _id: string;
  name: string;
  email: string;
}
