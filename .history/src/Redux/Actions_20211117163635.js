import axios from "axios";
import * as types from "./ActionTypes";

export const loadUsersStart = () => ({
  type: types.LOAD_USERS_START,
});

export const loadUsersSuccess = (users) => ({
  type: types.LOAD_USERS_SUCCESS,
  payload: users,
});

export const loadUsersError = (error) => ({
  type: types.LOAD_USERS_ERROR,
  payload: error,
});
export const createUserStart = (user) => ({
  type: types.CREATE_USER_START,
  payload: user,
});

export const createUserSuccess = () => ({
  type: types.CREATE_USER_SUCCESS,
});

export const createUserError = (error) => ({
  type: types.CREATE_USER_ERROR,
  payload: error,
});

export const loadUser = () => {
  return function (dispatch) {
    dispatch(loadUsersStart());
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((response) => {
        dispatch(loadUsersSuccess(response.data));
      })
      .catch((error) => {
        dispatch(loadUsersError(error));
      });
  };
};
export const CreateUser = (user) => {
  return function (dispatch) {
    dispatch(createUserStart());
    axios
      .get(`${process.env.REACT_APP_API}`, user)
      .then((response) => {
        dispatch(createUserSuccess());
      })
      .catch((error) => {
        dispatch(createUserError(error.response.data));
      });
  };
};
