import { authWatcher, authenticateSaga } from '../store/sagas/authorizationSaga';
import { logIn, logInError, AUTHENTICATE }  from '../store/actions/auth';
import { takeEvery } from '@redux-saga/core/effects';
import * as authApi from '../store/api/auth';
import { runSaga } from '@redux-saga/core';

describe("authWatcher", () => {
    const genObject = authWatcher()

    it("should wait for every AUTHENTICATE action and call authenticateSaga", () => {
        expect(genObject.next().value).toEqual(
            takeEvery(AUTHENTICATE, authenticateSaga)
        )
    })
    it("should be done on next iteration", () => {
        expect(genObject.next().done).toBeTruthy()
    })
})

describe("authenticateSaga", () => {

    it("should call api and dispatch logIn action", async () => {
        const dummySuccessResponse = {success: true, token: "token"}

        const requestAuth = jest
            .spyOn(authApi, "serverLogIn")
            .mockImplementation(() => Promise.resolve(dummySuccessResponse))
        
        const dispatched = []

        await runSaga(
            {
                dispatch: (action) => dispatched.push(action)
            },
            authenticateSaga, 
            { payload : { email : "email", password : "password" } }
        )
        
        expect(requestAuth).toHaveBeenCalledTimes(1)
        expect(dispatched).toEqual([logIn("token")])
        requestAuth.mockClear()
    })

    it("should call api and dispatch logInError action", async () => {

        const dummySuccessResponse = {success: false, error: "error"}

        const requestAuth = jest
            .spyOn(authApi, "serverLogIn")
            .mockImplementation(() => Promise.resolve(dummySuccessResponse))
        
        const dispatched = []

        await runSaga(
            {
                dispatch: (action) => dispatched.push(action)
            },
            authenticateSaga, 
            { payload : { email : "wrongemail", password : "wrongpassword" } }
        )
        
        expect(requestAuth).toHaveBeenCalledTimes(1)
        expect(dispatched).toEqual([logInError("error")])
        requestAuth.mockClear()
    })
})