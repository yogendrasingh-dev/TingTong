import {USER_STATE_CHANGE} from '../types';

const initialState = {
  currentUser: null,
  loading: false,
  splashLoading: true,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_STATE_CHANGE:
      return {
        ...state,
        currentUser: action.currentUser,
        loading: action.loading,
        splashLoading: action.splashLoading,
      };
    default:
      return state;
  }
};
