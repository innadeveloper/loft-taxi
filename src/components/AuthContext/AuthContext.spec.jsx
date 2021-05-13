import React from 'react';
import {AuthProvider, AuthContext} from '../AuthContext/AuthContext';
import {render} from '@testing-library/react';
import {act} from 'react-dom/test-utils';

describe('AuthContext', () => {
    describe('#login', () => {
        it('sets "isLoggedIn" to true', () => {
            let isLoggedIn;
            let logIn;

            render(
                <AuthProvider>
                    <AuthContext.Consumer>
                        {(value) => {
                            isLoggedIn = value.isLoggedIn;
                            logIn = value.logIn;
                            return null;
                        }}
                    </AuthContext.Consumer>
                </AuthProvider>
            )

            expect(isLoggedIn).toBe(false)
            act(() => {
                logIn('test@test.com', '123123')
            })
            expect(isLoggedIn).toBe(true)
        })
    })

    describe('#logout', () => {
        it('sets "isLoggedIn" to false', () => {
            let isLoggedIn;
            let logOut;
            let logIn;

            render(
                <AuthProvider>
                    <AuthContext.Consumer>
                        {(value) => {
                            isLoggedIn = value.isLoggedIn;
                            logOut = value.logOut;
                            logIn = value.logIn;
                            return null;
                        }}
                    </AuthContext.Consumer>
                </AuthProvider>
            )

            expect(isLoggedIn).toBe(false)
            act(() => {
                logIn('test@test.com', '123123')
            })
            expect(isLoggedIn).toBe(true)
            act(() => {
                logOut()
            })
            expect(isLoggedIn).toBe(false)
        })
    })
})