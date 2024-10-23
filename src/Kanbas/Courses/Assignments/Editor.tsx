import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = assignments.find((assignment) => assignment._id === aid);

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
              value={assignment?.title}
              placeholder="Insert assignment title"
            />
          </div>

          <textarea id="wd-description" className="form-control mb-2">
            {assignment?.description}
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
                value={assignment?.points}
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
                value={assignment?.assignmentType}
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
                  value={assignment?.submissionType}
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
                    checked={assignment?.submissionOptions?.textEntry}
                  />
                  <label htmlFor="wd-text-entry"> Text Entry</label>
                </div>

                <div className="mb-3">
                  <input
                    type="checkbox"
                    name="check-entry"
                    id="wd-website-url"
                    className="me-1"
                    checked={assignment?.submissionOptions?.websiteURL}
                  />
                  <label htmlFor="wd-website-url"> Website URL</label>
                </div>

                <div className="mb-3">
                  <input
                    type="checkbox"
                    name="check-entry"
                    id="wd-media-recordings"
                    className="me-1"
                    checked={assignment?.submissionOptions?.mediaRecordings}
                  />
                  <label htmlFor="wd-media-recordings"> Media Recordings</label>
                </div>

                <div className="mb-3">
                  <input
                    type="checkbox"
                    name="check-entry"
                    id="wd-student-annotation"
                    className="me-1"
                    checked={assignment?.submissionOptions?.studentAnnotation}
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
                    checked={assignment?.submissionOptions?.fileUploads}
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
                  value={assignment?.dueDate}
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
                      value={assignment?.availableFrom}
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
                      value={assignment?.availableUntil}
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
          className="btn btn-danger"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
