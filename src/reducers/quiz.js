//1
//CREATE STATE
const quizQuestions = [
  {
    id: 1,
    question: "We _________ our homework at the moment.",
    choices: {
      a: "do",
      b: "did",
      c: "are doing",
    },
    correctAnswer: "c",
  },
  {
    id: 2,
    question: "They _________ to the music while they work.",
    choices: {
      a: "are listening",
      b: "listen",
      c: "listened",
    },
    correctAnswer: "a",
  },

  {
    id: 3,
    question: "I _________ a delicious cake for the party.",
    choices: {
      a: "bake",
      b: "am baking",
      c: "baked",
    },
    correctAnswer: "b",
  },
  {
    id: 4,
    question: "They _________ basketball in the park every weekend.",
    choices: {
      a: "play",
      b: "played",
      c: "are playing",
    },
    correctAnswer: "c",
  },
  {
    id: 5,
    question: "My sister _________ her guitar right now.",
    choices: {
      a: "practices",
      b: "is practicing",
      c: "practiced",
    },
    correctAnswer: "b",
  },

  {
    id: 6,
    question: "I _________ to the party tomorrow.",
    choices: {
      a: "am going",
      b: "go",
      c: "will go",
    },
    correctAnswer: "c",
  },
  {
    id: 7,
    question: "They _________ a new car next year.",
    choices: {
      a: "are buying",
      b: "buy",
      c: "will buy",
    },
    correctAnswer: "c",
  },

  {
    id: 8,
    question: "I _________ shopping every day.",
    choices: {
      a: "go",
      b: "am going",
      c: "will go",
    },
    correctAnswer: "a",
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
