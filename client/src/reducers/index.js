import { combineReducers} from "redux";
import userReducer from './userReducer';

module.exports = combineReducers({
    user: userReducer
});