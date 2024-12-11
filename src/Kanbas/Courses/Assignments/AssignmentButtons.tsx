import { FaTrash } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function AssignmentButtons({
  assignmentID,
  deleteAssignment,
}: {
  assignmentID: string;
  deleteAssignment: (assignmentID: string) => void;
}) {
  return (
    <div className="float-end">
      <FaTrash
        className="text-danger me-2 mb-1"
        // data-bs-toggle="modal"
        // data-bs-target="#wd-delete-assignment"
        onClick={() => deleteAssignment(assignmentID)}
      />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
