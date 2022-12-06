import { combineReducers } from "redux";
import authReducer from "./auth";
import tournamentReducer from "./tournaments";

const rootReducer = combineReducers({ 
    auth: authReducer,
    tournaments: tournamentReducer,
});

export default rootReducer;
