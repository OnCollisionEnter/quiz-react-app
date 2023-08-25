import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../store/constants";
import axios from "axios";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  //   try {
  //     dispatch({ type: COURSES_REQUEST });
  const { data } = await axios.get(`/api/courses/${id}`);
  //bura yanlış, linkimiz bu değil tam olarak

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      title: data.title,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  //   } catch (error) {
  //     dispatch({
  //       type: COURSES_FAIL,
  //       payload:
  //         error.response && error.response.data.message
  //           ? error.response.data.message
  //           : error.message,
  //     });
  //   }
};
