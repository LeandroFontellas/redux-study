import { AxiosResponse } from 'axios';
import {
  all, takeLatest, select, call, put,
} from 'redux-saga/effects';
import { IState } from '../..';
import { api } from '../../../services/api';
import { addProductToCartFailure, addProductToCartRequest, addProductToCartSuccess } from './actions';
import { ActionTypes, IStock } from './types';

type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>;

function* checkProductStock({ payload }: CheckProductStockRequest) {
  const { product } = payload;

  const currentQuantity: number = yield select((state):IState => state.cart.items.find(
    (item: { product: { id: number; }; }) => item.product.id === product.id,
  )?.quantity ?? 0);

  const availableStockResponse:AxiosResponse<IStock> = yield call(api.get, `stock/${product.id}`);

  if (availableStockResponse.data.quantity > currentQuantity) {
    yield put(addProductToCartSuccess(product));
  } else {
    yield put(addProductToCartFailure(product.id));
  }
}

export default all([
  takeLatest(ActionTypes.addProductToCartRequest, checkProductStock),
]);
