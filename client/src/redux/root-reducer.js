import { combineReducers } from "redux";
import coursesReducers from "./reducer";

const rootReducer = combineReducers({
  data: coursesReducers,
});

export default rootReducer;
