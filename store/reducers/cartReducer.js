import * as actions from "../actions/types";

const initialState = {
  cart: {},
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.CART_RETRIEVE_REQUEST:
      return {
        ...state,
        cart: {},
        loading: true,
      };

    case actions.CART_RETRIEVE_SUCCESS:
      return {
        ...state,
        cart: { data: action.payload },
        loading: false,
      };
    default:
      return state;
  }
}
