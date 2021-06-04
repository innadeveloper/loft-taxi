import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Profile from '../pages/Profile/Profile';

jest.mock("../store/actions/card.js", () => ({ 
    getCard: () => ({}),
    changeCard: () => ({}),    
}));

describe("Profile", ()=>{
    it("renders correctly for authorized user", () => {
        const mockStore = {
            getState: () => ({
                auth: {isLoggedIn: true, token: "123"},
                card: {
                    data: {id: '1', cardNumber: '12345', expiryDate: '12/22', cardName: 'testname', cvc: '123'},
                    isLoading: false,
                    error: ""
                    }
            }),
            subscribe: () => {},
            dispatch: () => {}
        }

        const history = createMemoryHistory()

        const { container } = render(
            <Router history={ history }>
                <Provider store={ mockStore }>
                    <Profile />
                </Provider>
            </Router>
        );
        expect(container.innerHTML).toMatch("Профиль")
    })    
})