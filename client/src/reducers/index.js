import { combineReducers} from "redux";
import userReducer from './userReducer';
import listingReducer from './listingReducer';

module.exports = combineReducers({
    user: userReducer,
    listings: listingReducer
});