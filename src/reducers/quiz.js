//1
//CREATE STATE
const quizQuestions = [
  {
    id: 1,
    question: "She ___ very tall.",
    choices: {
      a: "is",
      b: "am",
      c: "are",
    },
    correctAnswer: "a",
  },
  {
    id: 2,
    question: "Are you __________!",
    choices: {
      a: "short",
      b: "serious",
      c: "tall",
    },
    correctAnswer: "b",
  },
  {
    id: 3,
    question: "Why __ you sad?",
    choices: {
      a: "is",
      b: "are",
      c: "am",
    },
    correctAnswer: "b",
  },
  {
    id: 4,
    question:
      "Make this qweqweqweqweqweqweqqqqqqqqqqq qqqqqq qqq  qqqqqqqq qqqqqqqqqqqqqqphrase negative: 'She is fat.'",
    choices: {
      a: "She is not fat.",
      b: "She is no fat.",
      c: "She no fat.",
    },
    correctAnswer: "a",
  },
  {
    id: 5,
    question: "Make this phrase a question: 'You are happy.'",
    choices: {
      a: "Happy you?",
      b: "Are you happy?",
      c: "You are happy?",
    },
    correctAnswer: "b",
  },
];

// Add more questions as needed

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
