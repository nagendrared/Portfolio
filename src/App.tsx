import React, { useState, useEffect } from 'react';
import { Github, Mail, MapPin, ExternalLink, Award, BookOpen, Code, Database, Menu, X, Linkedin, Twitter, Download, ChevronUp, Palette, Coffee, Brain, Cpu, Globe, Server} from 'lucide-react';
import Profile from './profile.jpg'
import Resume from './Nagendra_Resume.pdf';

// Replace profile image with a placeholder from Unsplash
const profileImage = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

function MyComponent() {
  return <Server size={32} color="blue" />;
}

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
   const skills = [
    { name: 'C', icon: Code },
    { name: 'Java', icon: Coffee },
    { name: 'Python', icon: Code },
    { name: 'HTML', icon: Globe },
    { name: 'CSS', icon: Palette },
    { name: 'JavaScript', icon: Code },
    { name: 'React Js', icon: Code },
    { name: 'SQL', icon: Database },
    { name: 'Machine Learning', icon: Brain },
    { name: 'Flask', icon: Server}
  ];

  const projects = [
    // Web Development Projects
    {
      id: 1,
      category: 'web-development',
      title: 'Weather Dashboard',
      description: 'A web application designed to provide users with accurate and real-time weather information for their chosen locations.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80',
      technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
      github: 'https://github.com/nagendrared/weather_dashboard',
      demo: 'https://nagendrared.github.io/weather_dashboard/'
    },
    {
      id: 2,
      category: 'web-development',
      title: 'ShopHub',
      description: 'A modern e-commerce platform built with React, featuring a responsive design, product catalog, shopping cart, and secure checkout process.',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80',
      technologies: ['React', 'Tailwind CSS'],
      github: 'https://github.com/nagendrared/shophub',
      demo: 'https://shophub-amber.vercel.app/'
    },
    // Machine Learning Projects
    {
      id: 3,
      category: 'machine-learning',
      title: 'Loan Eligibility Prediction',
      description: 'A machine learning-based web application that predicts loan eligibility using financial and demographic data. Features a user-friendly interface, real-time API integration, and optimized performance.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80',
      technologies: ['Python', 'Machine Learning', 'Flask', 'React'],
      github: 'https://github.com/nagendrared/loan-eligibility-predictor',
      demo: 'https://loan-eligibility-predictor-five.vercel.app/'
    },
    {
      id: 4,
      category: 'machine-learning',
      title: 'Object Detection System',
      description: 'A real-time object detection system using deep learning, capable of identifying and tracking multiple objects in images and video streams.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80',
      technologies: ['Python', 'Deep Learning', 'Flask', 'React'],
      github: 'https://github.com/nagendrared/object-detection',
      demo: null
    },
    // NLP Projects
    {
      id: 5,
      category: 'nlp',
      title: 'Emotion Detection System',
      description: 'An advanced natural language processing system that analyzes text to detect and classify human emotions using machine learning techniques.',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80',
      technologies: ['Python', 'NLP', 'Machine Learning', 'Flask'],
      github: 'https://github.com/nagendrared/EMOTION-DETECTION-SYSTEM',
      demo: '#'
    },
    {
      id: 6,
      category: 'nlp',
      title: 'Next Word Prediction',
      description: 'A sophisticated NLP model that predicts the next word in a sequence using deep learning techniques and natural language understanding.',
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80',
      technologies: ['Python', 'Deep Learning', 'NLP', 'TensorFlow'],
      github: 'https://github.com/nagendrared/Next_Word_Prediction',
      demo: '#'
    }
  ];

  const filterButtons = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'web-development', label: 'Web Development', count: projects.filter(p => p.category === 'web-development').length },
    { id: 'machine-learning', label: 'Machine Learning', count: projects.filter(p => p.category === 'machine-learning').length },
    { id: 'nlp', label: 'Natural Language Processing', count: projects.filter(p => p.category === 'nlp').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/30 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <a href="#" className="text-2xl font-bold text-white">KNR</a>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-white hover:text-purple-300 transition-colors">About</a>
              <a href="#education" className="text-white hover:text-purple-300 transition-colors">Education</a>
              <a href="#projects" className="text-white hover:text-purple-300 transition-colors">Projects</a>
              <a href="#skills" className="text-white hover:text-purple-300 transition-colors">Skills</a>
              <a href="#contact" className="text-white hover:text-purple-300 transition-colors">Contact</a>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <a href="#about" className="block text-white hover:text-purple-300 transition-colors">About</a>
              <a href="#education" className="block text-white hover:text-purple-300 transition-colors">Education</a>
              <a href="#projects" className="block text-white hover:text-purple-300 transition-colors">Projects</a>
              <a href="#skills" className="block text-white hover:text-purple-300 transition-colors">Skills</a>
              <a href="#contact" className="block text-white hover:text-purple-300 transition-colors">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative group">
                <img 
                  src={Profile}
                  alt="Profile"
                  className="w-64 h-64 rounded-full border-4 border-purple-500 shadow-xl animate-fade-in group-hover:border-purple-300 transition-all"
                />
                <div className="absolute inset-0 rounded-full bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Nagendra Reddy
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up">
              Software Developer & Data Science Enthusiast
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <a href="#contact" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition-all transform hover:scale-105">
                Contact Me
              </a>
              <a href="#projects" className="bg-transparent border-2 border-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-600/20 transition-all">
                View Projects
              </a>
              <a href={Resume} className="bg-white/10 text-white px-8 py-3 rounded-full hover:bg-white/20 transition-all inline-flex items-center gap-2">
                <Download size={20} /> Resume
              </a>
            </div>
            <div className="flex justify-center gap-6">
              <a href="https://github.com/nagendrared" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/keshavareddy-nagendra-reddy-672127256/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://x.com/Nagendra2004K" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-400 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto text-gray-300 space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a Computer Science and Engineering (Data Science) student aspiring to become a Full-Stack Developer. 
              Passionate about both frontend and backend development, I focus on building efficient and scalable applications. 
              Proficient in solving Data Structures and Algorithms (DSA) problems, I strive to write optimized code. 
              Always eager to learn and take on new challenges!
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-purple-900/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Education</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm hover:transform hover:scale-105 transition-all">
              <h3 className="text-2xl font-bold text-purple-300">B.Tech - Computer Science and Engineering (Data Science)</h3>
              <p className="text-gray-300">Rajeev Gandhi Memorial College of Engineering and Technology, Nandyal</p>
              <p className="text-purple-400 font-semibold">CGPA: 8.82</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm hover:transform hover:scale-105 transition-all">
              <h3 className="text-2xl font-bold text-purple-300">Intermediate - MPC</h3>
              <p className="text-gray-300">Rao's Junior College, Nandyal</p>
              <p className="text-purple-400 font-semibold">CGPA: 9.45</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm hover:transform hover:scale-105 transition-all">
              <h3 className="text-2xl font-bold text-purple-300">SSC</h3>
              <p className="text-gray-300">Sri Sarada Vidyalayam High School, Nandyal</p>
              <p className="text-purple-400 font-semibold">CGPA: 9.45</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">My Projects</h2>
  
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filterButtons.map((button) => (
              <button
                key={button.id}
                onClick={() => setActiveFilter(button.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105 ${
                  activeFilter === button.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {button.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className={`grid gap-8 max-w-6xl mx-auto ${
            filteredProjects.length === 1 
              ? 'grid-cols-1 justify-items-center max-w-md' 
              : filteredProjects.length === 2 
              ? 'grid-cols-1 md:grid-cols-2 justify-items-center max-w-4xl' 
              : 'md:grid-cols-2 lg:grid-cols-3'
          }`}>
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all group">
                <div className="relative">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 text-sm">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300"
                    >
                      <Github size={16} /> GitHub
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-purple-900/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Skills</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <div key={skill.name} className="bg-white/10 rounded-lg p-6 text-center backdrop-blur-sm hover:transform hover:scale-105 transition-all group">
                    <div className="flex flex-col items-center gap-3">
                      <IconComponent className="text-purple-400 group-hover:text-purple-300 transition-colors" size={32} />
                      <span className="text-purple-300 font-semibold group-hover:text-purple-400 transition-colors">{skill.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-purple-300 mb-4">Development</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Web Development</li>
                  <li>• Responsive Design</li>
                  <li>• API Integration</li>
                  <li>• Database Management</li>
                </ul>
              </div>
              <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-purple-300 mb-4">Tools</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Git & GitHub</li>
                  <li>• VS Code</li>
                  <li>• Postman</li>
                  <li>• Jupyter Notebook</li>
                </ul>
              </div>
              <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-purple-300 mb-4">Soft Skills</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Problem Solving</li>
                  <li>• Team Collaboration</li>
                  <li>• Communication</li>
                  <li>• Time Management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Certifications</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm hover:transform hover:scale-105 transition-all">
              <div className="flex items-center gap-4">
                <Award className="text-purple-400" size={24} />
                <div>
                  <h3 className="text-xl font-bold text-white">AWS Certified Cloud Practitioner</h3>
                  <p className="text-purple-300">AWS</p>
                  <p className="text-gray-400 mt-2">Comprehensive understanding of AWS Cloud concepts, services, and deployment models.</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm hover:transform hover:scale-105 transition-all">
              <div className="flex items-center gap-4">
                <Code className="text-purple-400" size={24} />
                <div>
                  <h3 className="text-xl font-bold text-white">Responsive Web Design</h3>
                  <p className="text-purple-300">freeCodeCamp</p>
                  <p className="text-gray-400 mt-2">Mastery in creating responsive and mobile-first web designs.</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm hover:transform hover:scale-105 transition-all">
              <div className="flex items-center gap-4">
                <BookOpen className="text-purple-400" size={24} />
                <div>
                  <h3 className="text-xl font-bold text-white">Java Programming: Basic Skills</h3>
                  <p className="text-purple-300">edX</p>
                  <p className="text-gray-400 mt-2">Fundamental Java programming concepts and best practices.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Contact Me</h2>
          <div className="max-w-xl mx-auto">
            <div className="space-y-6">
              <a href="mailto:keshavareddynagendra@gmail.com" className="flex items-center gap-4 bg-white/10 rounded-lg p-6 backdrop-blur-sm hover:bg-white/20 transition-all group">
                <Mail className="text-purple-400 group-hover:text-purple-300" size={24} />
                <span className="text-gray-300 group-hover:text-white transition-colors">keshavareddynagendra@gmail.com</span>
              </a>
              <div className="flex items-center gap-4 bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <MapPin className="text-purple-400" size={24} />
                <span className="text-gray-300">Nandyal, Andhra Pradesh, India</span>
              </div>
              <div className="flex justify-center space-x-6">
                <a href="https://github.com/nagendrared" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">
                  <Github size={28} />
                </a>
                <a href="https://www.linkedin.com/in/keshavareddy-nagendra-reddy-672127256/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">
                  <Linkedin size={28} />
                </a>
                <a href="https://x.com/Nagendra2004K" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">
                  <Twitter size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/70 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center space-x-6 mb-6">
              <a href="https://github.com/nagendrared" className="text-purple-400 hover:text-purple-300 transition-colors">
                <Github size={24} />
              </a>
              <a href="mailto:keshavareddynagendra@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <p className="text-gray-400">© {new Date().getFullYear()} Keshavareddy Nagendra Reddy. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-all transform hover:scale-110 z-50"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
}

export default App;
