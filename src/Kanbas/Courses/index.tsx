import { Routes, Route, Navigate, useParams, useLocation } from "react-router";
import Home from "./Home";
import Modules from "./Modules";
import CoursesNavigation from "./Navigation";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from "./People/Table";
import { FaAlignJustify } from "react-icons/fa6";
import People from "./People/People";
import Quizzes from "./Quizzes";
import QuizDetails from "./Quizzes/QuizDetails";
import QuizEditor from "./Quizzes/QuizEditor";
import QuizView from "./Quizzes/QuizView";
import ResponseView from "./Quizzes/ResponseView";

export default function Courses({ courses }: { courses: any[] }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);

  const { pathname } = useLocation();

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>{" "}
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<People />} />
            <Route path="Quizzes" element={<Quizzes />} />
            <Route path="Quizzes/:qid/Details" element={<QuizDetails />} />
            <Route path="Quizzes/:qid/:qtitle" element={<QuizEditor />} />
            <Route path="Quizzes/:qid/Preview" element={<QuizView />} />
            <Route
              path="/Quizzes/:qid/Details/:responseId"
              element={<ResponseView />}
            />
            <Route path="Quizzes/:qid" element={<QuizView />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
