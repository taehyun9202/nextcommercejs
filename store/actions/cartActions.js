import getCommerce from "../../utils/commerce";
import * as actions from "./types";

const commercePublicKey = process.env.COMMERCE_PUBLIC_KEY;

export const fetchCart = () => async (dispatch) => {
  const commerce = getCommerce();
  dispatch({
    type: actions.CART_RETRIEVE_REQUEST,
  });
  const cartData = await commerce.cart.retrieve();
  dispatch({
    type: actions.CART_RETRIEVE_SUCCESS,
    payload: cartData,
  });
};
