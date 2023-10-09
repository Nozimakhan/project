import { combineReducers } from "redux";
import { langReducer } from "./langReducer";
import { cartReducer } from "./cartReducer";
import { loginReducer } from "./loginReducer";

const rootReducer = combineReducers({
    language: langReducer,
    cart: cartReducer,
    login: loginReducer
})

export { rootReducer }