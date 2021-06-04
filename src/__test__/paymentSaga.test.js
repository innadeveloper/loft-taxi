import { getCardWatcher, loadCardSaga, saveCardWatcher, updateCardSaga } from '../store/sagas/paymentSaga';
import { GET_CARD, getCardSuccess, CHANGE_CARD, changeCardSuccess }  from '../store/actions/card';
import * as paymentGetApi from '../store/api/getCard';
import * as paymentUpdateApi from '../store/api/changeCard';
import { takeEvery } from '@redux-saga/core/effects';
import { runSaga } from '@redux-saga/core';

describe("getCardWatcher", () => {
    const genObject = getCardWatcher()

    it("should wait for every GET_CARD action and call loadCardSaga", () => {
        expect(genObject.next().value).toEqual(
            takeEvery(GET_CARD, loadCardSaga)
        )
    })
    it("should be done on next iteration", () => {
        expect(genObject.next().done).toBeTruthy()
    })
})

describe("loadCardSaga", () => {

    it("should call api and dispatch getCardSuccess action", async () => {
        const dummySuccessResponse = {
            cardName: "test test",
            cardNumber: "1111 2222 3333 4444",
            cvc: "123",
            expiryDate: "11/22",
            id: "1"
        }

        const requestCard = jest
            .spyOn(paymentGetApi, "getCardDataFromServer")
            .mockImplementation(() => Promise.resolve(dummySuccessResponse))
        
        const dispatched = []

        await runSaga(
            {
                dispatch: (action) => dispatched.push(action)
            },
            loadCardSaga,
            {payload : { token : "token"}}
        )
        
        expect(requestCard).toHaveBeenCalledTimes(1)
        expect(dispatched).toEqual([getCardSuccess({
            cardName: "test test",
            cardNumber: "1111 2222 3333 4444",
            cvc: "123",
            expiryDate: "11/22",
            id: "1"
        })])
        requestCard.mockClear()
    })
})

describe("saveCardWatcher", () => {
    const genObject = saveCardWatcher()

    it("should wait for every CHANGE_CARD action and call updateCardSaga", () => {
        expect(genObject.next().value).toEqual(
            takeEvery(CHANGE_CARD, updateCardSaga)
        )
    })
    it("should be done on next iteration", () => {
        expect(genObject.next().done).toBeTruthy()
    })
})

describe("updateCardSaga", () => {

    it("should call api and dispatch changeCardSuccess action", async () => {
        const dummySuccessResponse = {
            success: true
        }

        const requestCardChange = jest
            .spyOn(paymentUpdateApi, "changeCardDataToServer")
            .mockImplementation(() => Promise.resolve(dummySuccessResponse))
        
        const dispatched = []

        await runSaga(
            {
                dispatch: (action) => dispatched.push(action)
            },
            updateCardSaga,
            {payload : {
                cardName: "test test",
                cardNumber: "1111 2222 3333 4444",
                cvc: "123",
                expiryDate: "11/22",
                id: "1"
                }
            }
        )
        
        expect(requestCardChange).toHaveBeenCalledTimes(1)
        expect(dispatched).toEqual([changeCardSuccess({
            cardName: "test test",
            cardNumber: "1111 2222 3333 4444",
            cvc: "123",
            expiryDate: "11/22",
            id: "1"
        })])
        requestCardChange.mockClear()
    })
})