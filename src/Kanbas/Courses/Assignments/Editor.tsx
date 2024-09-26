export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name: </label>
        <input id="wd-name" value="A1 - ENV + HTML" /> <br /> <br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea> <br />
        <table>

        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-points">Points</label>
            </td>
            <td>
                <input id="wd-points" value={100} />
            </td>
        </tr> <br />

        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-group">Assignment Group</label>
            </td> 
            <td>
                <select id="wd-group">
                    <option value={"Assignments"}> Assignments</option>
                    <option value={"Quiz"}> Quiz</option>
                    <option value={"Exam"}> Exam</option>
                    <option value={"Project"}> Project</option>

                </select>
            </td>
        </tr> <br />

        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-display-grade-as">Display Grade</label>
            </td> 
            <td>
                <select id="wd-display-grade-as">
                    <option value={"Percentage"}> Percentage</option>
                    <option value={"Points"}> Points</option>
                </select>
            </td>
        </tr> <br />

        <tr>
          <td align="right" valign="top">
                <label htmlFor="wd-submission-type">Submission Type</label>
            </td> 

            <td>
                <select id="wd-submission-type">
                    <option value={"Online"}> Online</option>
                    <option value={"In-Person"}> In-Person</option>
                </select>

            <td> <br />
                <label htmlFor="wd-submission-type-options">Online Entry Options</label> <br />
             
                    <input type="checkbox" name="check-entry" id="wd-text-entry" />
                    <label htmlFor="wd-text-entry">Text Entry</label> <br />
               
                    <input type="checkbox" name="check-entry" id="wd-website-url" />
                    <label htmlFor="wd-website-url">Website URL</label> <br />
                
                    <input type="checkbox" name="check-entry" id="wd-media-recordings" />
                    <label htmlFor="wd-media-recordings">Media Recordings</label> <br />
                
                    <input type="checkbox" name="check-entry" id="wd-student-annotation" />
                    <label htmlFor="wd-student-annotation">Student Annotation</label> <br />
                 
                    <input type="checkbox" name="check-entry" id="wd-file-upload" />
                    <label htmlFor="wd-file-upload">File Uploads</label>
                </td>
            </td>
        </tr> <br /> 

        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-assign-to">Assign: </label>
            </td> 

            <td align="left" valign="top">
                <td>
                    <label htmlFor="wd-assign-to">Assign to: </label>  
                        <input type="text" id="wd-assign-to" />
                </td> <br />
            
                <td>
                    <label htmlFor="wd-due-date">Due Date: </label> 
                        <input type="date" id="wd-due-date" />
                </td> <br /> 
            
                <tr>
                    <td>
                        <label htmlFor="wd-available-from">Available from</label> <br />
                        <input type="date" id="wd-available-from" />
                    </td>
                    
                    <td>
                        <label htmlFor="wd-available-until">Assignment Until</label><br />
                        <input type="date" id="wd-available-until" />
                    </td>
                </tr>
            </td> 
        </tr>
        <tr>
            <td align="right">
            <button>Cancel</button>
            <button>Save</button>
            </td>
        </tr>

      </table>

        
    </div>
);}
