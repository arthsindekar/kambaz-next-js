export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label><br />
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
        your Web application running on Netlify. The landing page should include
        the following: Your full name and section Links to each of the lab
        assignments Link to the Kanbas application Links to all relevant source
        code repositories The Kanbas application should include a link to
        navigate back to the landing page.
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
                <select id="wd-group">
                    <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                </select>
            </td>
        </tr>
        <tr>
            <td>
                <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
                <select id="wd-display-grade-as">
                    <option  value="Points">Points</option>
                    <option selected value="Percentage">Percentage</option>
                </select>
            </td>
        </tr>
        <tr>
            <td>
                <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
                <select id="wd-submission-type">
                    <option  value="Offline">Offline</option>
                    <option selected value="Online">Online</option>
                </select>
            </td>
        </tr>
        <tr>
            <td></td>
            <td>
                <label>Online Entry Options</label><br />
                <input type="checkbox" name="online" id="wd-text-entry"/>
                <label htmlFor="wd-text-entry">Text Entry</label><br />
                <input type="checkbox" name="online" id="wd-website-url"/>
                <label htmlFor="wd-website-url">Website URL</label><br />
                <input type="checkbox" name="online" id="wd-media-recordings"/>
                <label htmlFor="wd-media-recordings">Media Recordings</label><br />
                <input type="checkbox" name="online" id="wd-student-annotation"/>
                <label htmlFor="wd-student-annotation">Student Annotation</label><br />
                <input type="checkbox" name="online" id="wd-file-upload"    />
                <label htmlFor="wd-file-upload">File Upload</label><br />
            </td>
        </tr>
        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-assign-to">Assign</label>
            </td>
            <td>
                <label htmlFor="wd-assign-to">Assign to</label> <br />
                <input type="text" id="wd-assign-to" value="Everyone"/>
            </td>

        </tr>
        <tr>
            <td></td>
            <td>
                <label htmlFor="wd-due-date">Due</label><br />
                <input type="date" id ="wd-due-date" value="2024-05-13"/>
            </td>
        </tr>
        <tr>
            <td>
            </td>
            <td>
                <label htmlFor="wd-available-from">Available From</label><br />
                <input type="date" value="2024-05-06" id="wd-available-from" />
            </td>
            <td>
                <label htmlFor="wd-available-until">Until</label><br />
                <input type="date" value="2024-05-20" id="wd-available-until" />
            </td>
        </tr>
        
        <tr>
            <td colSpan={3}><hr /></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td align="right">    
                <button>Cancel</button>{" "}
                <button>Save</button>
            </td>
        </tr>
      </table>
    </div>
  );
}
