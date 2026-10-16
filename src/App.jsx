import { useState, useCallback } from 'react';
import LoadingScreen   from './components/LoadingScreen';
import Navbar          from './components/Navbar';
import Hero            from './components/Hero';
import IntroStrip      from './components/IntroStrip';
import FeaturedProject from './components/FeaturedProject';
import ProjectsList    from './components/ProjectsList';
import HowIWork        from './components/HowIWork';
import SkillsMarquee   from './components/SkillsMarquee';
import Experience      from './components/Experience';
import Education       from './components/Education';
import ClosingCTA      from './components/ClosingCTA';
import Footer          from './components/Footer';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const onLoadComplete = useCallback(() => setLoaded(true), []);

  return (
    <>
      {/* Loading overlay — slides up when done */}
      <LoadingScreen onComplete={onLoadComplete} />

      <Navbar />

      <main>
        <Hero loaded={loaded} />
        <IntroStrip />
        <FeaturedProject />
        <ProjectsList />
        <HowIWork />
        <SkillsMarquee />
        <Experience />
        <Education />
        <ClosingCTA />
      </main>

      <Footer />
    </>
  );
}
