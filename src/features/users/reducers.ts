import * as types from './types';

const initialState: types.UsersState = {
  data: [],
  isLoading: false,
  error: '',

};

const reducer = (state = initialState, action: types.UsersActionTypes) => {
  switch (action.type) {
    case types.GET_USERS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.GET_USERS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
      };
    }
    case types.GET_USERS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
};

export { reducer };
