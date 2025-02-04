import { combineReducers } from "redux";
import adventureReducer from "./adventureReducer";
import plotlinesReducer from "./plotlinesReducer";

const rootReducer = combineReducers({adventure: adventureReducer, plotlines: plotlinesReducer});

export default rootReducer;