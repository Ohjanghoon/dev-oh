import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skill from "./components/Experiences/Skill";
import About from "./components/About";
import Experiences from "./components/Experiences/Experiences";
import Projects from "./components/Projects";

const App = () => {
  return (
    <BrowserRouter>
      {/* Header는 모든 페이지에서 공통으로 렌더링 */}
      <Header />
      <Routes>
        {/* 메인 경로에 Hero와 Skill을 렌더링 */}
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <Skill />
            </main>
          }
        />
        {/* About 페이지 */}
        <Route path="/about" element={<About />} />
        {/* Experiences 페이지 */}
        <Route path="/experiences" element={<Experiences />} />
        {/* Projects 페이지 */}
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
