export default function Assignments() {
    return (
      <div id="wd-assignments">
        <input id="wd-search-assignment"
               placeholder="Search for Assignments" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button>
        </h3>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A1 - ENV + HTML
              </a> <br/> 
              <a> 
                Multiple Modules |<b> Not available </b> Until May 6 at 12:00 AM |
              </a> <br/>
              <a> 
                <b> Due </b>May 13 at 11:59 PM | 100 Points
              </a>
            
          </li>
          <li className="wd-assignment-list-item">
          <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A2 - CSS + Bootstrap  
              </a> <br/>
              <a> 
                Multiple Modules |<b> Not available </b> Until May 13 at 12:00 AM |
              </a> <br/>
              <a> 
                <b> Due </b>May 20 at 11:59 PM | 100 Points
              </a>
          </li>
        </ul>
      </div>
  );}
  
  