import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import Play2CaseStudy from './pages/Play2CaseStudy';
import GameModAICaseStudy from './pages/GameModAICaseStudy';
import DeltAICaseStudy from './pages/DeltAICaseStudy';
import AdminPage from './pages/AdminPage';

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash, pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/play2" element={<Play2CaseStudy />} />
        <Route path="/projects/gamemodai" element={<GameModAICaseStudy />} />
        <Route path="/projects/deltai" element={<DeltAICaseStudy />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </>
  );
}
