import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const dispatch = useDispatch();
  const isNew = aid === "new";

  const { assignments } = useSelector((state: any) => state.assignmentReducer);

  // Find existing assignment if not new
  const existingAssignment = !isNew
    ? assignments.find((assignment: any) => assignment._id === aid)
    : null;

  const [asgnValue, setAsgnValue] = useState({
    title: "",
    description: "",
    points: 0,
    assignmentType: "Assignments",
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
    submissionType: "",
    submissionOptions: {
      textEntry: false,
      websiteURL: false,
      mediaRecordings: false,
      studentAnnotation: false,
      fileUploads: false,
    },
    ...existingAssignment,
  });

  const createAssignmentForCourse = async () => {
    const assignmentData = {
      _id: new Date().getTime().toString(),
      ...asgnValue,
      course: cid,
    };
    const assignment = await coursesClient.createAssignmentForCourse(
      cid,
      assignmentData
    );
    dispatch(addAssignment(assignment));
  };

  const updateAssignmentForCourse = async (assignment: any) => {
    await assignmentsClient.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };

  const handleSave = () => {
    const assignmentData = {
      _id: new Date().getTime().toString(),
      ...asgnValue,
      course: cid,
    };
    if (isNew) {
      createAssignmentForCourse();
    } else {
      updateAssignmentForCourse(asgnValue);
    }
  };

  useEffect(() => {}, [assignments]);

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <div className="row mb-4 justify-content-end me-2">
        <div className="col-10">
          <div className="row">
            <label htmlFor="wd-name">Assignment Name</label>
          </div>
          <div className="col-auto">
            <input
              id="wd-name"
              className="form-control mb-2"
              value={asgnValue.title}
              onChange={(e) =>
                setAsgnValue({ ...asgnValue, title: e.target.value })
              }
              placeholder="Insert assignment title"
            />
          </div>

          <textarea
            id="wd-description"
            className="form-control mb-2"
            onChange={(e) =>
              setAsgnValue({ ...asgnValue, description: e.target.value })
            }
          >
            {asgnValue.description}
          </textarea>
        </div>
      </div>

      <div id="wd-rest-as" className="container ">
        <div className="row ">
          {/* Points Group */}
          <div className="row align-items-center justify-content-end mb-3 me-5">
            <div className="col-auto ">
              <label htmlFor="wd-points">Points</label>
            </div>
            <div className="col-6">
              <input
                id="wd-points"
                className="form-control mb-2"
                value={asgnValue.points}
                onChange={(e) =>
                  setAsgnValue({ ...asgnValue, points: Number(e.target.value) })
                }
                placeholder="Enter points"
              />
            </div>
          </div>

          {/* Assignment Group */}
          <div className="row align-items-center justify-content-end mb-3">
            <div className="col-auto text-end">
              <label htmlFor="wd-group" className="form-label mb-0">
                Assignment Group
              </label>
            </div>
            <div className="col-6">
              <select
                id="wd-group"
                className="form-select mb-2"
                value={asgnValue.assignmentType}
                onChange={(e) =>
                  setAsgnValue({ ...asgnValue, assignmentType: e.target.value })
                }
              >
                <option value={"Assignments"}> Assignments</option>
                <option value={"Quiz"}> Quiz</option>
                <option value={"Exam"}> Exam</option>
                <option value={"Project"}> Project</option>
              </select>
            </div>
          </div>

          {/* Grades Group */}
          <div className="row align-items-center justify-content-end mb-3">
            <div className="col-auto text-end">
              <label htmlFor="wd-display-grade-as">Display Grade</label>
            </div>
            <div className="col-6">
              <select id="wd-display-grade-as" className="form-select mb-2">
                <option value={"Percentage"}> Percentage</option>
                <option value={"Points"}> Points</option>
              </select>
            </div>
          </div>

          {/* Submission Group */}
          <div className="row align-items-start justify-content-end mb-3">
            <div className="col-auto float-end">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </div>

            <div className="col-6 border border-secondary-subtle rounded">
              <div className="col-auto text-end">
                <select
                  id="wd-submission-type"
                  className="form-select mb-4 mt-3"
                  value={asgnValue.submissionType}
                  onChange={(e) =>
                    setAsgnValue({
                      ...asgnValue,
                      submissionType: e.target.value,
                    })
                  }
                >
                  <option value={"Online"}> Online</option>
                  <option value={"In-Person"}> In-Person</option>
                </select>
              </div>

              <div className="mb-3 mt-2">
                <div className="mb-3">
                  <label htmlFor="wd-submission-type-options">
                    {" "}
                    <b> Online Entry Options </b>
                  </label>
                </div>

                <div className="mb-3">
                  <input
                    type="checkbox"
                    name="check-entry"
                    id="wd-text-entry"
                    className="me-1"
                    checked={asgnValue.submissionOptions?.textEntry}
                    onChange={(e) =>
                      setAsgnValue({
                        ...asgnValue,
                        submissionOptions: {
                          ...asgnValue.submissionOptions,
                          textEntry: e.target.checked,
                        },
                      })
                    }
                  />
                  <label htmlFor="wd-text-entry"> Text Entry</label>
                </div>

                <div className="mb-3">
                  <input
                    type="checkbox"
                    name="check-entry"
                    id="wd-website-url"
                    className="me-1"
                    checked={asgnValue.submissionOptions?.websiteURL}
                    onChange={(e) =>
                      setAsgnValue({
                        ...asgnValue,
                        submissionOptions: {
                          ...asgnValue.submissionOptions,
                          websiteURL: e.target.checked,
                        },
                      })
                    }
                  />
                  <label htmlFor="wd-website-url"> Website URL</label>
                </div>

                <div className="mb-3">
                  <input
                    type="checkbox"
                    name="check-entry"
                    id="wd-media-recordings"
                    className="me-1"
                    checked={asgnValue.submissionOptions?.mediaRecordings}
                    onChange={(e) =>
                      setAsgnValue({
                        ...asgnValue,
                        submissionOptions: {
                          ...asgnValue.submissionOptions,
                          mediaRecordings: e.target.checked,
                        },
                      })
                    }
                  />
                  <label htmlFor="wd-media-recordings"> Media Recordings</label>
                </div>

                <div className="mb-3">
                  <input
                    type="checkbox"
                    name="check-entry"
                    id="wd-student-annotation"
                    className="me-1"
                    checked={asgnValue.submissionOptions?.studentAnnotation}
                    onChange={(e) =>
                      setAsgnValue({
                        ...asgnValue,
                        submissionOptions: {
                          ...asgnValue.submissionOptions,
                          studentAnnotation: e.target.checked,
                        },
                      })
                    }
                  />
                  <label htmlFor="wd-student-annotation">
                    {" "}
                    Student Annotation
                  </label>
                </div>

                <div className="mb-4">
                  <input
                    type="checkbox"
                    name="check-entry"
                    id="wd-file-upload"
                    className="me-1"
                    checked={asgnValue.submissionOptions?.fileUploads}
                    onChange={(e) =>
                      setAsgnValue({
                        ...asgnValue,
                        submissionOptions: {
                          ...asgnValue.submissionOptions,
                          fileUploads: e.target.checked,
                        },
                      })
                    }
                  />
                  <label htmlFor="wd-file-upload"> File Uploads</label>
                </div>
              </div>
            </div>
          </div>

          {/* Assign Group */}
          <div className="row align-items-start justify-content-end mb-3">
            <div className="col-auto text-end">
              <label htmlFor="wd-assign-to">Assign </label>
            </div>

            <div className="col-6 mb-3 border border-secondary-subtle rounded">
              <div className="mb-3 mt-3">
                <label htmlFor="wd-assign-to">
                  {" "}
                  <b> Assign to </b>
                </label>
                <input
                  type="text"
                  id="wd-assign-to"
                  className="form-control"
                  value="Everyone"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="wd-due-date">
                  {" "}
                  <b> Due </b>
                </label>
                <input
                  type="datetime-local"
                  id="wd-due-date"
                  className="form-control"
                  value={asgnValue.dueDate}
                  onChange={(e) =>
                    setAsgnValue({
                      ...asgnValue,
                      dueDate: e.target.value,
                    })
                  }
                />
              </div>

              <div className="row mb-5">
                <div className="col">
                  <label className="form-label" htmlFor="wd-available-from">
                    {" "}
                    <b> Available From </b>{" "}
                  </label>
                  <div className="col">
                    <input
                      type="datetime-local"
                      id="wd-available-from"
                      className="form-control"
                      value={asgnValue.availableFrom}
                      onChange={(e) =>
                        setAsgnValue({
                          ...asgnValue,
                          availableFrom: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="col">
                  <label className="form-label" htmlFor="wd-available-until">
                    <b> Available Until </b>{" "}
                  </label>
                  <div className="col">
                    <input
                      type="datetime-local"
                      id="wd-available-until"
                      className="form-control"
                      value={asgnValue.availableUntil}
                      onChange={(e) =>
                        setAsgnValue({
                          ...asgnValue,
                          availableUntil: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* Buttons */}
      <div className="d-flex justify-content-end mt-4">
        <Link
          to={`/Kanbas/Courses/${cid}/Assignments`}
          className="btn btn-outline-secondary me-2"
        >
          Cancel
        </Link>
        <Link
          to={`/Kanbas/Courses/${cid}/Assignments`}
          onClick={handleSave}
          className="btn btn-danger"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
