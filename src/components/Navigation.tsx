import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const menuItems = [
    { id: 'home', label: 'Home', number: '01' },
    { id: 'about', label: 'About', number: '02' },
    { id: 'skills', label: 'Skills', number: '03' },
    { id: 'experience', label: 'Experience', number: '04' },
    { id: 'projects', label: 'Projects', number: '05' },
    { id: 'certifications', label: 'Certification', number: '06' },
    { id: 'education', label: 'Education', number: '07' },
    { id: 'achievements', label: 'Achievements', number: '08' },
    { id: 'support', label: 'Support-Me', number: '09' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Update active section based on scroll position
      const sections = menuItems.map(item => item.id);
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-muted z-50">
        <div 
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 group",
                  "hover:bg-card hover:cyber-glow",
                  activeSection === item.id && "bg-card cyber-glow"
                )}
              >
                <span className={cn(
                  "text-xs font-mono opacity-60 group-hover:opacity-100 transition-opacity",
                  activeSection === item.id && "opacity-100 text-primary"
                )}>
                  {item.number}
                </span>
                <span className={cn(
                  "text-sm font-medium opacity-60 group-hover:opacity-100 transition-all duration-300",
                  "group-hover:translate-x-1",
                  activeSection === item.id && "opacity-100 text-primary translate-x-1"
                )}>
                  {item.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-6 right-6 z-50 lg:hidden p-3 bg-card rounded-lg cyber-border"
      >
        <div className="w-6 h-6 flex flex-col justify-center space-y-1">
          <span className={cn(
            "block h-0.5 bg-foreground transition-all duration-300",
            isMenuOpen && "rotate-45 translate-y-1.5"
          )} />
          <span className={cn(
            "block h-0.5 bg-foreground transition-all duration-300",
            isMenuOpen && "opacity-0"
          )} />
          <span className={cn(
            "block h-0.5 bg-foreground transition-all duration-300",
            isMenuOpen && "-rotate-45 -translate-y-1.5"
          )} />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-background/95 backdrop-blur-sm" />
          <div className="absolute right-0 top-0 h-full w-80 bg-card p-6 shadow-xl">
            <div className="mt-16 space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "flex items-center space-x-3 p-4 w-full rounded-lg transition-all duration-300",
                    "hover:bg-muted",
                    activeSection === item.id && "bg-muted text-primary"
                  )}
                >
                  <span className="text-xs font-mono opacity-60">{item.number}</span>
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;