import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentReducer from "./Courses/Assignments/reducer";
import enrollmentreducer from "./Courses/reducer";
import quizReducer from "./Courses/Quizzes/reducer";
import questionsReducer from "./Courses/Quizzes/QuizQuestionsEditor/reducer";
import responsesReducer from "./Courses/Quizzes/responseReducer";


const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentReducer,
    enrollmentreducer,
    quizReducer,
    questionsReducer,
    responsesReducer,

  },
});
export default store;