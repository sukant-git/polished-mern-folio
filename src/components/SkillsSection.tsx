
import { Code, Database, Globe, Wrench } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React.js", level: 90 },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Bootstrap", level: 85 }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend Technologies",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 88 },
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "RESTful APIs", level: 92 },
        { name: "JWT Authentication", level: 85 }
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Webpack", level: 80 },  
        { name: "Jest Testing", level: 85 },
        { name: "Postman", level: 90 }
      ],
      color: "from-purple-500 to-pink-500"
    }
  ];

  const floatingSkills = [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Express', icon: '🚀' },
    { name: 'JavaScript', icon: '💛' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Tailwind', icon: '🎨' },
    { name: 'Git', icon: '📦' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Docker', icon: '🐳' }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Floating Skills Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingSkills.map((skill, index) => (
          <div
            key={index}
            className="absolute text-2xl animate-bounce opacity-20 hover:opacity-40 transition-opacity duration-300"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              animationDelay: `${index * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <div className="flex flex-col items-center">
              <span className="text-3xl mb-1">{skill.icon}</span>
              <span className="text-xs text-gray-500 font-medium">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive skill set in modern web development technologies and best practices
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              <h3 className={`text-xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
