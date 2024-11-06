import AssignmentButtons from "./AssignmentButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentBar from "./AssignmentBar";
import SearchBar from "./SearchBar";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment } from "./reducer";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

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
        {assignments
          .filter((asgn: any) => asgn.course === cid)
          .map((asgn: any) => (
            <li
              className="wd-assignment-list-item list-group-item p-3 ps-1"
              key={asgn._id}
            >
              <div className="d-flex justify-content-between align-items-center">
                {currentUser.role === "FACULTY" ? (
                  // Clickable link for FACULTY
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
                          <span className="text-danger">
                            {" "}
                            Multiple Modules{" "}
                          </span>{" "}
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
                  // Non-clickable div for non-FACULTY roles
                  <div className="wd-assignment-link d-flex justify-content-between align-items-center text-dark">
                    <div className="d-flex align-items-center">
                      <AssignmentControlButtons />
                      <div className="ms-2">
                        <h4>
                          <b>{asgn.title}</b>
                        </h4>
                        <h5>
                          <span className="text-danger">
                            {" "}
                            Multiple Modules{" "}
                          </span>{" "}
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
                    assignmentName={asgn.title}
                    assignmentID={asgn._id}
                    deleteAssignment={(assignmentID) => {
                      dispatch(deleteAssignment(assignmentID));
                    }}
                  />
                )}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
