import { all, takeLatest } from 'redux-saga/effects';
import * as constants from '../Actions/foodOrderActions';
import { getOrderDetails } from './foodOrderSaga';

export default function* FoodOrderRootSaga() {
    yield all([
        takeLatest(constants.FOODORDER, getOrderDetails)
    ]);

}