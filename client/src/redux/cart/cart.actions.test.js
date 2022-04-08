import * as TYPE from "./cart.type";
import {
  toggleCart,
  addCartItem,
  deleteCartItem,
  removeCartItem,
  clearAllCartItems
} from './cart.action';

describe('toggleCartHidden action', () => {
  it('should create the toggleHidden action', () => {
    
    expect(toggleCart().type).toEqual(TYPE.TOGGLE_CART_DROPDOWN);
  });
});

describe('addItem action', () => {
  it('should create the addItem action', () => {
    const mockItem = {
      id: 1
    };

    const action = addCartItem(mockItem);

    expect(action.type).toEqual(TYPE.ADD_CART_ITEMS);
    expect(action.payload).toEqual(mockItem);
  });
});

describe('removeItem action', () => {
  it('should create the removeItem action', () => {
    const mockItem = {
      id: 1
    };

    const action = removeCartItem(mockItem);

    expect(action.type).toEqual(TYPE.REMOVE_CART_ITEM);
    expect(action.payload).toEqual(mockItem);
  });
});

describe('clearItemFromCart action', () => {
  it('should create the clearItemFromCart action', () => {
    const mockItem = {
      id: 1
    };

    const action = deleteCartItem(mockItem);

    expect(action.type).toEqual(TYPE.DELETE_CART_ITEM);
    expect(action.payload).toEqual(mockItem);
  });
});

describe('clearCart action', () => {
  it('should create the clearCart action', () => {
    expect(clearAllCartItems().type).toEqual(TYPE.CLEAR_CART);
  });
});
