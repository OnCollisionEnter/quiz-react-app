//2
//CREATE STORE
import quizReducer from "../reducers/quiz";
import { createStore } from "redux";

export default () => {
  const store = createStore(quizReducer);
  return store;
};
