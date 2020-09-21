import produce from "immer";
import {combineReducers} from "redux-immer";
import documentReducer from "./reducer";

const rootReducer = combineReducers(produce, {
    document: documentReducer,
});

export default rootReducer;
