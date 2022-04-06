import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Welcome from "./component/welcome/Welcome";
import { useEffect, createContext, useState } from "react";
import ChangePage from "./component/changePage/ChangePage";
import NavBar from "./component/navBar/NavBar";
import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import Fun from "./component/fun/Fun";
import Project from "./component/project/Project"
export const LinkContext = createContext();
function App() {
  const [links, setLinks] = useState(0);
  const path = useNavigate();
  useEffect(() => {
    path("/welcome");
  }, []);

  
  return (
    <>
      <div className="app">
        <LinkContext.Provider value={{ links, setLinks }}>
          <NavBar />
          <ChangePage />
          <Routes>
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/fun" element={<Fun />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </LinkContext.Provider>
      </div>
    </>
  );
}

export default App;
