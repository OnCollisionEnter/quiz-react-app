//2
//CREATE STORE
import quizReducer from "../reducers/quiz";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { coursesReducer, courseDetailReducer } from "../reducers/courses";
import { cartReducer } from "../reducers/cart";
import { composeWithDevTools } from "redux-devtools-extension";
import { json } from "react-router-dom";

export default () => {
  // const store = createStore(quizReducer);

  const initialState = {};

  const reducer = combineReducers({
    courseStore: coursesReducer,
    courseDetailStore: courseDetailReducer,
    quiz: quizReducer,
    cart: cartReducer,
  });

  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
};
