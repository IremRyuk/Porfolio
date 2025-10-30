import { combineReducers } from "redux";
import { FlagRed } from "./Reducer/FlagRed";
export const AllReducer = combineReducers({
    flag:FlagRed
})