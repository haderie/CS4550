import { Navigate, HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Kanbas from "./Kanbas";
import Labs from "./Labs";
import store from "./Kanbas/store";
import { Provider } from "react-redux";

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/Kanbas" />} />
            <Route path="/Kanbas/*" element={<Kanbas />} />
            <Route path="/Labs/*" element={<Labs />} />
          </Routes>
        </div>
      </Provider>
    </HashRouter>
  );
}

export default App;
