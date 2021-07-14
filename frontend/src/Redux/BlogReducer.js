import axios from "axios";
import { ADDBLOG } from "./types";
const initialState = {
  list: [],
  delete: [],
};

export const blogReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADDBLOG":
      return {
        ...state,
        items: [action.payload],
      };

    case "DELETEBLOG":
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };

    case "EDITBLOG":
      return {
        ...state,
        items: [action.payload],
      };

    default:
      return state;
  }
};

const APIState = {
  fetchAPI: [],
};

export const fetchReducer = (state = APIState, action) => {
  switch (action.type) {
    case "FETCHBLOG":
      return {
        ...state,
        fetchAPI: action.payload,
      };
    default:
      return state;
  }
};
