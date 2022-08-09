import { combineReducers } from "redux";
import { tokensetter } from "./token";
import {colorsetter} from "./color";
const reducers = combineReducers({
  thecolor:colorsetter,
  thetoken: tokensetter
});
export default reducers;
