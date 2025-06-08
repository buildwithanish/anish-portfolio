
import React from 'react';
import { motion } from 'framer-motion';
import profileData from '@/data/profile';
import { Award, Calendar } from 'lucide-react';

const AchievementsSection: React.FC = () => {
  const { achievements } = profileData;
  
  // Skip rendering if no achievements
  if (achievements.length === 0) return null;
  
  return (
    <section id="achievements" className="section">
      <div className="container mx-auto">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Achievements
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div 
              key={`${achievement.title}-${index}`}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full neon-gradient flex items-center justify-center">
                  <Award className="h-5 w-5 text-white" />
                </div>
                
                <div>
                  <h3 className="text-lg font-bold">{achievement.title}</h3>
                  {achievement.issuer && (
                    <p className="text-accent">{achievement.issuer}</p>
                  )}
                  
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                    <Calendar size={14} />
                    <span>{achievement.date}</span>
                  </div>
                  
                  {achievement.description && (
                    <p className="mt-2">{achievement.description}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
