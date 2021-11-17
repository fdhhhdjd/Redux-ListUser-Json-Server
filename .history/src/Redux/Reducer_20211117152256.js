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

    default:
      return state;
  }
};
export default usersReducer;
