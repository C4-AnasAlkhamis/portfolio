import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Welcome from "./component/welcome/Welcome";
import { useEffect } from "react";
import ChangePage from "./component/changePage/ChangePage";
import NavBar from "./component/navBar/NavBar";

function App() {
  const path = useNavigate();
  useEffect(() => {
    path("/welcome");
  }, []);
  return (
    <>
      <div className="app">
        <NavBar />
        <ChangePage />
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
