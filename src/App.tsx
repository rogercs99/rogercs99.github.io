import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import Play2CaseStudy from './pages/Play2CaseStudy';
import GameModAICaseStudy from './pages/GameModAICaseStudy';

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
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Nav />
      <ScrollToHash />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/play2" element={<Play2CaseStudy />} />
          <Route path="/projects/gamemodai" element={<GameModAICaseStudy />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
