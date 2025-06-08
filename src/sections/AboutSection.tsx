import React from 'react';
import { motion } from 'framer-motion';
import profileData from '@/data/profile';
import { Mail, MapPin, Globe, Github, Linkedin, Twitter } from 'lucide-react';

// ✅ Step 1: Platform icon mapping
const platformIcons: Record<string, JSX.Element> = {
  GitHub: <Github className="w-5 h-5" />,
  LinkedIn: <Linkedin className="w-5 h-5" />,
  Twitter: <Twitter className="w-5 h-5" />,
  Email: <Mail className="w-5 h-5" />,
};

const AboutSection: React.FC = () => {
  const { basics, socialLinks } = profileData;

  return (
    <section id="about" className="section">
      <div className="container mx-auto">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 🧑‍💻 Left Side - About */}
          <motion.div 
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass-card p-6">
              <p className="text-lg mb-6">
                {basics.summary}
              </p>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span>{basics.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-accent" />
                  <a href={`mailto:${basics.email}`} className="hover:underline">
                    {basics.email}
                  </a>
                </div>
                {basics.website && (
                  <div className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-accent" />
                    <a href={basics.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {new URL(basics.website).hostname}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* 🔗 Right Side - Social Links + Status */}
          <motion.div 
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>

              {/* ✅ Fixed Social Links */}
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 rounded-md bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                    title={link.platform}
                  >
                    {platformIcons[link.platform] || null}
                    <span>{link.platform}</span>
                  </a>
                ))}
              </div>

              {/* 💼 Status Badge */}
              <div className="mt-6 p-4 border border-border rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Status</span>
                  <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium ${
                    basics.availableForHire 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' 
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                  }`}>
                    <span className={`w-2 h-2 rounded-full ${
                      basics.availableForHire ? 'bg-green-400' : 'bg-yellow-400'
                    }`}></span>
                    {basics.availableForHire ? 'Available for hire' : 'Currently busy'}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
