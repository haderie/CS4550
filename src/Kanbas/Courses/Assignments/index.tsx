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
      className="wd-module list-group-item p-0 mb-5 fs-5 border-gray"
    >
      <div className="mb-5 mt-4 d-flex">
        <SearchBar />
        <AssignmentBar />
      </div>
      <div
        id="wd-assignments-title"
        className="wd-title align-items-center p-3 ps-2 bg-secondary"
      >
        <BsGripVertical />
        <b>ASSIGNMENTS</b>
        <div className="float-end">
          <label className="form-label border rounded-pill ">
            40% of Total{" "}
          </label>
          <BsPlus style={{ fontSize: "1.5em" }} />
          <IoEllipsisVertical className="fs-4" />
        </div>
      </div>

      <ul id="wd-assignment-list" className="list-group rounded-0">
        <li className="wd-lesson wd-assignment-list-item list-group-item p-3 ps-1">
          <a
            className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <AssignmentControlButtons />
              <div style={{ marginLeft: "10px" }}>
                <h4>
                  <b>A1</b>
                </h4>
                <h5>
                  <span style={{ color: "red" }}> Multiple Modules </span> |{" "}
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

        <li className="wd-lesson wd-assignment-list-item list-group-item p-3 ps-1">
          <a
            className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <AssignmentControlButtons />
              <div style={{ marginLeft: "10px" }}>
                <h4>
                  <b>A2</b>
                </h4>
                <h5>
                  <span style={{ color: "red" }}> Multiple Modules </span> |{" "}
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
      </ul>
    </div>
  );
}
