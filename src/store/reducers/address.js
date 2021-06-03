import {GET_ADDRESS, GET_ADDRESS_SUCCESS, GET_ADDRESS_FAILURE} from '../actions/address'

const initialState = {
    isLoading: false,
    data: {addresses:[]},
    error: ''
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ADDRESS: {
            return{...state, isLoading: true, error: ''}
        }
        case GET_ADDRESS_SUCCESS: {
            return{...state, isLoading: false, data: action.payload, error: ''}
        }
        case GET_ADDRESS_FAILURE: {
            return{...state, isLoading: false, error: action.payload}
        }
        default:
            return state
    }
}