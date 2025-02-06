import { combineReducers } from "redux";
import adventureReducer from "./adventureReducer";
import plotlinesReducer from "./plotlinesReducer";
import plotlineListReducer from "./plotlineListReducer";
import charactersReducer from "./charactersReducer";
import characterListReducer from "./characterListReducer";

const rootReducer = combineReducers({ adventure: adventureReducer, plotlines: plotlinesReducer, characters: charactersReducer, plotlineList: plotlineListReducer, characterList: characterListReducer });

export default rootReducer;
