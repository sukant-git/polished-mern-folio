
import { Linkedin, Github, Twitter, Facebook, Youtube, Mail, User, Code, Briefcase, MessageSquare } from 'lucide-react';

const VerticalNav = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/yourprofile", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/yourprofile", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com/yourprofile", label: "Twitter" },
    { icon: Facebook, href: "https://facebook.com/yourprofile", label: "Facebook" },
    { icon: Youtube, href: "https://youtube.com/yourchannel", label: "YouTube" },
    { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=your.email@gmail.com", label: "Gmail" },
  ];

  const navItems = [
    { icon: User, href: "#about", label: "About" },
    { icon: Code, href: "#skills", label: "Skills" },
    { icon: Briefcase, href: "#projects", label: "Projects" },
    { icon: MessageSquare, href: "#contact", label: "Contact" },
  ];

  const handleMailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=your.email@gmail.com', '_blank');
  };

  return (
    <nav className="fixed left-0 top-0 h-full w-16 bg-gray-900/95 backdrop-blur-sm border-r border-gray-800 z-50 flex flex-col items-center py-6">
      {/* Navigation Items */}
      <div className="flex flex-col space-y-4 mb-8">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="p-3 rounded-lg bg-gray-800/50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 group relative"
            title={item.label}
          >
            <item.icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
            <span className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {item.label}
            </span>
          </a>
        ))}
      </div>

      {/* Vertical Divider */}
      <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>

      {/* Social Links */}
      <div className="flex flex-col space-y-3 mt-8">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={social.label === 'Gmail' ? handleMailClick : undefined}
            className="p-2 rounded-lg bg-gray-800/30 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 group relative"
            title={social.label}
          >
            <social.icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
            <span className="absolute left-12 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {social.label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default VerticalNav;
