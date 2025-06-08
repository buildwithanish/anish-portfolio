
import React from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import ThemeToggle from '@/components/ThemeToggle';
import ParticlesBackground from '@/components/ParticlesBackground';
import Footer from '@/components/Footer';
import PrintLayout from '@/components/PrintLayout';

// Import all sections
import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import SkillsSection from '@/sections/SkillsSection';
import ExperienceSection from '@/sections/ExperienceSection';
import ProjectsSection from '@/sections/ProjectsSection';
import EducationSection from '@/sections/EducationSection';
import AchievementsSection from '@/sections/AchievementsSection';
import ExtraActivitiesSection from '@/sections/ExtraActivitiesSection';
import ContactSection from '@/sections/ContactSection';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen snap-y snap-mandatory overflow-y-auto">
        <Navbar />
        <ParticlesBackground />
        
        <main className="no-print">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
          <AchievementsSection />
          <ExtraActivitiesSection />
          <ContactSection />
        </main>
        
        <PrintLayout />
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
