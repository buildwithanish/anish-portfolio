
import React from 'react';
import { motion } from 'framer-motion';
import profileData from '@/data/profile';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const { experiences } = profileData;
  
  // Skip rendering if no experiences
  if (experiences.length === 0) return null;
  
  return (
    <section id="experience" className="section">
      <div className="container mx-auto">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={`${exp.company}-${index}`}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute top-16 bottom-0 left-6 md:left-8 w-px bg-border"></div>
              )}
              
              <div className="flex flex-col md:flex-row">
                {/* Timeline dot */}
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full neon-gradient p-0.5 z-10 bg-background">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                      {exp.logo ? (
                        <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-xl font-bold">{exp.company.charAt(0)}</span>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-grow ml-4 md:ml-8 glass-card p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-accent">{exp.company}</p>
                    </div>
                    
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <CalendarDays size={14} />
                        <span>
                          {new Date(exp.startDate).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'short'
                          })} - {exp.endDate === 'Present' ? 'Present' : new Date(exp.endDate).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'short'
                          })}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="mb-4">{exp.description}</p>
                  
                  {exp.highlights.length > 0 && (
                    <ul className="list-disc list-inside space-y-2 mb-4">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                  
                  {exp.tags && exp.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.tags.map((tag, i) => (
                        <Badge key={i} variant="outline">{tag}</Badge>
                      ))}
                    </div>
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

export default ExperienceSection;
