import { combineReducers } from "redux";
import adventureReducer from "./adventureReducer";

const rootReducer = combineReducers({adventure: adventureReducer});

export default rootReducer;