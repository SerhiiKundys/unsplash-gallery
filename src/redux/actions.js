import {
  APP_FIRST_LOAD,
  APP_SET_CURRENT_PAGE,
  POST_FETCH_DATA_FAILURE,
  POST_FETCH_DATA_START,
  POST_FETCH_DATA_SUCCESS,
} from "./types";
import { fetchNewData } from "../api/api";

export const fetchData = (newPage) => {
  return async (dispatch) => {
    dispatch(startFetchingData());

    try {
      const response = await fetchNewData(newPage);
      const data = await response.json();

      let posts = data.map((imgData) => ({
        username: imgData.user.username,
        miniImage: imgData.urls.small,
        fullImage: imgData.urls.full,
        likes: imgData.likes,
        width: imgData.width,
        height: imgData.height,
      }));

      dispatch(setCurrentPage(newPage));
      dispatch(dataFetchSuccesfull(posts));
    } catch (error) {
      console.log(error);
      dispatch(dataFetchFailed(error));
    }
  };
};
export const firstLoad = () => {
  return { type: APP_FIRST_LOAD };
};

export const startFetchingData = () => {
  return { type: POST_FETCH_DATA_START };
};
export const dataFetchSuccesfull = (posts) => {
  return {
    type: POST_FETCH_DATA_SUCCESS,
    posts,
  };
};
export const dataFetchFailed = (error) => {
  return { type: POST_FETCH_DATA_FAILURE, error };
};

export const setCurrentPage = (page) => {
  return {
    type: APP_SET_CURRENT_PAGE,
    page,
  };
};
