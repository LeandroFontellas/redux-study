import {
  ActionTypes, addProductToCartReturn, addProductToCartReturnFailure, IProduct,
} from './types';

export const addProductToCartRequest = (product: IProduct):addProductToCartReturn => ({
  type: ActionTypes.addProductToCartRequest,
  payload: {
    product,
  },
});

export const addProductToCartSuccess = (product: IProduct):addProductToCartReturn => ({
  type: ActionTypes.addProductToCartSuccess,
  payload: {
    product,
  },
});

export const addProductToCartFailure = (productId: number):addProductToCartReturnFailure => ({
  type: ActionTypes.addProductToCartFailure,
  payload: {
    productId,
  },
});
