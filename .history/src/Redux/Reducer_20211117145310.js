import * as Types from "./ActionTypes";
const initialState = {
  users: [],
  loading: false,
  error: null,
};
const usersReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.ADD_TODO:
      return {
        ...state,
      };

    case y:
      break;
    default:
  }
};
