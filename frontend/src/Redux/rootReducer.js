import { blogReducers, fetchReducer, todoFetch } from "./BlogReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  blogReducers,
  apiData: fetchReducer,
});
export default rootReducer;
