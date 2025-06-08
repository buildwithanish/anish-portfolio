
import React from 'react';
import { motion } from 'framer-motion';
import profileData from '@/data/profile';

const SkillsSection: React.FC = () => {
  const { skills } = profileData;
  
  // Group skills by category
  const categories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);
  
  // Skip rendering if no skills
  if (skills.length === 0) return null;
  
  // Category titles formatted
  const categoryTitles: Record<string, string> = {
    frontend: "Frontend",
    backend: "Backend",
    design: "Design",
    other: "Other"
  };
  
  return (
    <section id="skills" className="section">
      <div className="container mx-auto">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(categories).map(([category, categorySkills], index) => (
            <motion.div 
              key={category}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <h3 className="text-2xl font-space mb-4">{categoryTitles[category] || category}</h3>
              <div className="space-y-4">
                {categorySkills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}/5</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div 
                        className="neon-gradient h-2 rounded-full"
                        style={{ width: `${(skill.level / 5) * 100}%` }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(skill.level / 5) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 + skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
