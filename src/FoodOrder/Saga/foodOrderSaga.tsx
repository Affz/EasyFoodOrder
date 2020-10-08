import { call, put } from 'redux-saga/effects';
import * as constants from '../Actions/foodOrderActions';
import { FoodDetailsActions } from '../Actions/foodOrderActions';
import ExternalApi from '../../externalApi';

export function* getOrderDetails(actions: FoodDetailsActions) {
    try {
        var apiParameters = {
            url: 'https://cors-anywhere.herokuapp.com/https://s3-ap-southeast-1.amazonaws.com/he-public-data/smartQFood8bef5a2.json',
            method: 'GET'
        };
        let response = yield call(ExternalApi.Api, apiParameters);
        yield put({ type: constants.FOODORDER_SUCCESS, payload: response.data });
    } catch (e) {
        var snackbarState = {
            display: true,
            prompt: 'Oops!! Something went wrong'
        };
        yield put({ type: constants.FOODORDER_FAILURE, payload: 'Nothing found' });
    }
}