import { BsGripVertical } from "react-icons/bs";
import { LuClipboardSignature } from "react-icons/lu";


export default function AssignmentControlButtons() {
  return(
    <div className="float-start me-2">
      <BsGripVertical/>
      <LuClipboardSignature className="text-success fs-4"/>
    </div>
  )
}