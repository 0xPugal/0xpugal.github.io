import Navigation from '@/components/Navigation';
import SectionHeading from '@/components/SectionHeading';
import SkillBar from '@/components/SkillBar';
import ExperienceCard from '@/components/ExperienceCard';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Linkedin, Twitter, Instagram, FileText, Coffee, Heart } from 'lucide-react';

const Index = () => {
  const technicalSkills = [
    { skill: 'Web Application Penetration Testing', percentage: 85 },
    { skill: 'Network Penetration Testing', percentage: 80 },
    { skill: 'API Security & Penetration Testing', percentage: 75 },
    { skill: 'Host Penetration Testing', percentage: 80 },
    { skill: 'Linux & Windows Privilege Escalation', percentage: 85 },
    { skill: 'Cloud Security (GCP, AWS)', percentage: 60 },
  ];

  const programmingSkills = [
    { skill: 'Bash / Shell Scripting', percentage: 90 },
    { skill: 'Python (Automation & Security Scripting)', percentage: 60 },
    { skill: 'Git & Version Control (GitHub, GitLab)', percentage: 80 },
    { skill: 'OWASP Top 10 & Secure Coding Practices', percentage: 80 },
    { skill: 'Linux System Administration & Hardening', percentage: 65 },
  ];

  const experiences = [
    {
      company: 'PitoWings',
      position: 'Cyber Security Engineer',
      duration: 'Feb 2025 - Present',
      responsibilities: [
        'Vulnerability Assessment and Penetration Testing',
        'Security Testing and Automation',
        'Report Writing and Documentation'
      ]
    },
    {
      company: 'Pentafox Technologies',
      position: 'Software Security Engineer Intern',
      duration: 'Nov 2022 - Jan 2023',
      responsibilities: [
        'Web Application Penetration Testing',
        'API Penetration Testing',
        'Report Writing and Documentation'
      ]
    }
  ];

  const projects = [
    {
      company: 'SubDomz',
      position: 'Subdomain Discovery Tool',
      duration: '',
      responsibilities: [
        'SubDomz is an automation tool for finding the subdomains of the given target or targets passively.',
        'It uses multiple tools and various online search engines and services in parallel to find subdomains effectively and sort and save them in an organized way.'
      ],
      link: 'https://github.com/0xPugal/SubDomz'
    },
    {
      company: 'KNOXSSer',
      position: 'XSS Scanner Tool',
      duration: '',
      responsibilities: [
        'KNOXSSer is a concise and effective bash script that leverages the KNOXSS API by Brute Logic for XSS scanning.',
        'Handles both single URLs and files with multiple URLs, with detailed JSON responses and supports parallel scanning and notifies upon successful XSS.'
      ],
      link: 'https://github.com/0xPugal/KNOXSSer'
    }
  ];

  const certifications = [
    {
      name: 'eJPT - Junior Penetration Tester',
      issuer: 'INE Security(FKA e-Learn Security)',
      date: 'July 17, 2024',
      link: 'https://certs.ine.com/8e4eacb8-78aa-4a38-b2e2-8df57f3480be'
    },
    {
      name: 'Certified AppSec Pentester (CAPen)',
      issuer: 'The SecOps Group',
      date: 'July 18, 2024',
      link: 'https://drive.google.com/file/d/1UgXMlu2kmFFPiZs8evWx9KzTPPgkRaAu/view?usp=sharing'
    },
    {
      name: 'ICCA - INE Certified Cloud Associate',
      issuer: 'INE Security(FKA e-Learn Security)',
      date: 'November 18, 2024',
      link: 'https://certs.ine.com/c7961293-2730-4072-b385-f170b515f5b3#acc.kTG8LdAv'
    },
    {
      name: 'Certified AppSec Practitioner (CAP)',
      issuer: 'The SecOps Group',
      date: 'December 2022',
      link: 'https://drive.google.com/file/d/1O9WeKLuYVWgeLGAIKia9i2kHxWHu0fqz/view?usp=sharing'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Engineering (Computer Science and Engineering)',
      institution: 'K. S. Rangasamy College of Technology',
      location: 'Tiruchengode, Tamil Nadu',
      duration: '2020 - 2024'
    },
    {
      degree: 'Higher Secondary',
      institution: 'SSRM Hr Sec School',
      location: 'Karuppur, Salem, Tamil Nadu',
      duration: '2018 - 2020'
    },
    {
      degree: 'Matriculation (SSLC)',
      institution: 'Swami Vivekanandha Vidhyalaya Matric Hr Sec School',
      location: 'Kadayampatti, Salem, Tamil Nadu',
      duration: '2017 - 2018'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 section-gradient">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center animate-slide-in-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="block text-success mb-2">Hey There!</span>
                <span className="text-gradient">I'm Pugalarasan</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Bug Bounty Hunter | Cyber Security Researcher
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild className="cyber-glow">
                  <a href="https://drive.google.com/file/d/1Sj4dJZ18YJaOALGY9lr9UbJfYGc9Zy-s/view?usp=sharing" target="_blank">
                    <FileText className="mr-2 h-4 w-4" />
                    Resume
                  </a>
                </Button>
                <Button variant="outline" asChild className="cyber-border">
                  <a href="https://0xPugal.medium.com" target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    My Blog
                  </a>
                </Button>
              </div>
              <div className="mt-10">
                <div className="relative z-10 bg-card/50 backdrop-blur-sm rounded-2xl p-8 cyber-border inline-block">
                  <h2 className="text-2xl font-bold mb-4 text-gradient">Cyber Security Engineer</h2>
                  <p className="text-muted-foreground">
                    Specialized in Vulnerability Assessment, Penetration Testing, Red Teaming, and Security Automation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading title="About Me" />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">
                Hi, I am Pugalarasan and here are some details about me 👇
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I am a cybersecurity researcher with hands-on experience in web, API, host, and network penetration testing.
                </p>
                <p>
                  I have a strong command of Linux and Bash scripting, enabling me to automate security assessments and streamline workflows.
                </p>
                <p>
                  I actively contribute to open-source security projects and continuously enhance my skills to stay ahead of evolving threats. Currently, I am working as a cybersecurity engineer at PITOWINGS, where I focus on securing applications and infrastructures.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-xl font-semibold mb-4">Connect with Me</h4>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" asChild className="cyber-border">
                  <a href="https://www.linkedin.com/in/0xPugal/" target="_blank">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" asChild className="cyber-border">
                  <a href="https://www.github.com/0xPugal/" target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" asChild className="cyber-border">
                  <a href="https://twitter.com/0xPugal" target="_blank">
                    <Twitter className="mr-2 h-4 w-4" />
                    Twitter
                  </a>
                </Button>
                <Button variant="outline" asChild className="cyber-border">
                  <a href="https://www.instagram.com/0xPugal" target="_blank">
                    <Instagram className="mr-2 h-4 w-4" />
                    Instagram
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 section-gradient">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading title="Technical Skills" />
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-primary">Security Testing</h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <SkillBar 
                    key={skill.skill} 
                    skill={skill.skill} 
                    percentage={skill.percentage}
                    delay={index * 100}
                  />
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-8 text-accent">Programming & Tools</h3>
              <div className="space-y-6">
                {programmingSkills.map((skill, index) => (
                  <SkillBar 
                    key={skill.skill} 
                    skill={skill.skill} 
                    percentage={skill.percentage}
                    delay={index * 100 + 300}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading title="Experience" />
          
          <div className="grid lg:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <ExperienceCard {...exp} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 section-gradient">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading title="Projects" />
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <ExperienceCard {...project} isProject={true} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading title="Certifications & Courseworks" />
          
          <div className="grid lg:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 cyber-border card-hover">
                <h4 className="text-xl font-bold mb-2">{cert.name}</h4>
                <p className="text-warning font-semibold mb-2">{cert.issuer}</p>
                <p className="text-muted-foreground text-sm mb-4">{cert.date}</p>
                <Button variant="outline" size="sm" asChild>
                  <a href={cert.link} target="_blank">
                    <ExternalLink className="mr-2 h-3 w-3" />
                    Verify Certificate
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 section-gradient">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading title="Education" />
          
          <div className="grid lg:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <Card key={index} className="p-6 cyber-border card-hover">
                <h4 className="text-lg font-bold mb-3">{edu.degree}</h4>
                <p className="text-foreground font-medium mb-2">{edu.institution}</p>
                <p className="text-muted-foreground text-sm mb-2">{edu.location}</p>
                <Badge variant="outline" className="text-xs">{edu.duration}</Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading title="Achievements" />
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-6 cyber-border card-hover">
              <h4 className="text-xl font-bold mb-3 text-warning">Hacktoberfest 2022, 2023 & 2024</h4>
              <p className="text-muted-foreground">
                Digital Rewards and Badges for participating and contributing to open-source projects in Hacktoberfest conducted by Digital Ocean.
              </p>
            </Card>
            
            <Card className="p-6 cyber-border card-hover">
              <h4 className="text-xl font-bold mb-3 text-warning">Bug Bounty Hunter</h4>
              <p className="text-muted-foreground">
                For finding security vulnerabilities and responsibly disclose it and awarded with Monetary rewards, Goodies and Hall of Fame.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-20 px-4 section-gradient">
        <div className="container mx-auto max-w-4xl text-center">
          <SectionHeading 
            title="Support My Work" 
            subtitle="If you appreciate my work, consider supporting me through the options below."
          />
          
          <div className="flex flex-wrap justify-center gap-6">
            <Button asChild className="cyber-glow">
              <a href="https://www.buymeacoffee.com/0xpugal" target="_blank">
                <Coffee className="mr-2 h-4 w-4" />
                Buy Me a Coffee
              </a>
            </Button>
            
            <Button variant="outline" asChild className="cyber-border">
              <a href="https://www.paypal.com/paypalme/0xpugal" target="_blank">
                <Heart className="mr-2 h-4 w-4" />
                PayPal
              </a>
            </Button>
            
            <Button variant="outline" asChild className="cyber-border">
              <a href="https://github.com/sponsors/0xpugal" target="_blank">
                <Github className="mr-2 h-4 w-4" />
                GitHub Sponsor
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://www.linkedin.com/in/0xPugal/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/0xPugal" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              GitHub
            </a>
            <a href="https://twitter.com/0xPugal" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              Twitter
            </a>
            <a href="https://instagram.com/0xPugal" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              Instagram
            </a>
          </div>
          <p className="text-xl font-bold text-gradient">Pugalarasan</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
