export const GET_ADDRESS = 'GET_ADDRESS'
export const GET_ADDRESS_SUCCESS = 'GET_ADDRESS_SUCCESS'
export const GET_ADDRESS_FAILURE = 'GET_ADDRESS_FAILURE'

export const getAddress = () => ({
    type: GET_ADDRESS
})

export const getAddressSuccess = ({addresses}) => ({
    type: GET_ADDRESS_SUCCESS,
    payload: {addresses}
})

export const getAddressFailure = (error) => ({
    type: GET_ADDRESS_FAILURE,
    payload: error
})