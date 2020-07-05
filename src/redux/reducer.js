import {
  APP_FIRST_LOAD,
  APP_SET_CURRENT_PAGE,
  POST_FETCH_DATA_FAILURE,
  POST_FETCH_DATA_START,
  POST_FETCH_DATA_SUCCESS,
} from "./types";

let initialState = {
  page: 0,
  posts: [],
  firstLoad: true,
  isFetching: false,
  error: null,
};

export default reducers = (state = initialState, action) => {
  switch (action.type) {
    case APP_FIRST_LOAD:
      return Object.assign({}, state, { firstLoad: false });
    case APP_SET_CURRENT_PAGE:
      return Object.assign({}, state, { page: action.page });
    case POST_FETCH_DATA_START:
      return Object.assign({}, state, { isFetching: true });
    case POST_FETCH_DATA_SUCCESS:
      return Object.assign({}, state, {
        posts: action.posts,
        isFetching: false,
      });
    case POST_FETCH_DATA_FAILURE:
      return Object.assign({}, state, {
        error: !!action.error,
        isFetching: false,
      });
    default:
      return state;
  }
};
