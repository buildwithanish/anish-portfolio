
import React from 'react';
import profileData from '@/data/profile';

const PrintLayout: React.FC = () => {
  const { basics, experiences, education, skills, projects } = profileData;
  
  return (
    <div className="hidden print:block p-8 bg-white text-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">{basics.name}</h1>
          <p className="text-xl">{basics.title}</p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <div>{basics.location}</div>
            <div>|</div>
            <div>{basics.email}</div>
            {basics.phone && (
              <>
                <div>|</div>
                <div>{basics.phone}</div>
              </>
            )}
            {basics.website && (
              <>
                <div>|</div>
                <div>{basics.website}</div>
              </>
            )}
          </div>
        </div>
        
        <div className="mb-6">
          <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">Summary</h2>
          <p>{basics.summary}</p>
        </div>
        
        <div className="mb-6">
          <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">Experience</h2>
          <div className="space-y-4">
            {experiences.map((exp, i) => (
              <div key={i}>
                <div className="flex justify-between font-medium">
                  <div>{exp.title} - {exp.company}</div>
                  <div>{new Date(exp.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - {
                    exp.endDate === 'Present' 
                      ? 'Present' 
                      : new Date(exp.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
                  }</div>
                </div>
                <div className="text-sm text-gray-600">{exp.location}</div>
                <p className="mt-1">{exp.description}</p>
                {exp.highlights.length > 0 && (
                  <ul className="list-disc list-inside mt-1">
                    {exp.highlights.map((highlight, j) => (
                      <li key={j} className="text-sm">{highlight}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">Education</h2>
          <div className="space-y-4">
            {education.map((edu, i) => (
              <div key={i}>
                <div className="flex justify-between font-medium">
                  <div>{edu.institution}</div>
                  <div>{new Date(edu.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - {
                    edu.endDate === 'Present' 
                      ? 'Present' 
                      : new Date(edu.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
                  }</div>
                </div>
                <div>{edu.degree} in {edu.field}</div>
                <div className="text-sm text-gray-600">{edu.location}</div>
                {edu.gpa && <div className="text-sm">GPA: {edu.gpa}</div>}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">Skills</h2>
          <div className="grid grid-cols-3 gap-2">
            {Object.entries(skills.reduce((acc, skill) => {
              if (!acc[skill.category]) {
                acc[skill.category] = [];
              }
              acc[skill.category].push(skill);
              return acc;
            }, {} as Record<string, typeof skills>)).map(([category, categorySkills], i) => (
              <div key={i}>
                <h3 className="font-medium">{category}</h3>
                <ul>
                  {categorySkills.map((skill, j) => (
                    <li key={j}>{skill.name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">Projects</h2>
          <div className="space-y-3">
            {projects.filter(p => p.featured).map((project, i) => (
              <div key={i}>
                <div className="font-medium">{project.title}</div>
                <p className="text-sm">{project.description}</p>
                {project.tags && (
                  <div className="text-sm text-gray-600">
                    {project.tags.join(', ')}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintLayout;
