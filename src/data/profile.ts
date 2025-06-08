
// Profile Data Type Definitions
export type SocialLink = {
  platform: string;
  url: string;
  icon: string; // Icon name from lucide-react
};

export type Skill = {
  name: string;
  level: number; // 1-5
  category: "frontend" | "backend" | "design" | "other";
};

export type Experience = {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  highlights: string[];
  tags?: string[];
  logo?: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
};

export type Education = {
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  gpa?: string;
  achievements?: string[];
  logo?: string;
};

export type Achievement = {
  title: string;
  issuer?: string;
  date: string;
  description?: string;
};

export type ExtraActivity = {
  title: string;
  organization: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
};

// Main Profile Data
export interface ProfileData {
  basics: {
    name: string;
    title: string;
    summary: string;
    location: string;
    email: string;
    phone?: string;
    website?: string;
    availableForHire: boolean;
    avatar?: string;
  };
  socialLinks: SocialLink[];
  skills: Skill[];
  experiences: Experience[];
  projects: Project[];
  education: Education[];
  achievements: Achievement[];
  extraActivities: ExtraActivity[];
  resumeUrl?: string;
}

// Default Profile Data (Example)
const profileData: ProfileData = {
  basics: {
    name: "Prakash Gupta",
    title: "Full Stack Developer",
    summary: "Passionate developer with 5+ years of experience building web applications with React, Node.js, and modern cloud infrastructure. Focused on creating elegant solutions to complex problems.",
    location: "San Francisco, CA",
    email: "prakash@example.com",
    phone: "+99999999999",
    website: "https://anish.cyberrakhwala.com/",
    availableForHire: true,
    avatar: "/placeholder.svg",
  },
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://anish.cyberrakhwala.com/",
      icon: "github"
    },
    {
      platform: "LinkedIn",
      url: "https://anish.cyberrakhwala.com/",
      icon: "linkedin"
    },
    {
      platform: "Twitter",
      url: "https://anish.cyberrakhwala.com/",
      icon: "twitter"
    },
    {
      platform: "Email",
      url: "mailto:prakash@example.com",
      icon: "mail"
    }
  ],
  skills: [
    { name: "React", level: 5, category: "frontend" },
    { name: "TypeScript", level: 4, category: "frontend" },
    { name: "Node.js", level: 4, category: "backend" },
    { name: "GraphQL", level: 3, category: "backend" },
    { name: "AWS", level: 3, category: "backend" },
    { name: "Figma", level: 3, category: "design" },
    { name: "Tailwind CSS", level: 5, category: "frontend" },
    { name: "Next.js", level: 4, category: "frontend" },
    { name: "MongoDB", level: 3, category: "backend" },
    { name: "PostgreSQL", level: 3, category: "backend" },
    { name: "Docker", level: 3, category: "other" },
    { name: "Git", level: 4, category: "other" }
  ],
  experiences: [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp",
      location: "San Francisco, CA",
      startDate: "2021-01",
      endDate: "Present",
      description: "Lead developer for the company's main SaaS product.",
      highlights: [
        "Rebuilt the frontend architecture using React and TypeScript, improving performance by 40%",
        "Implemented CI/CD pipelines with GitHub Actions, reducing deployment time by 60%",
        "Mentored junior developers and conducted code reviews"
      ],
      tags: ["React", "TypeScript", "Redux", "Jest", "GitHub Actions"],
      logo: "/placeholder.svg"
    },
    {
      title: "Full Stack Developer",
      company: "StartupX",
      location: "Remote",
      startDate: "2018-04",
      endDate: "2020-12",
      description: "Worked on multiple projects for this fast-paced startup.",
      highlights: [
        "Built RESTful APIs using Node.js and Express",
        "Developed front-end interfaces with React and styled-components",
        "Integrated third-party services including Stripe and AWS"
      ],
      tags: ["React", "Node.js", "Express", "MongoDB", "AWS"],
      logo: "/placeholder.svg"
    },
    {
      title: "Web Developer",
      company: "DesignAgency",
      location: "San Francisco, CA",
      startDate: "2016-09",
      endDate: "2018-03",
      description: "Created websites and web applications for various clients.",
      highlights: [
        "Developed responsive websites for 10+ clients",
        "Worked directly with clients to gather requirements and provide technical solutions",
        "Maintained and updated legacy PHP applications"
      ],
      tags: ["HTML/CSS", "JavaScript", "WordPress", "PHP"],
      logo: "/placeholder.svg"
    }
  ],
  projects: [
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      image: "/placeholder.svg",
      liveUrl: "https://example-ecommerce.com",
      repoUrl: "https://github.com/alexmorgan/ecommerce",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A Kanban-style task management application with real-time updates and team collaboration features.",
      tags: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
      image: "/placeholder.svg",
      liveUrl: "https://example-tasks.com",
      repoUrl: "https://github.com/alexmorgan/tasks",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current conditions and forecasts for multiple locations.",
      tags: ["React", "OpenWeather API", "Chart.js"],
      image: "/placeholder.svg",
      liveUrl: "https://example-weather.com",
      repoUrl: "https://github.com/alexmorgan/weather",
      featured: false
    },
    {
      title: "Portfolio Template",
      description: "A customizable portfolio template for developers.",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      image: "/placeholder.svg",
      liveUrl: "https://example-portfolio.com",
      repoUrl: "https://github.com/alexmorgan/portfolio",
      featured: true
    }
  ],
  education: [
    {
      institution: "University of California, Berkeley",
      degree: "Bachelor of Science",
      field: "Computer Science",
      location: "Berkeley, CA",
      startDate: "2012-09",
      endDate: "2016-05",
      gpa: "3.8/4.0",
      achievements: [
        "Dean's List (2013-2016)",
        "Senior thesis: 'Optimizing React Applications for Performance'"
      ],
      logo: "/placeholder.svg"
    },
    {
      institution: "Frontend Masters",
      degree: "Professional Certificate",
      field: "Advanced React Patterns",
      location: "Online",
      startDate: "2019-01",
      endDate: "2019-03",
      logo: "/placeholder.svg"
    }
  ],
  achievements: [
    {
      title: "Hackathon Winner",
      issuer: "TechCrunch Disrupt",
      date: "2019-09",
      description: "First place for developing a real-time collaboration tool in 48 hours."
    },
    {
      title: "Speaker",
      issuer: "ReactConf",
      date: "2020-11",
      description: "Presented 'Building Accessible React Applications' to an audience of 500+ developers."
    },
    {
      title: "Open Source Contributor",
      issuer: "React Community",
      date: "2018 - Present",
      description: "Regular contributor to React ecosystem libraries with 50+ merged PRs."
    }
  ],
  extraActivities: [
    {
      title: "Mentor",
      organization: "Code for Good",
      startDate: "2019-06",
      endDate: "Present",
      description: "Mentoring underrepresented groups in tech, providing career guidance and technical advice."
    },
    {
      title: "Volunteer Developer",
      organization: "Non-Profit Technology Alliance",
      startDate: "2018-03",
      endDate: "2020-12",
      description: "Developed websites for local non-profits, helping them establish an online presence."
    }
  ],
  resumeUrl: "/placeholder.svg"
};

export default profileData;
