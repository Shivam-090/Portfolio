import { useState, useCallback, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LoadingScreen   from './components/extra/LoadingScreen';
import Navbar          from './components/Navbar';
import Hero            from './components/Hero';
import IntroStrip      from './components/IntroStrip';
import Projects        from './components/Projects';
import HowIWork        from './components/HowIWork';
import SkillsMarquee   from './components/SkillsMarquee';
import Experience      from './components/Experience';
import Education       from './components/Education';
import ClosingCTA      from './components/ClosingCTA';
import Footer          from './components/Footer';
import ScrollToTop     from './components/extra/ScrollToTop';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const onLoadComplete = useCallback(() => {
    setLoaded(true);
    // Recalculate ScrollTrigger offsets once the loading screen slides out and layout settles
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);
  }, []);

  return (
    <>
      {/* Loading overlay — slides up when done */}
      <LoadingScreen onComplete={onLoadComplete} />

      <Navbar />

      <main>
        <Hero loaded={loaded} />
        <IntroStrip />
        <HowIWork />
        <SkillsMarquee />
        <Experience />
        <Education />
        <Projects />
        <ClosingCTA />
      </main>

      <Footer />

      <ScrollToTop />
    </>
  );
}
