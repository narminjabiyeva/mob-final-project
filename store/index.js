import {createStore, combineReducers} from "redux";
import {userCredentialReducer, MODULE_NAME as userCredentials} from "./userCredentials";
const rootReducer = combineReducers({
    [userCredentials] : userCredentialReducer,
});

const store = createStore(rootReducer);

export default store;
