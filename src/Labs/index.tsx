import { Routes, Route, Navigate } from "react-router";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import TOC from "./TOC";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import store from "./store";
import { Provider } from "react-redux";
import Lab5 from "./Lab5";

export default function Labs() {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <TOC />
        <h1>Haregewoyen Aderie</h1>
        <h1>Section 1</h1>
        <h2>Welcome to Web Dev!!</h2>
        <h2>Labs</h2>
        <Routes>
          <Route path="/" element={<Navigate to="Labs" />} />
          <Route path="/Lab1" element={<Lab1 />} />
          <Route path="/Lab2" element={<Lab2 />} />
          <Route path="/Lab3/*" element={<Lab3 />} />
          <Route path="/Lab4/*" element={<Lab4 />} />
          <Route path="/Lab5/*" element={<Lab5 />} />
        </Routes>
      </div>
    </Provider>
  );
}
