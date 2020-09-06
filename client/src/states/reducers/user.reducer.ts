export const SET_USER = "SET_USER";
export const RESET_USER = "RESET_USER";

export interface ISetUserAction {
  type: typeof SET_USER | typeof RESET_USER;
  payload: IUser;
}

const initialState: IUser = null;

const userReducer = (
  state: IUser = initialState,
  action: ISetUserAction
): IUser => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    case RESET_USER:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
