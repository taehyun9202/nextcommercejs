import * as actions from "../actions/types";

const initialState = {
  cart: { loading: true },
  order: null,
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.GET_USER:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
}
