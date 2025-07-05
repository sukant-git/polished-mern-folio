
import VerticalNav from '../components/VerticalNav';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Vertical Navigation */}
      <VerticalNav />
      
      {/* Main Content with left margin for nav */}
      <div className="ml-16">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        
        {/* Footer */}
        <footer className="bg-gray-900 py-8 border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-8 text-center">
            <p className="text-gray-400">
              © 2024 Your Name. Made with ❤️ using React & Tailwind CSS
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
