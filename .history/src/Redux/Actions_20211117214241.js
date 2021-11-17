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
export const createUserStart = () => ({
  type: types.CREATE_USER_START,
});

export const createUserSuccess = (user) => ({
  type: types.CREATE_USER_SUCCESS,
  payload: user,
});

export const createUserError = (error) => ({
  type: types.CREATE_USER_ERROR,
  payload: error,
});
export const deleteUserStart = (userId) => ({
  type: types.DELETE_USER_START,
  payload: userId,
});

export const deleteUserSuccess = (userId) => ({
  type: types.DELETE_USER_SUCCESS,
  payload: userId,
});

export const deleteUserError = (error) => ({
  type: types.DELETE_USER_ERROR,
  payload: error,
});
export const getUserStart = () => ({
  type: types.GET_USER_START,
});

export const getUserSuccess = (id) => ({
  type: types.GET_USER_SUCCESS,
  payload: id,
});

export const getUserError = (error) => ({
  type: types.GET_USER_ERROR,
  payload: error,
});
export const updateUserStart = (userInfo) => ({
  type: types.UPDATE_USER_START,
  payload: userInfo,
});

export const updateUserSuccess = () => ({
  type: types.UPDATE_USER_SUCCESS,
});

export const updateUserError = (error) => ({
  type: types.UPDATE_USER_ERROR,
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
      .post(`${process.env.REACT_APP_API}`, user)
      .then((response) => {
        console.log(response);
        dispatch(createUserSuccess(user));
        dispatch(loadUser());
      })
      .catch((error) => {
        dispatch(createUserError(error.response.data));
      });
  };
};
export const DeleteUser = (id) => {
  return function (dispatch) {
    dispatch(deleteUserStart());
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)

      .then((response) => {
        console.log(response);
        dispatch(deleteUserSuccess(id));
        dispatch(loadUser());
      })
      .catch((error) => {
        dispatch(deleteUserError(error));
      });
  };
};
export const getUser = (id) => {
  return function (dispatch) {
    dispatch(getUserStart());
    axios
      .get(`${process.env.REACT_APP_API}/${id}`)

      .then((response) => {
        dispatch(getUserSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getUserError(error));
      });
  };
};
export const updateUser = (user, id) => {
  return function (dispatch) {
    dispatch(updateUserStart());
    axios
      .put(`${process.env.REACT_APP_API}/${id}`, user)

      .then((response) => {
        dispatch(updateUserSuccess(response.data));
      })
      .catch((error) => {
        dispatch(updateUserError(error));
      });
  };
};
