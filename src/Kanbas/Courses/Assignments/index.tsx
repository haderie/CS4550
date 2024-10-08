import Flex from "../../../Labs/Lab2/Flex";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentBar from "./AssignmentBar";
import SearchBar from "./SearchBar";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";

export default function Assignments() {
  return (
    <div
      id="wd-assignments"
      className="list-group-item p-0 mb-5 fs-5 border-gray"
    >
      <div className="mb-5 mt-4 d-flex">
        <SearchBar />
        <AssignmentBar />
      </div>

      <div
        id="wd-assignments-title"
        className="wd-title d-flex align-items-center p-3 ps-2 bg-secondary"
      >
        <BsGripVertical />
        <b className="ms-2">ASSIGNMENTS</b>
        <div className="ms-auto d-flex align-items-center">
          <label className="form-label border rounded-pill px-2 me-2">
            40% of Total
          </label>
          <BsPlus style={{ fontSize: "1.5em" }} className="me-2" />
          <IoEllipsisVertical className="fs-4" />
        </div>
      </div>

      <ul id="wd-assignment-list" className="list-group rounded-0">
        <li className="wd-assignment-list-item list-group-item p-3 ps-1">
          <a
            className="wd-assignment-link d-flex justify-content-between align-items-center text-decoration-none text-dark"
            href="#/Kanbas/Courses/1234/Assignments/123"
          >
            <div className="d-flex align-items-center">
              <AssignmentControlButtons />
              <div className="ms-2">
                <h4>
                  <b>A1</b>
                </h4>
                <h5>
                  <span className="text-danger"> Multiple Modules </span> |{" "}
                  <b>Not available</b> Until May 6 at 12:00 AM |
                </h5>
                <h5>
                  <b>Due</b> May 13 at 11:59 PM | 100 pts
                </h5>
              </div>
            </div>
            <LessonControlButtons />
          </a>
        </li>

        <li className="wd-assignment-list-item list-group-item p-3 ps-1">
          <a
            className="wd-assignment-link d-flex justify-content-between align-items-center text-decoration-none text-dark"
            href="#/Kanbas/Courses/1234/Assignments/123"
          >
            <div className="d-flex align-items-center">
              <AssignmentControlButtons />
              <div className="ms-2">
                <h4>
                  <b>A2</b>
                </h4>
                <h5>
                  <span className="text-danger"> Multiple Modules </span> |{" "}
                  <b>Not available</b> Until April 15 at 12:00 AM |
                </h5>
                <h5>
                  <b>Due</b> Jun 13 at 11:59 PM | 100 pts
                </h5>
              </div>
            </div>
            <LessonControlButtons />
          </a>
        </li>

        <li className="wd-assignment-list-item list-group-item p-3 ps-1">
          <a
            className="wd-assignment-link d-flex justify-content-between align-items-center text-decoration-none text-dark"
            href="#/Kanbas/Courses/1234/Assignments/123"
          >
            <div className="d-flex align-items-center">
              <AssignmentControlButtons />
              <div className="ms-2">
                <h4>
                  <b>A3</b>
                </h4>
                <h5>
                  <span className="text-danger"> Multiple Modules </span> |{" "}
                  <b>Not available</b> Until Jun 10 at 12:00 AM |
                </h5>
                <h5>
                  <b>Due</b> Jun 20 at 11:59 PM | 100 pts
                </h5>
              </div>
            </div>
            <LessonControlButtons />
          </a>
        </li>
      </ul>
    </div>
  );
}
