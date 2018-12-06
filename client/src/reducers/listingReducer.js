import {GET_LISTINGS, ADD_LISTING, DELETE_LISTING, LISTING_LOADING} from '../actions/types';

const initialState = {
    listings: [],
    loading: false
};

module.exports = function (state = initialState, action) {
    switch(action.type) {
        case GET_LISTINGS:
            return {
                ...state,
                listings: action.payload,
                loading:false
            };
        case DELETE_LISTING:
            return {
                ...state,
                listings: state.listings.filter(listing => listing._id !== action.payload)
            };
        case ADD_LISTING:
            return {
                ...state,
                listings: [action.payload, ...state.listings]
            };
        case LISTING_LOADING:
            return {
                ...state,
                loading: true
            };

        default:
            return state;

    }
};