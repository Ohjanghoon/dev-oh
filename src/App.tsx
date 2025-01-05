import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Header from "./components/layouts/Header";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Experiences from "./pages/Experiences";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <BrowserRouter>
      {/* Header는 모든 페이지에서 공통으로 렌더링 */}
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Hero />
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
