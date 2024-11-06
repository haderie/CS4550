import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as db from "./Database";
import { useState } from "react";
import { addEnrollment, deleteEnrollment } from "./Courses/reducer";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentreducer);
  const dispatch = useDispatch();

  const [showAllCourses, setShowAllCourses] = useState(false);

  const [enrolledCourses, setEnrolledCourses] = useState(
    enrollments
      .filter((enrollment: any) => enrollment.user === currentUser._id)
      .map((enrollment: any) => enrollment.course)
  );
  const toggleEnrollmentsView = () => setShowAllCourses(!showAllCourses);

  const toggleEnrollment = (courseId: any) => {
    if (enrolledCourses.includes(courseId)) {
      // Unenroll if course is currently enrolled
      dispatch(deleteEnrollment(courseId)); // Dispatch delete action
      setEnrolledCourses(enrolledCourses.filter((id: any) => id !== courseId));
    } else {
      // Enroll if course is not currently enrolled
      dispatch(addEnrollment({ user: currentUser._id, course: courseId })); // Dispatch add action
      setEnrolledCourses([...enrolledCourses, courseId]);
    }
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {currentUser.role === "FACULTY" && (
        <h5>
          New Course
          <button
            className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={addNewCourse}
          >
            {" "}
            Add{" "}
          </button>
          <button
            className="btn btn-warning float-end me-2"
            onClick={updateCourse}
            id="wd-update-course-click"
          >
            Update
          </button>
        </h5>
      )}
      {currentUser.role === "FACULTY" && (
        <>
          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </>
      )}
      {currentUser.role === "STUDENT" && (
        <button
          className="btn btn-primary float-end"
          onClick={toggleEnrollmentsView}
        >
          {showAllCourses ? "All Courses" : "Enrollments"}
        </button>
      )}
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>{" "}
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses
            .filter(
              (course) => showAllCourses || enrolledCourses.includes(course._id)
            )
            .map((course) => {
              const isEnrolled = enrolledCourses.includes(course._id);
              return (
                <div
                  className="wd-dashboard-course col"
                  style={{ width: "300px" }}
                >
                  <div className="card rounded-3 overflow-hidden">
                    <img
                      src={require(`../images/${course.img}`)}
                      width="100%"
                      height={160}
                      alt="/logo512.png"
                    />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        {course.name}{" "}
                      </h5>
                      <p
                        className="wd-dashboard-course-title card-text overflow-y-hidden"
                        style={{ maxHeight: 100 }}
                      >
                        {course.description}{" "}
                      </p>
                      <Link
                        to={`/Kanbas/Courses/${course._id}/Home`}
                        className="wd-dashboard-course-link text-decoration-none btn btn-primary"
                      >
                        {" "}
                        Go{" "}
                      </Link>

                      {currentUser.role === "STUDENT" && (
                        <>
                          <button
                            className={`btn float-end ${
                              isEnrolled ? "btn-danger" : "btn-success"
                            }`}
                            onClick={() => toggleEnrollment(course._id)}
                          >
                            {isEnrolled ? "Unenroll" : "Enroll"}
                          </button>
                        </>
                      )}

                      {currentUser.role === "FACULTY" && (
                        <>
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              deleteCourse(course._id);
                            }}
                            className="btn btn-danger float-end"
                            id="wd-delete-course-click"
                          >
                            Delete
                          </button>
                          <button
                            id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning me-2 float-end"
                          >
                            Edit
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
