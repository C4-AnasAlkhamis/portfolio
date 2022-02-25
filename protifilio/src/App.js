import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Welcome from "./component/welcome/Welcome";
import { useEffect } from "react";

function App() {
  const path = useNavigate();
  useEffect(() => {
    path("/welcome");
  }, []);
  return (
    <>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </>
  );
}

export default App;
