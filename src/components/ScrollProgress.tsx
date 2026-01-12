import { useEffect, useState } from 'react';

export const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-muted/30 pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-primary via-accent to-secondary transition-all duration-150 ease-out shadow-lg"
        style={{ width: `${scrollProgress}%` }}
      >
        <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-r from-transparent to-white/30 dark:to-white/20"></div>
      </div>
    </div>
  );
};
