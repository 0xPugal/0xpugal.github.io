import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeading = ({ title, subtitle, className }: SectionHeadingProps) => {
  return (
    <div className={cn("text-center mb-16 animate-fade-in", className)}>
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full" />
    </div>
  );
};

export default SectionHeading;