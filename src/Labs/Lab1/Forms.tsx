import OtherFields from "./OtherFields";

export default function Forms() {
  return (
    <div id="wd-forms">
      <h4>Form Elements</h4>
      <form id="wd-text-fields">
        <h5>Text Fields</h5>
        <label htmlFor="wd-text-fields-username">Username:</label>
        <input id="wd-text-fields-username" placeholder="jdoe" /> <br />
        <label htmlFor="wd-text-fields-password">Password:</label>
        <input
          name="password"
          type="password"
          id="wd-text-fields-password"
          value="123@#$asd"
        />
        <br />
        <label htmlFor="wd-text-fields-first-name">First name:</label>
        <input
          name="first-name"
          type="text"
          id="wd-text-fields-first-name"
          title="John"
        />{" "}
        <br />
        <label htmlFor="wd-text-fields-last-name">Last name:</label>
        <input
          type="text"
          name="last-name"
          id="wd-text-fields-last-name"
          placeholder="Doe"
          defaultValue="Wonderland"
          title="The last name"
        />
        {/* copy rest of form elements here  */}
        <h5>Text boxes</h5>
        <label>Biography:</label>
        <br />
        <textarea id="wd-textarea" cols={30} rows={10}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </textarea>
        <br />
        <button type="button">Submit</button>
        <h5 id="wd-buttons">Buttons</h5>
        <button
          id="wd-all-good"
          onClick={() => alert("Life is Good!")}
          type="button"
        >
          Hello World!
        </button>
        <h5>File upload</h5>
        <input id="wd-upload" type="file" />
        <h5 id="wd-radio-buttons">Radio buttons</h5>
        <div>
          <label>Favorite movie genre:</label>
          <div>
            <input type="radio" name="radio-genre" id="wd-radio-comedy" />
            <label htmlFor="wd-radio-comedy">Comedy</label>
          </div>
          <div>
            <input type="radio" name="radio-genre" id="wd-radio-drama" />
            <label htmlFor="wd-radio-drama">Drama</label>
          </div>
          <div>
            <input type="radio" name="radio-genre" id="wd-radio-scifi" />
            <label htmlFor="wd-radio-scifi">Science Fiction</label>
          </div>
          <div>
            <input type="radio" name="radio-genre" id="wd-radio-fantasy" />
            <label htmlFor="wd-radio-fantasy">Fantasy</label>
          </div>
        </div>
        <div>
          <label>Favorite Color</label>
          <input type="radio" name="radio-color" id="wd-radio-red" />
          <label htmlFor="wd-radio-red">Red</label>
          <input type="radio" name="radio-color" id="wd-radio-blue" />
          <label htmlFor="wd-radio-blue">Blue</label>
          <input type="radio" name="radio-color" id="wd-radio-green" />
          <label htmlFor="wd-radio-green">Green</label>
        </div>
        <h5 id="wd-checkboxes">Checkboxes</h5>
        <label>Favorite movie genre:</label>
        <br />
        <input type="checkbox" name="check-genre" id="wd-chkbox-comedy" />
        <label htmlFor="wd-chkbox-comedy">Comedy</label>
        <br />
        <input type="checkbox" name="check-genre" id="wd-chkbox-drama" />
        <label htmlFor="wd-chkbox-drama">Drama</label>
        <br />
        <input type="checkbox" name="check-genre" id="wd-chkbox-scifi" />
        <label htmlFor="wd-chkbox-scifi">Science Fiction</label>
        <br />
        <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy" />
        <label htmlFor="wd-chkbox-fantasy">Fantasy</label>
        <h4 id="wd-dropdowns">Dropdowns</h4>
        <h5>Select one</h5>
        <label htmlFor="wd-select-one-genre">Favorite movie genre: </label>
        <br />
        <select id="wd-select-one-genre">
          <option value="COMEDY">Comedy</option>
          <option value="DRAMA">Drama</option>
          <option selected value="SCIFI">
            Science Fiction
          </option>
          <option value="FANTASY">Fantasy</option>
        </select>
        <h5>Select many</h5>
        <label htmlFor="wd-select-many-genre">
          Favorite all movie genres:{" "}
        </label>
        <br />
        <select id="wd-select-many-genre" multiple>
          <option selected value="COMEDY">
            Comedy
          </option>
          <option value="DRAMA">Drama</option>
          <option selected value="SCIFI">
            Science Fiction
          </option>
          <option value="FANTASY">Fantasy</option>
        </select>
        <OtherFields />
      </form>
    </div>
  );
}