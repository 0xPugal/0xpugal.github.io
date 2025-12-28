import { cn } from '@/lib/utils';

interface ExperienceCardProps {
  company: string;
  position: string;
  duration: string;
  responsibilities: string[];
  isProject?: boolean;
  link?: string;
}

const ExperienceCard = ({ 
  company, 
  position, 
  duration, 
  responsibilities, 
  isProject = false,
  link 
}: ExperienceCardProps) => {
  const CardContent = () => (
    <div className="bg-card rounded-xl p-6 cyber-border card-hover h-full">
      <h4 className="text-xl font-bold text-foreground mb-2">
        {company}
      </h4>
      <p className="text-warning font-semibold mb-2">{position}</p>
      <p className="text-muted-foreground text-sm mb-4">{duration}</p>
      <ul className="space-y-2">
        {responsibilities.map((item, index) => (
          <li key={index} className="text-sm text-muted-foreground flex items-start">
            <span className="text-primary mr-2 mt-1">▸</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  if (isProject && link) {
    return (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block h-full"
      >
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
};

export default ExperienceCard;