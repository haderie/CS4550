import { Link, useLocation, useParams } from "react-router-dom";

export default function CoursesNavigation() {
  const { pathname } = useLocation();
  const { cid } = useParams();

  // Simplified array with just link labels
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          key={link}
          to={`/Kanbas/Courses/${cid}/${link}`}
          id={`wd-course-${link}-link`}
          className={`list-group-item border border-0
              ${
                pathname.includes(link) ? "active text-danger" : "text-danger "
              }`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
