import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface SkillBarProps {
  skill: string;
  percentage: number;
  delay?: number;
}

const SkillBar = ({ skill, percentage, delay = 0 }: SkillBarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedWidth, setAnimatedWidth] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setTimeout(() => {
              setAnimatedWidth(percentage);
            }, delay);
          }
        });
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById(`skill-${skill.replace(/\s+/g, '-')}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [percentage, delay, skill]);

  return (
    <div 
      id={`skill-${skill.replace(/\s+/g, '-')}`}
      className="space-y-2 animate-fade-in"
    >
      <div className="flex justify-between items-center">
        <p className="text-sm font-medium text-foreground">{skill}</p>
        <span className="text-xs text-muted-foreground font-mono">
          {animatedWidth}%
        </span>
      </div>
      <div className="skill-bar">
        <div 
          className={cn(
            "skill-progress",
            isVisible && "transition-all duration-1000 ease-out"
          )}
          style={{ 
            width: `${animatedWidth}%`,
            transitionDelay: `${delay}ms`
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;