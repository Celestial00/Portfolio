import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Project from "./page/Projects";
import Blog from "./page/Blog";
import Mainlayout from "./layouts/Mainlayout";
import Notfound from "./page/Notfound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Mainlayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<Notfound/>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
