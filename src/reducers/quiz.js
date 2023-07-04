//1
//CREATE STATE
const quizQuestions = [
  {
    id: 1,
    question: "Which hook is used for making API calls in React?",
    choices: {
      a: "useFetch",
      b: "useEffect",
      c: "useState",
    },
    correctAnswer: "a",
  },
  {
    id: 2,
    question:
      "Which library is commonly used for state management in large React applications?",
    choices: {
      a: "React Router",
      b: "Redux",
      c: "React Context",
    },
    correctAnswer: "b",
  },
  {
    id: 3,
    question:
      "Which lifecycle method is called after a component has been rendered in React?",
    choices: {
      a: "componentWillMount",
      b: "componentDidUpdate",
      c: "componentDidMount",
    },
    correctAnswer: "c",
  },
  {
    id: 4,
    question: "What is the purpose of the React Virtual DOM?",
    choices: {
      a: "To improve performance by reducing the number of actual DOM updates.",
      b: "To add inline styles to React components.",
      c: "To handle form validation in React applications.",
    },
    correctAnswer: "a",
  },
  {
    id: 5,
    question:
      "Which feature allows you to optimize performance in React by avoiding unnecessary re-renders?",
    choices: {
      a: "React Hooks",
      b: "Memoization",
      c: "Higher-Order Components (HOCs)",
    },
    correctAnswer: "b",
  },
  // Add more questions as needed
];
//CREATE REDUCER
const quizReducer = (state = quizQuestions, action) => {
  switch (action.type) {
    case "ADD_QUESTION":
      return [...state, action.questionData];
    case "DELETE_QUESTION":
      return state.filter(({ id }) => {
        return id !== action.id;
      });
    case "EDIT_QUESTION":
      return state.map((question) => {
        if (question.id === action.id) {
          return { ...question, ...action.changes };
        } else {
          return question;
        }
      });
    default:
      return state;
  }
};

export default quizReducer;
