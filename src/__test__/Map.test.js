import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { MapWithAuth } from '../pages/Map/Map';

jest.mock("mapbox-gl", () => ({
    GeolocateControl: jest.fn(),
    Map: jest.fn(() => ({
        addControl: jest.fn(),
        on: jest.fn(),
        remove: jest.fn(),
    })),
    NavigationControl: jest.fn(),
}));

describe("Map", ()=>{
    it("renders correctly for authorized user", () => {

        const mockStore = {
            getState: () => ({
                auth: {
                    token: "token"
                },
                card: {cardData: {}},
                address: {
                    data: {addresses: []},
                    isLoading: false
                },
                route: {route: [[1.1,2.2],[3.3,4.4]]},
            }),
            subscribe: () => {},
            dispatch: () => {}
        }

        const history = createMemoryHistory()

        const {container} = render(
            <Router history={ history }>
                <Provider store={ mockStore }>
                    <MapWithAuth />
                </Provider>
            </Router>
            
        );
        expect(container.innerHTML).toBeTruthy()

    })
    
})
