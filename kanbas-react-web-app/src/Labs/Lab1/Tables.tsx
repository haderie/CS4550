export default function Tables() {
    return (
      <div>
        <h3>Tables</h3>
        <table width="100%" border={1}>
          <thead>
            <tr>
              <th>Username</th>
              <th>Password</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Role</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>alice</td> <td>*****</td> <td>Alice</td>
              <td>Wonderland</td> <td>Student</td> <td>Edit | Remove</td>
            </tr>
            <tr>
              <td>bob</td> <td>*****</td> <td>Bob</td>
            </tr>
            <tr>
              <td>charlie</td> <td>*****</td> <td>Charlie</td>
              <td>Brown</td> <td>Admin</td> <td>Edit | Remove</td>
            </tr>
          </tbody>
        </table>
        <div id="wd-tables">
          <h4>Table Tag</h4>
          <table border={1} width="100%">
            <thead>
              <tr>
                <th>Quiz</th>
                <th>Topic</th>
                <th>Date</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Q1</td>
                <td>HTML</td>
                <td>2/3/21</td>
                <td>85</td>
              </tr>
              <tr>
                <td>Q2</td>
                <td>CSS</td>
                <td>2/10/21</td>
                <td>90</td>
              </tr>
              <tr>
                <td>Q3</td>
                <td>JavaScript</td>
                <td>2/17/21</td>
                <td>95</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3}>Average</td>
                <td>90</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }