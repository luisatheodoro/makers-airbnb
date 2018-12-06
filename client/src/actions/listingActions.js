import axios from 'axios';
import {GET_LISTINGS, ADD_LISTING, DELETE_LISTING, LISTINGS_LOADING} from './types';



export const setListingsLoading = () => {
    return {
        type: LISTINGS_LOADING
    };
};

export const getListings = () => dispatch => {
    dispatch(setListingsLoading());
    axios
        .get('/api/listings')
        .then(res =>
            dispatch({
                type: GET_LISTINGS,
                payload: res.data
            })
        )
};

export const addListing = (listing) => dispatch => {
    axios
        .post('/api/listings', listing)
        .then(res => dispatch({
            type: ADD_LISTING,
            payload: res.data
        }))
};

export const deleteListing = id => dispatch => {
    axios.delete(`/api/listings/${id}`).then(res =>
        dispatch({
            type: DELETE_LISTING,
            payload: id
        })
    );
};