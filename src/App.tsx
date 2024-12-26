import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skill from "./components/Skill";
import About from "./components/About";

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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
