
import { Code, Database, Server, Smartphone } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Server,
      title: "Backend Development", 
      description: "Node.js, Express.js, RESTful APIs, GraphQL",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "MongoDB, MySQL, PostgreSQL, Redis",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "React Native, Progressive Web Apps",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Software Developer at Zoho Corporation with a deep love for creating 
              user-friendly websites that are both simple and elegant yet scalable. As a lifelong 
              learner, I'm proficient in data structures and algorithms.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm also interested in Machine Learning, and I adore experimenting with new ideas and 
              putting together fantastic projects. I've always been interested in robotics and built 
              around seven of them when I was 15 years old.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a Crypto junkie and a Pianist contrasting right? I've been fascinated by technology 
              since I was a child and grown up as a Tech Savvy and Built few Enterprise level Softwares.
            </p>

            <div className="pt-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-blue-400 font-semibold">Experience:</span>
                  <p className="text-gray-300">3+ Years</p>
                </div>
                <div>
                  <span className="text-blue-400 font-semibold">Location:</span>
                  <p className="text-gray-300">Your City, Country</p>
                </div>
                <div>
                  <span className="text-blue-400 font-semibold">Email:</span>
                  <p className="text-gray-300">your.email@example.com</p>
                </div>
                <div>
                  <span className="text-blue-400 font-semibold">Status:</span>
                  <p className="text-green-400">Available for freelance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 group hover:scale-105"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
