import { BsPlus } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function AssignmentBar() {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div
      className="d-flex"
      style={{
        gap: "10px",
        marginLeft: "auto",
      }}
    >
      {currentUser.role === "FACULTY" && (
        <>
          <button
            className="wd-add-assignment-group"
            style={{
              backgroundColor: "#E0E0E0",
              border: "1px solid #ccc",
              alignItems: "center",
              padding: "0px 10px",
              borderRadius: "3px",
            }}
          >
            <BsPlus style={{ fontSize: "1.5em" }} /> Group
          </button>

          <Link
            id="wd-add-assignment"
            to={`/Kanbas/Courses/${cid}/Assignments/new`}
            className="btn btn-danger"
          >
            <BsPlus style={{ fontSize: "1.5em" }} /> Assignment
          </Link>
        </>
      )}
    </div>
  );
}
