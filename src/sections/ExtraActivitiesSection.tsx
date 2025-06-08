
import React from 'react';
import { motion } from 'framer-motion';
import profileData from '@/data/profile';
import { Heart, CalendarDays } from 'lucide-react';

const ExtraActivitiesSection: React.FC = () => {
  const { extraActivities } = profileData;
  
  // Skip rendering if no extra activities
  if (extraActivities.length === 0) return null;
  
  return (
    <section id="extra" className="section">
      <div className="container mx-auto">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Volunteering & Other Activities
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {extraActivities.map((activity, index) => (
            <motion.div 
              key={`${activity.organization}-${index}`}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
                  <Heart className="h-5 w-5 text-pink-500" />
                </div>
                
                <div>
                  <h3 className="text-lg font-bold">{activity.title}</h3>
                  <p className="text-accent">{activity.organization}</p>
                  
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                    <CalendarDays size={14} />
                    <span>
                      {new Date(activity.startDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short'
                      })} - {activity.endDate === 'Present' ? 'Present' : new Date(activity.endDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short'
                      })}
                    </span>
                  </div>
                  
                  <p className="mt-2">{activity.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraActivitiesSection;
