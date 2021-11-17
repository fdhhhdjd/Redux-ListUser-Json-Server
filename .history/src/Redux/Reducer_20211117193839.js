import * as Types from "./ActionTypes";
const initialState = {
  users: [],
  loading: false,
  error: null,
};
const usersReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.LOAD_USERS_START:
    case Types.CREATE_USER_START:
    case Types.DELETE_USER_START:
      return {
        ...state,
        loading: true,
      };
    case Types.LOAD_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: payload,
      };
    case Types.CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case Types.DELETE_USER_SUCCESS:

    case Types.LOAD_USERS_ERROR:
    case Types.CREATE_USER_ERROR:
    case Types.DELETE_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
export default usersReducer;
