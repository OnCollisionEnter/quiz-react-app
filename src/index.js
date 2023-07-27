import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import configureStore from "./store/configureStore";
// import { addQuestion, deleteQuestion, editQuestion } from "./actions/quiz";
import { ThemeProvider } from "./context/ThemeContext";
import { Provider } from "react-redux";

import { AlertProvider } from "./context/AlertContext";
import { ChakraProvider } from "@chakra-ui/react";

const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());
});

// //CALL ACTION
// const question1 = store.dispatch(
//   addQuestion("Which one is abstract?", "Flowers", "Animals", "Languages", "c")
// );
// const question2 = store.dispatch(
//   addQuestion("Which one is solid?", "Stone", "Sponge", "Smoke", "b")
// );

// // store.dispatch(deleteQuestion(question2.questionData.id));
// store.dispatch(
//   editQuestion(question1.questionData.id, { title: "güncellenmiş başlık" })
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <ThemeProvider>
        <ChakraProvider>
          <AlertProvider>
            <App />
          </AlertProvider>
        </ChakraProvider>
      </ThemeProvider>
    </Provider>
  </>
);
