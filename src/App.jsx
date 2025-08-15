import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./page/Home"));
const Project = lazy(() => import("./page/Projects"));
const Blog = lazy(() => import("./page/Blog"));

import Mainlayout from "./layouts/Mainlayout";
import Notfound from "./page/Notfound";
import Contact from "./page/Contact";
import View from "./page/view";
import Privacy from "./page/Privacy";
import TechStackPage from "./page/TechStackPage";

function App() {
  return (
    <>
      <Router>
        <Suspense
          fallback={
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-[#FF6A00]"></div>
            </div>
          }
        >
          <Routes>
            <Route element={<Mainlayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/view/:ParamId" element={<View />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/TechStack" element={<TechStackPage />} />
              <Route path="*" element={<Notfound />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
