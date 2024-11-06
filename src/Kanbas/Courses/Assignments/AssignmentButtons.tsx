import { FaTrash } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import DeletePopup from "./DeletePopup";

export default function AssignmentButtons({
  assignmentName,
  assignmentID,
  deleteAssignment,
}: {
  assignmentName: string;
  assignmentID: string;
  deleteAssignment: (assignmentID: string) => void;
}) {
  return (
    <div className="float-end">
      <FaTrash
        className="text-danger me-2 mb-1"
        data-bs-toggle="modal"
        data-bs-target="#wd-delete-assignment"
      />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
      <DeletePopup
        dialogTitle="Delete Assignment"
        moduleName={assignmentName}
        deleteAssignment={() => deleteAssignment(assignmentID)}
      />
    </div>
  );
}
