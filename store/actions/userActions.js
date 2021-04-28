import * as actions from "./types";

export const getUser = () => async (dispatch) => {
  // const res = await axios.get("api/post");
  dispatch({
    type: actions.GET_User,
    payload: res.data,
  });
};
