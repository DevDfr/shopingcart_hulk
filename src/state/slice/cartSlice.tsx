import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IOrder, IProduct } from '../../interfaces';
import { RootState, AppThunk } from '../../state/store';

export interface CartState {
  products: IProduct[]
  order: IOrder[]
  totalOrder: number
}

const initialState: CartState = {
    products: [],
    order: [],
    totalOrder: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<IProduct>) => {     
        state.products.push(action.payload)
        state.order.push({ id: action.payload.id, units: 1 })
    },
    removeProductCart: (state, action: PayloadAction<IProduct>) => {     
      state.products = state.products.filter(x => x.id !== action.payload.id)
      state.order = state.order.filter(x => x.id !== action.payload.id)
    },
    updateProductsCartOrder: (state, action: PayloadAction<IOrder[]>) => {
      state.order = action.payload
    },
    incrementTotalOrder: (state, action: PayloadAction<number>) => {
      state.totalOrder += action.payload
    },
    decrementTotalOrder: (state, action: PayloadAction<number>) => {
      state.totalOrder -= action.payload
    },
    emptyCart: (state) => {
      state.products = []
      state.order = []
      state.totalOrder = 0
    }
  }
});

export const addProductIfNotExists = (product: IProduct): AppThunk => (
    dispatch,
    getState
  ) => {
    const currentProducts = getCartProducts(getState());
    const newProduct = currentProducts.filter(x => x.id === product.id)
    if (newProduct.length === 0) {
      dispatch(addProductToCart(product));
      dispatch(incrementTotalOrder(product.price_real))
    }
  };

  export const changeProductUnits = (product: IProduct, operation: string, amount: number): AppThunk => (
    dispatch,
    getState
  ) => {

    const currentProductsOrder = getCartOrder(getState());

    const singleProductOrder = currentProductsOrder.filter(x => x.id === product.id)[0]
    const filterProductsOrder = currentProductsOrder.filter(x => x.id !== product.id)

    if(operation === '+') dispatch(incrementTotalOrder(product.price_real));

    if(operation === '-') dispatch(decrementTotalOrder(product.price_real));

    const newProductOrder = {
      ...singleProductOrder,
      units: amount
    }

    dispatch(updateProductsCartOrder([...filterProductsOrder, newProductOrder]))

  };


  export const removeProductFromCart = (product: IProduct, amount: number): AppThunk => (
    dispatch,
    getState
  ) => {

    const productValue = product.price_real * amount

    dispatch(decrementTotalOrder(productValue))
    dispatch(removeProductCart(product))

  };

export const { 
  addProductToCart, 
  incrementTotalOrder, 
  decrementTotalOrder, 
  updateProductsCartOrder, 
  removeProductCart, 
  emptyCart 
} = cartSlice.actions;

export const getCartProducts = (state: RootState) => state.cart.products;
export const getCartOrder = (state: RootState) => state.cart.order;
export const getCartTotalOrder = (state: RootState) => state.cart.totalOrder;

export default cartSlice.reducer;
