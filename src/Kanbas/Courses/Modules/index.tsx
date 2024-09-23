import ModuleStatus from "./Status";

export default function Modules() {
  return (
    <div>
      <ModuleStatus/>
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
                <li className="wd-content-item">Creating a development environment</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item"> Learn how to create user interfaces with HTML</li>
                <li className="wd-content-item"> keep working on assignment 1</li>
                <li className="wd-content-item"> Deploy the assignment to Netlify</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}