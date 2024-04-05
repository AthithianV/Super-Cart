import { BrowserRouter, Route, Routes } from "react-router-dom";
import Settings from "./pages/Settings/settings";
import View from "./pages/view/view.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Settings />}></Route>
        <Route path="/view" element={<View />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
