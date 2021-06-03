export const GET_ROUTE = 'GET_ROUTE'
export const GET_ROUTE_SUCCESS = 'GET_ROUTE_SUCCESS'
export const GET_ROUTE_FAILURE = 'GET_ROUTE_FAILURE'

export const getRoute = ({address1, address2}) => ({
    type: GET_ROUTE,
    payload: {
        address1,
        address2
    }
})
export const getRouteSuccess = (coordinates) => ({
    type: GET_ROUTE_SUCCESS,
    payload: coordinates
})
export const getRouteFailure = (error) => ({
    type: GET_ROUTE,
    payload: error
})