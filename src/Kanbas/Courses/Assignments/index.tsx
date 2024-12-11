import AssignmentButtons from "./AssignmentButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentBar from "./AssignmentBar";
import SearchBar from "./SearchBar";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAssignments, deleteAssignment } from "./reducer";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";
import { useEffect, useState } from "react";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();

  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentForCourse(
      cid as string
    );
    dispatch(setAssignments(assignments));
  };

  const removeAssignment = async (assignmentId: string) => {
    dispatch(deleteAssignment(assignmentId));
    await assignmentsClient.deleteAssignment(assignmentId);
  };

  const [selectedAssignment, setSelectedAssignment] = useState<any>(null);

  const formatDate = (newDate: string | number | Date) => {
    const date = new Date(newDate);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };
  const [showModal, setShowModal] = useState(false);

  const findDeleteAsgn = (assignmentId: string) => {
    setSelectedAssignment(assignmentId);
    setShowModal(true);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
    setSelectedAssignment(null);
  };

  const setDelete = () => {
    if (selectedAssignment) {
      removeAssignment(selectedAssignment);
      setShowModal(false);
      setSelectedAssignment(null);
    }
  };

  useEffect(() => {
    fetchAssignments();
  }, [cid]);

  return (
    <div id="wd-assignments">
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
        {assignments.map((asgn: any) => (
          <li
            className="wd-assignment-list-item list-group-item p-3 ps-1"
            key={asgn._id}
          >
            <div className="d-flex justify-content-between align-items-center">
              {currentUser.role === "FACULTY" ? (
                <Link
                  className="wd-assignment-link d-flex justify-content-between align-items-center text-decoration-none text-dark"
                  to={`/Kanbas/Courses/${cid}/Assignments/${asgn._id}`}
                >
                  <div className="d-flex align-items-center">
                    <AssignmentControlButtons />
                    <div className="ms-2">
                      <h4>
                        <b>{asgn.title}</b>
                      </h4>
                      <h5>
                        <span className="text-danger"> Multiple Modules </span>{" "}
                        | <b>Not available</b> Until{" "}
                        {formatDate(asgn.availableFrom)} |
                      </h5>
                      <h5>
                        <b>Due</b> {formatDate(asgn.dueDate)} | {asgn.points}{" "}
                        pts
                      </h5>
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="wd-assignment-link d-flex justify-content-between align-items-center text-dark">
                  <div className="d-flex align-items-center">
                    <AssignmentControlButtons />
                    <div className="ms-2">
                      <h4>
                        <b>{asgn.title}</b>
                      </h4>
                      <h5>
                        <span className="text-danger"> Multiple Modules </span>{" "}
                        | <b>Not available</b> Until{" "}
                        {formatDate(asgn.availableFrom)} |
                      </h5>
                      <h5>
                        <b>Due</b> {formatDate(asgn.dueDate)} | {asgn.points}{" "}
                        pts
                      </h5>
                    </div>
                  </div>
                </div>
              )}
              {currentUser.role === "FACULTY" && (
                <AssignmentButtons
                  assignmentID={asgn._id}
                  deleteAssignment={() => findDeleteAsgn(asgn._id)}
                />
              )}
            </div>
          </li>
        ))}
      </ul>
      {showModal && (
        <div
          id="wd-delete-dialog"
          className="modal fade show"
          style={{ display: "block", zIndex: 1050 }}
          data-bs-backdrop="static"
          data-bs-keyboard="false"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5">Delete Assignment</h1>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCancelDelete}
                ></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this assignment?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCancelDelete}
                >
                  No, Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={setDelete}
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
