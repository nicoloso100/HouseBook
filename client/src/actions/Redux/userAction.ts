import {
  ISetUserAction,
  SET_USER,
  RESET_USER,
} from "states/reducers/user.reducer";

export const setUser = (user: IUser): ISetUserAction => ({
  type: SET_USER,
  payload: user,
});

export const resetUser = (): ISetUserAction => ({
  type: RESET_USER,
  payload: null,
});
