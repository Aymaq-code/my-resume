import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScrollAnimationProvider } from "./context/ScrollAnimationProvider";
import { ResumeProvider } from "./context/ResumeContext";
import HomePage from "./pages/HomePage";
import ResumePage from "./pages/ResumePage";
import ProjectsPage from "./pages/ProjectsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <ResumeProvider>
      <ScrollAnimationProvider>
        <BrowserRouter basename="/my-resume">
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </ScrollAnimationProvider>
    </ResumeProvider>
  );
}

export default App;
