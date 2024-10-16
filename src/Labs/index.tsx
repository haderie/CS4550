import { Routes, Route, Navigate } from "react-router";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import TOC from "./TOC";
import Lab3 from "./Lab3";

export default function Labs() {
  return (
    <div>
      <table>
        <tr>
          <td align="left" valign="top">
            <TOC />
          </td>

          <h1>Haregewoyen Aderie</h1>
          <h1>Section 1</h1>
          <h2>Welcome to Web Dev!!</h2>
          <h2>Labs</h2>
          <Routes>
            <Route path="/" element={<Navigate to="Labs" />} />
            <Route path="/Lab1" element={<Lab1 />} />
            <Route path="/Lab2" element={<Lab2 />} />
            <Route path="/Lab3" element={<Lab3 />} />
          </Routes>

          {/* <Lab1 />
            <Lab2 />
            <h2>Lab 3</h2>
            <h2>Lab 4</h2>
            <h2>Lab 5</h2> */}
        </tr>
      </table>
    </div>
  );
}
