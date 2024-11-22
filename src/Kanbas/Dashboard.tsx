import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as db from "./Database";
import { useEffect, useState } from "react";
import { addEnrollment, deleteEnrollment } from "./Courses/reducer";
import * as enrollClient from "./Courses/enrollClient";

export default function Dashboard({
  courses,
  course,
  showAllCourses,
  setCourse,
  setCourses,
  setShowAllCourses,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  showAllCourses: boolean;
  setCourses: (courses: any) => void;
  setShowAllCourses: (showAllCourses: boolean) => void;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [enrollments1, setEnrollments] = useState<any[]>([]);

  const fetchAllEnrollments = async () => {
    const courses = await enrollClient.fetchAllEnrollments();
    setEnrollments(courses);
  };

  const isEnrolled = (courseId: string) =>
    enrollments1.some(
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
    await enrollClient.fetchAllEnrollments();
  };

  const unenrollUserInCourse = async (courseId: any) => {
    await enrollClient.unenrollUserInCourse(currentUser._id, courseId);
    dispatch(deleteEnrollment(courseId));
    enrollClient.fetchAllEnrollments();
  };

  useEffect(() => {
    fetchAllEnrollments();
  }, [currentUser, enrollments1]);

  // const toggleEnrollment = (courseId: any) => {
  //   if (enrolledCourses.includes(courseId)) {
  //     unenrollUserInCourse(courseId);
  //   } else {
  //     enrollUserInCourse(courseId);
  //   }
  // };

  // const toggleEnrollment = async (courseId: any) => {
  //   try {
  //     if (courses.includes(courseId)) {
  //       // Unenroll if currently enrolled
  //       setCourses(courses.filter((id: any) => id !== courseId));
  //       await unenrollUserInCourse(courseId);
  //       setCourses((prev: any) => prev.filter((id: any) => id !== courseId));
  //     } else {
  //       // Enroll if not currently enrolled
  //       await enrollUserInCourse(courseId);
  //       setCourses((prev: any) => [...prev, courseId]);
  //       setCourses([...courses, courseId]);
  //     }
  //   } catch (error) {
  //     console.error(`Failed to "unenroll" : "enroll"}:`, error);
  //   }
  // };

  // const toggleEnrollment = (courseId: any) => {
  //   if (enrolledCourses.includes(courseId)) {
  //     // Unenroll if course is currently enrolled
  //     dispatch(deleteEnrollment(courseId)); // Dispatch delete action
  //     setEnrolledCourses(enrolledCourses.filter((id: any) => id !== courseId));
  //     unenrollUserInCourse(courseId);
  //   } else {
  //     // Enroll if course is not currently enrolled
  //     enrollUserInCourse(courseId);

  //     dispatch(addEnrollment({ user: currentUser._id, course: courseId })); // Dispatch add action
  //     setEnrolledCourses([...enrolledCourses, courseId]);
  //   }
  // };

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
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          {showAllCourses ? "All Courses" : "Enrollments"}
        </button>
      )}
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>{" "}
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => {
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
