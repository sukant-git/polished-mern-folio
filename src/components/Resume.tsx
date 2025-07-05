
import { Download, ArrowLeft } from 'lucide-react';

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Your_Name_Resume.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <button 
            onClick={() => window.close()}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
          
          <h1 className="text-xl font-bold">Resume</h1>
          
          <button
            onClick={handleDownload}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </button>
        </div>
      </div>

      {/* Resume Content */}
      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-white text-gray-900 rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Your Name</h1>
            <p className="text-xl text-blue-600 mb-4">MERN Stack Developer</p>
            <div className="flex justify-center space-x-4 text-sm text-gray-600">
              <span>your.email@gmail.com</span>
              <span>|</span>
              <span>+1 (555) 123-4567</span>
              <span>|</span>
              <span>Your City, Country</span>
            </div>
          </div>

          {/* Professional Summary */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4 border-b-2 border-blue-600 pb-2">Professional Summary</h2>
            <p className="text-gray-700 leading-relaxed">
              Passionate and dedicated MERN Stack Developer with 3+ years of experience in building scalable web applications. 
              Proficient in MongoDB, Express.js, React, and Node.js with a strong foundation in modern JavaScript frameworks 
              and cloud technologies. Experienced in full-stack development, API design, and database optimization.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4 border-b-2 border-blue-600 pb-2">Technical Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Frontend</h3>
                <p className="text-sm text-gray-700">React.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS, Bootstrap</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Backend</h3>
                <p className="text-sm text-gray-700">Node.js, Express.js, MongoDB, MySQL, RESTful APIs, JWT Authentication</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Tools & Technologies</h3>
                <p className="text-sm text-gray-700">Git/GitHub, Docker, AWS, Webpack, Jest, Postman</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Other</h3>
                <p className="text-sm text-gray-700">Agile/Scrum, CI/CD, Responsive Design, Performance Optimization</p>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4 border-b-2 border-blue-600 pb-2">Professional Experience</h2>
            
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">Full Stack Developer</h3>
                <span className="text-sm text-gray-600">2022 - Present</span>
              </div>
              <p className="text-blue-600 mb-2">Tech Company Inc.</p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Developed and maintained 10+ web applications using MERN stack</li>
                <li>Improved application performance by 40% through code optimization</li>
                <li>Collaborated with cross-functional teams in Agile environment</li>
                <li>Implemented secure authentication and authorization systems</li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">Frontend Developer</h3>
                <span className="text-sm text-gray-600">2021 - 2022</span>
              </div>
              <p className="text-blue-600 mb-2">Web Solutions Ltd.</p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Built responsive web interfaces using React.js and modern CSS</li>
                <li>Integrated RESTful APIs and managed application state</li>
                <li>Ensured cross-browser compatibility and mobile responsiveness</li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4 border-b-2 border-blue-600 pb-2">Education</h2>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">Bachelor of Science in Computer Science</h3>
                <p className="text-blue-600">University Name</p>
              </div>
              <span className="text-sm text-gray-600">2017 - 2021</span>
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-xl font-bold mb-4 border-b-2 border-blue-600 pb-2">Key Projects</h2>
            
            <div className="mb-4">
              <h3 className="text-lg font-semibold">E-Commerce Platform</h3>
              <p className="text-sm text-gray-700 mb-2">
                Full-stack e-commerce application with user authentication, payment processing, and admin dashboard.
              </p>
              <p className="text-xs text-blue-600">Technologies: React, Node.js, MongoDB, Stripe API</p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold">Task Management App</h3>
              <p className="text-sm text-gray-700 mb-2">
                Collaborative task management tool with real-time updates and team collaboration features.
              </p>
              <p className="text-xs text-blue-600">Technologies: React, Express.js, Socket.io, PostgreSQL</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
