
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      shortDescription: "Full-stack MERN application with payment integration",
      fullDescription: "A comprehensive e-commerce platform built with MERN stack featuring user authentication, product management, shopping cart functionality, secure payment processing with Stripe integration, order tracking, and an intuitive admin dashboard for inventory management.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      githubUrl: "https://github.com/yourusername/project1",
      liveUrl: "https://yourproject1.com",
      featured: true
    },
    {
      title: "Task Management App",
      shortDescription: "Collaborative task management with real-time updates",
      fullDescription: "A powerful collaborative task management application featuring real-time updates using Socket.io, drag-and-drop task organization, team collaboration tools, project timelines, notification system, and advanced filtering options with Redux for state management.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React", "Express.js", "Socket.io", "Redux", "PostgreSQL"],
      githubUrl: "https://github.com/yourusername/project2",
      liveUrl: "https://yourproject2.com",
      featured: true
    },
    {
      title: "Social Media Dashboard",
      shortDescription: "Analytics dashboard for social media management",
      fullDescription: "Comprehensive social media analytics dashboard with data visualization, post scheduling capabilities, engagement metrics tracking, multi-platform integration, automated reporting, and detailed performance insights using Chart.js for interactive graphs.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "Chart.js", "MongoDB", "Express"],
      githubUrl: "https://github.com/yourusername/project3",
      liveUrl: "https://yourproject3.com",
      featured: false
    },
    {
      title: "Weather App",
      shortDescription: "Responsive weather app with location-based forecasts",
      fullDescription: "Modern weather application with location-based forecasts, interactive maps, detailed weather analytics, 7-day forecasts, weather alerts, favorite locations management, and beautiful responsive design optimized for all devices.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["React", "OpenWeather API", "Mapbox", "CSS3"],
      githubUrl: "https://github.com/yourusername/project4",
      liveUrl: "https://yourproject4.com",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative h-80 perspective-1000"
            >
              {/* Flip Card Container */}
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                
                {/* Front Side - Image, Title, and Tech Stack */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden border border-gray-800">
                  <div className="relative h-full">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    
                    {/* Project Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {project.title}
                      </h3>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-gray-800/80 backdrop-blur-sm text-blue-400 rounded-full text-xs border border-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back Side - Project Details */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden bg-gray-900/95 backdrop-blur-sm border border-gray-700 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                      {project.fullDescription}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
