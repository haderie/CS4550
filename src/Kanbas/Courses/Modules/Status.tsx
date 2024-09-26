export default function ModuleStatus() {
    return (
      <div id="wd-module-status">
        <button>Collapse All</button>
        <button>View Progress</button>
        <select>
            <option value={"Publish All"}> Publish All</option>
            <option value={"Publish Select"}> Publish Select</option>
        </select>

        <button> + Module</button>
      </div>
    );
  }