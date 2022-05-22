import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from './types';
import { GET_USERS } from './types';
import { GET_USERS_API } from '../../api/api';
import * as actions from './actions';

function* getUsers() {
  try {
    const response: types.UsersAPIResponse = yield call(GET_USERS_API);

    if (response.results.length > 0) {
      yield put(actions.getUsersSuccess(response.results));
    } else {
      yield put(actions.getUsersError('Error while getting users'));
    }
  } catch (error) {
    console.error(error);
  }
}

function* handler() {
  yield takeLatest(GET_USERS, getUsers);
}

export { handler };
