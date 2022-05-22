import * as types from './types';
import { UserItem } from './types';

const getUsers = (): types.UsersActionTypes => ({
  type: types.GET_USERS,
});

const getUsersSuccess = (
  data: UserItem[],
): types.UsersActionTypes => ({
  type: types.GET_USERS_SUCCESS,
  payload: {
    data,
  },
});

const getUsersError = (error: string): types.UsersActionTypes => ({
  type: types.GET_USERS_FAILURE,
  payload: {
    error,
  },
});

export {
  getUsers,
  getUsersSuccess,
  getUsersError,
};
