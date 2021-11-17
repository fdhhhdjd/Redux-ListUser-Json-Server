import * as Types from "./ActionTypes";
const initialState = {
  users: [],
  user: [],
  loading: false,
  error: null,
};
const usersReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.LOAD_USERS_START:
    case Types.CREATE_USER_START:
    case Types.DELETE_USER_START:
    case Types.GET_USER_START:
    case Types.UPDATE_USER_START:
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
    case Types.DELETE_USER_SUCCESS:
    case Types.UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case Types.GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
      };
    case Types.LOAD_USERS_ERROR:
    case Types.CREATE_USER_ERROR:
    case Types.DELETE_USER_ERROR:
    case Types.GET_USER_ERROR:
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
