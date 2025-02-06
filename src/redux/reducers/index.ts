import { combineReducers } from "redux";
import adventureReducer from "./adventureReducer";
import plotlinesReducer from "./plotlinesReducer";
import plotlineListReducer from "./plotlineListReducer";

const rootReducer = combineReducers({adventure: adventureReducer, plotlines: plotlinesReducer, plotlineList: plotlineListReducer});

export default rootReducer;