import ModuleEditor from "./ModuleEditor";
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { MdDoNotDisturbAlt } from "react-icons/md";

export default function ModulesControls({
  moduleName,
  setModuleName,
  addModule,
  currentUser,
}: {
  moduleName: string;
  setModuleName: (title: string) => void;
  addModule: () => void;
  currentUser: { role: string };
}) {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      {currentUser.role === "FACULTY" && (
        <>
          <button
            id="wd-add-module-btn"
            className="btn btn-lg btn-danger me-1 float-end"
            data-bs-toggle="modal"
            data-bs-target="#wd-add-module-dialog"
          >
            <FaPlus
              className="position-relative me-2"
              style={{ bottom: "1px" }}
            />
            Module
          </button>

          <div className="dropdown d-inline me-1 float-end">
            <button
              id="wd-publish-all-btn"
              className="btn btn-lg btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
            >
              <GreenCheckmark />
              Publish All
            </button>
            <ul className="dropdown-menu">
              <li>
                <button
                  id="wd-publish-all-modules-and-items-btn"
                  className="dropdown-item"
                >
                  <GreenCheckmark />
                  Publish all modules and items
                </button>
              </li>
              <li>
                <button
                  id="wd-publish-modules-only-button"
                  className="dropdown-item"
                >
                  <GreenCheckmark />
                  Publish modules only
                </button>
              </li>
              <li>
                <button
                  id="wd-unpublish-modules-only"
                  className="dropdown-item"
                >
                  <MdDoNotDisturbAlt />
                  Unpublish modules only
                </button>
              </li>
              <li>
                <button
                  id="wd-unpublish-all-modules-and-items"
                  className="dropdown-item"
                >
                  <MdDoNotDisturbAlt />
                  Unpublish all modules and items
                </button>
              </li>
            </ul>
          </div>

          <button
            id="wd-view-progress"
            className="btn btn-lg btn-secondary me-1 float-end"
          >
            View Progress
          </button>
        </>
      )}

      {/* "Collapse All" button visible to all users */}
      <button
        id="wd-collapse-all"
        className="btn btn-lg btn-secondary me-1 float-end"
      >
        Collapse All
      </button>

      {/* ModuleEditor modal, visible only to faculty */}
      {currentUser.role === "FACULTY" && (
        <ModuleEditor
          dialogTitle="Add Module"
          moduleName={moduleName}
          setModuleName={setModuleName}
          addModule={addModule}
        />
      )}
    </div>
  );
}
