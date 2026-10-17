import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { damping: 28, stiffness: 220 });
  const ringY = useSpring(dotY, { damping: 28, stiffness: 220 });

  /* bail early for touch / reduced-motion (static check) */
  const [disabled] = useState(() => {
    if (typeof window === 'undefined') return true;
    if (window.matchMedia('(hover: none)').matches) return true;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true;
    return false;
  });

  useEffect(() => {
    if (disabled) return;

    const onMove = (e) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      setVisible(true);
    };

    /* event delegation — works for elements added after mount */
    const onOver = (e) => {
      setHovering(!!e.target.closest('a, button, [data-cursor-hover]'));
    };

    const onDocLeave = () => setVisible(false);
    const onDocEnter = () => setVisible(true);

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    document.documentElement.addEventListener('mouseleave', onDocLeave);
    document.documentElement.addEventListener('mouseenter', onDocEnter);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      document.documentElement.removeEventListener('mouseleave', onDocLeave);
      document.documentElement.removeEventListener('mouseenter', onDocEnter);
    };
  }, [disabled, dotX, dotY]);

  if (disabled) return null;

  return (
    <>
      {/* Dot (instant follow) */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-fg pointer-events-none z-[9999]"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ opacity: { duration: 0.12 } }}
      />

      {/* Ring (spring-trailed) */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-fg/35 pointer-events-none z-[9998]"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: hovering ? 56 : 34,
          height: hovering ? 56 : 34,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          width: { type: 'spring', stiffness: 300, damping: 22 },
          height: { type: 'spring', stiffness: 300, damping: 22 },
          opacity: { duration: 0.12 },
        }}
      />
    </>
  );
}
