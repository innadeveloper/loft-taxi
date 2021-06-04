export const REGISTER = 'REGISTER'
export const REGISTER_SUCCESS = 'REGISTER'
export const REGISTER_ERROR = 'REGISTER'

export const register = (email, password, name, surname) => ({
    type: REGISTER,
    payload: {
        email,
        password, 
        name, 
        surname
    }
})

export const registerSuccess = (token) => ({ 
    type: REGISTER_SUCCESS,
    payload: token});

export const registerFailure = (error) => ({
    type: REGISTER_ERROR,
    payload: error
})

