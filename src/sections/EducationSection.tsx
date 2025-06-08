
import React from 'react';
import { motion } from 'framer-motion';
import profileData from '@/data/profile';
import { CalendarDays, MapPin, Award } from 'lucide-react';

const EducationSection: React.FC = () => {
  const { education } = profileData;
  
  // Skip rendering if no education entries
  if (education.length === 0) return null;
  
  return (
    <section id="education" className="section">
      <div className="container mx-auto">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div 
              key={`${edu.institution}-${index}`}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-secondary overflow-hidden">
                    {edu.logo ? (
                      <img src={edu.logo} alt={edu.institution} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-xl font-bold">{edu.institution.charAt(0)}</span>
                    )}
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-xl font-bold">{edu.institution}</h3>
                  <p className="text-accent">{edu.degree} in {edu.field}</p>
                  
                  <div className="flex flex-col sm:flex-row sm:justify-between mt-2">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <CalendarDays size={14} />
                      <span>
                        {new Date(edu.startDate).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short'
                        })} - {edu.endDate === 'Present' ? 'Present' : new Date(edu.endDate).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short'
                        })}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin size={14} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {(edu.gpa || (edu.achievements && edu.achievements.length > 0)) && (
                <div className="mt-4 border-t border-border pt-4">
                  {edu.gpa && (
                    <div className="flex items-center gap-2 mb-2">
                      <Award size={16} className="text-accent" />
                      <span>GPA: {edu.gpa}</span>
                    </div>
                  )}
                  
                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="mt-2">
                      <h4 className="font-medium mb-2">Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
