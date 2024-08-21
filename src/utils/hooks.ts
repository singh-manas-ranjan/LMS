import { TUser } from "@/app/ui/navbar/Navbar";

export type DataState = {
  data: TUser;
  loading: boolean;
  error: boolean;
};

export type DataAction =
  | { type: "FETCH_REQUEST" }
  | { type: "FETCH_SUCCESS"; payload: TUser }
  | { type: "FETCH_FAILURE" }
  | { type: "UPDATE_USER"; payload: TUser };

export const initialState: DataState = {
  data: {} as TUser,
  loading: true,
  error: false,
};

export const userDataReducer = (
  state: DataState,
  action: DataAction
): DataState => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, error: false };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "FETCH_FAILURE":
      return { ...state, loading: false, error: true };
    case "UPDATE_USER":
      return { ...state, loading: false, data: action.payload };
    default:
      return state;
  }
};
