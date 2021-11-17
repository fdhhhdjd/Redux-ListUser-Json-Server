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

    default:
      return state;
  }
};
export default usersReducer;
