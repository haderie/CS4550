import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as db from "./Database";
import { useEffect, useState } from "react";
import { addEnrollment, deleteEnrollment } from "./Courses/reducer";
import * as enrollClient from "./Courses/enrollClient";

export default function Dashboard({
  enrollments,
  setEnrollments,
  courses,
  course,
  showAllCourses,
  setShowAllCourses,
  setCourse,
  setCourses,
  addNewCourse,
  deleteCourse,
  updateCourse,
  enrolling,
  setEnrolling,
  updateEnrollment,
}: {
  enrollments: any[];
  setEnrollments: (enrollments: any) => void;
  courses: any[];
  course: any;
  showAllCourses: boolean;
  setCourses: (courses: any) => void;
  setShowAllCourses: (showAllCourses: boolean) => void;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
  enrolling: boolean;
  setEnrolling: (enrolling: boolean) => void;
  updateEnrollment: (courseId: string, enrolled: boolean) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  //const [enrollments, setEnrollments] = useState<any[]>([]);

  const fetchAllEnrollments = async () => {
    const courses = await enrollClient.fetchAllEnrollments();
    setEnrollments(courses);
  };

  const isEnrolled = (courseId: string) =>
    enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser._id && enrollment.course === courseId
    );

  const dispatch = useDispatch();

  const enrollUserInCourse = async (courseId: any) => {
    const enrollment = {
      _id: new Date().getTime().toString(),
      user: currentUser._id,
      course: courseId,
    };
    await enrollClient.enrollUserInCourse(currentUser._id, courseId);
    dispatch(addEnrollment({ user: enrollment._id, course: courseId }));
    fetchAllEnrollments(); // Refresh enrollments
  };

  const unenrollUserInCourse = async (courseId: any) => {
    await enrollClient.unenrollUserInCourse(currentUser._id, courseId);
    dispatch(deleteEnrollment(courseId));
    fetchAllEnrollments(); // Refresh enrollments
  };

  useEffect(() => {
    fetchAllEnrollments();
  }, [currentUser, enrollments]);

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
        <>
          <button
            className="btn btn-primary float-end"
            onClick={() => setShowAllCourses(!showAllCourses)}
          >
            {showAllCourses ? "All Courses" : "Enrollments"}
          </button>
          <button
            onClick={() => setEnrolling(!enrolling)}
            className="float-end btn btn-primary"
          >
            {enrolling ? "Current Enrolled" : "Now Enrolling"}
          </button>
        </>
      )}
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>{" "}
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => {
            console.log(course._id);

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

                    {enrolling && currentUser.role === "STUDENT" && (
                      <>
                        <button
                          className={`btn float-end ${
                            isEnrolled(course._id)
                              ? "btn-danger"
                              : "btn-success"
                          }`}
                          onClick={(event) => {
                            event.preventDefault();
                            unenrollUserInCourse(course._id);
                          }}
                        >
                          {isEnrolled(course._id) ? "Unenroll" : "Enroll"}
                        </button>

                        {isEnrolled(course._id) ? (
                          <button
                            id="wd-edit-course-click"
                            className="btn btn-danger me-2 float-end"
                            onClick={(event) => {
                              event.preventDefault();
                              unenrollUserInCourse(course._id);
                            }}
                          >
                            Unenroll
                          </button>
                        ) : (
                          <button
                            className="btn btn-success float-end"
                            id="wd-delete-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              enrollUserInCourse(course._id);
                            }}
                          >
                            Enroll
                          </button>
                        )}
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
