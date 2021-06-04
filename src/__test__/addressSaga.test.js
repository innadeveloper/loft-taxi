import { addressWatcher, getAddressSaga } from '../store/sagas/addressSaga';
import { GET_ADDRESS, getAddressSuccess } from '../store/actions/address';
import { takeEvery } from 'redux-saga/effects';
import * as addressApi from '../store/api/getAddress';
import { runSaga } from '@redux-saga/core';

describe('addressWatcher', () => {
  const genObject = addressWatcher();

  it('should wait for every GET_ADDRESS action and call getAddressSaga', () => {
    expect(genObject.next().value).toEqual(
      takeEvery(GET_ADDRESS, getAddressSaga)
    );
  });

  it('should be done on next iteration', () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe('getAddressSaga', () => {

  it('should call api and dispatch getAddressSuccess action', async () => {
    const dummySuccessResponse = {addresses: ["address1", "address2"]}

    const requestAddressList = jest
      .spyOn(addressApi, 'getAddressFromServer')
      .mockImplementation(() => Promise.resolve(dummySuccessResponse));

    const dispatched = [];

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      getAddressSaga,
      {}
    );

    expect(requestAddressList).toHaveBeenCalledTimes(1)
        expect(dispatched).toEqual([getAddressSuccess({addresses: ["address1", "address2"]})])
        requestAddressList.mockClear()
    })
})