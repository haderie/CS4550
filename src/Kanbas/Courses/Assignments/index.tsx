import Flex from "../../../Labs/Lab2/Flex";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import EditorBar from "./AssignmentBar";
import SearchBar from "./SearchBar";

export default function Assignments() {
    return (
      
      <div id="wd-assignments" className="wd-module list-group-item p-0 mb-5 fs-5 border-gray" >
        <div style={{display: 'flex', marginBottom: 40}}>
        <SearchBar/>
        <EditorBar/>
        </div>
        <div id="wd-assignments-title" className="wd-title p-3 ps-2 bg-secondary">
          ASSIGNMENTS 40% of Total <button>+</button></div>

        <ul id="wd-assignment-list" className="list-group rounded-0">
        <li className="wd-lesson wd-assignment-list-item list-group-item p-3 ps-1">
          <a
            className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123"
            style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} 
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <AssignmentControlButtons />
              <div style={{ marginLeft: '10px' }}>
                <h4>A1</h4>
                <h5>
                  Multiple Modules | <b>Not available</b> Until May 6 at 12:00 AM |
                </h5>
                <h5>
                  <b>Due</b> May 13 at 11:59 PM | 100 Points
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
            style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} 
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <AssignmentControlButtons />
              <div style={{ marginLeft: '10px' }}>
                <h4>A1</h4>
                <h5>
                  Multiple Modules | <b>Not available</b> Until May 6 at 12:00 AM |
                </h5>
                <h5>
                  <b>Due</b> May 13 at 11:59 PM | 100 Points
                </h5>
              </div>
            </div>
            <LessonControlButtons />
          </a>
        </li>

        </ul>
      </div>
  );}
  
  