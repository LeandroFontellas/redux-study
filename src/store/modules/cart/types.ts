// eslint-disable-next-line no-shadow
export enum ActionTypes {
  addProductToCartRequest= 'ADD_PRODUCT_TO_CART_REQUEST',
  addProductToCartSuccess= 'ADD_PRODUCT_TO_CART_SUCCESS',
  addProductToCartFailure= 'ADD_PRODUCT_TO_CART_FAILURE',
}

export interface IProduct{
  id: number;
  title: string;
  price: number;
}
export interface IStock{
  id: number;
  quantity: number;
}

export interface ICartItem{
  product: IProduct;
  quantity: number;
}
export interface ICartState{
  items: ICartItem[];
  failedStockCheck: number[];
}

export interface addProductToCartReturn {
  type: string;
  payload:{
    product: IProduct
  }
}

export interface addProductToCartReturnFailure {
  type: string;
  payload:{
    productId: number
  }
}
