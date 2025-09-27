import React, { useState } from 'react';
import sarah from '../assets/sarah.png';
import freshfork from '../assets/freshfork.png';
import wanderlink from '../assets/wanderlink.png';
import AI from '../assets/AI.png';
import django from '../assets/django.png';
import robocon from '../assets/robocon.png';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);

  const filters = ['All', 'AI/ML', 'Web Dev', 'Mobile', 'DevOps'];

  const projects = [
    {
      id: 1,
      title: 'WanderLink',
      shortDescription: 'A cross-platform travel application with AI-powered recommendations and real-time updates.',
      fullDescription: 'A comprehensive cross-platform application designed to enhance travel experiences by integrating AI-powered recommendations, seamless navigation, and real-time updates. Built with modern web and mobile frameworks, showcasing expertise in full-stack development, cross-platform deployment, database management, and user experience design.',
      category: 'Mobile',
      technologies: [
        { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
        { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
      ],
      image: wanderlink,
      status: 'Completed',
      github: 'https://github.com/balaji2k423',
      keyFeatures: [
        'AI-powered travel recommendations',
        'Cross-platform mobile app',
        'Real-time navigation updates',
        'Seamless user experience'
      ]
    },
    {
      id: 2,
      title: 'Online Chat Bot Ticketing System',
      shortDescription: 'Multilingual chatbot with Django integration for automated ticket processing.',
      fullDescription: 'Built a Rasa-based multilingual chatbot integrated with Django for comprehensive ticket processing. The system enables ticket requests, payments, and ticket generation with both text and speech support. Features include multilingual support (English/Tamil), automated ticket generation with QR codes, and performance monitoring through an admin panel.',
      category: 'AI/ML',
      technologies: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" }
      ],
      image: sarah,
      status: 'Completed',
      github: 'https://github.com/balaji2k423',
      keyFeatures: [
        'Multilingual chat support (English/Tamil)',
        'Automated ticket generation',
        'Payment gateway integration',
        'Speech-to-text capabilities'
      ]
    },
    {
      id: 3,
      title: 'Food Ordering Website',
      shortDescription: 'Complete food ordering platform with real-time tracking and agent management.',
      fullDescription: 'Built a comprehensive food ordering platform with user authentication, shopping cart functionality, Razorpay payment integration, and order assignment to delivery agents. The system includes real-time order tracking, status updates, push notifications, and an agent management system for efficient order processing.',
      category: 'Web Dev',
      technologies: [
        { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
      ],
      image: freshfork,
      status: 'Completed',
      github: 'https://github.com/balaji2k423/',
      keyFeatures: [
        'Real-time order tracking',
        'Razorpay payment integration',
        'Agent management system',
        'Push notifications'
      ]
    },
    {
      id: 4,
      title: 'AI PDF Extractor',
      shortDescription: 'Custom AI model for extracting structured and unstructured text from PDF documents.',
      fullDescription: 'Developed a custom AI model for extracting both structured and unstructured text from PDF documents. Implemented advanced NLP techniques for text cleaning, entity recognition, and contextual analysis to enhance extraction accuracy. Optimized performance using deep learning frameworks and integrated into a user-friendly interface for seamless document processing.',
      category: 'AI/ML',
      technologies: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
        { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" }
      ],
      image: AI,
      status: 'Completed',
      github: 'https://github.com/balaji2k423',
      keyFeatures: [
        'Advanced NLP text processing',
        'Entity recognition system',
        'Deep learning optimization',
        'User-friendly interface'
      ]
    },
    {
      id: 5,
      title: 'Robocon 2024 - Color Sorting Robot',
      shortDescription: 'Competition finalist robot with advanced object detection and color sorting capabilities.',
      fullDescription: 'Led the Robocon 2024 team to develop an intelligent color-sorting robot using Raspberry Pi 5 and advanced object detection algorithms. The robot successfully identifies, sorts, and categorizes objects based on color with high accuracy. Implemented computer vision techniques and embedded programming for real-time processing and autonomous operation.',
      category: 'AI/ML',
      technologies: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
        { name: "Raspberry Pi", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" },
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" }
      ],
      image: robocon,
      status: 'Completed',
      github: 'https://github.com/balaji2k423',
      keyFeatures: [
        'Real-time object detection',
        'Color-based sorting algorithm',
        'Raspberry Pi 5 integration',
        'Competition-grade precision'
      ]
    },
    {
      id: 6,
      title: 'Django REST API Framework',
      shortDescription: 'Scalable RESTful API architecture with advanced features and optimization.',
      fullDescription: 'Developed a comprehensive Django REST API framework with advanced authentication, rate limiting, caching, and monitoring capabilities. The API supports multiple data formats, includes comprehensive documentation, and features automated testing. Implemented microservices architecture patterns and deployed using Docker containers.',
      category: 'DevOps',
      technologies: [
        { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
      ],
      image: django,
      status: 'Completed',
      github: 'https://github.com/balaji2k423',
      keyFeatures: [
        'Scalable microservices architecture',
        'Advanced authentication system',
        'Docker containerization',
        'Comprehensive API documentation'
      ]
    }

    // ... Keep your projects array as is
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
<div className="min-h-screen">
      <section id="portfolio" className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="neon-text-gradient">Portfolio </span>
              <span className="text-white">Showcase</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Explore my journey through innovative projects and technical achievements
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeFilter === filter
                      ? 'neon-btn-primary'
                      : 'neon-btn-secondary'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="flex flex-wrap justify-center gap-6 w-full max-w-7xl mx-auto">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="flip-card"
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className="flip-card-inner"
                  style={{
                    transform: hoveredCard === project.id ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  }}
                >
                  {/* Front */}
                  <div className="flip-card-front">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                    <div className="p-4 flex flex-col justify-between h-[calc(100%-16rem)]">
                      <div>
                        <h3 className="text-lg font-bold">{project.title}</h3>
                        <p className="text-gray-400 text-sm">{project.shortDescription}</p>
                      </div>
                      {/* Technologies (front) */}
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <div
                            key={tech.name}
                            className="flex items-center gap-1 px-2 py-1 bg-gray-800/50 rounded-full"
                          >
                            <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
                            <span className="text-xs text-cyan-400">{tech.name}</span>
                          </div>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-800/50 rounded-full text-xs text-purple-400">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="flip-card-back p-4 flex flex-col">
                    <h3 className="text-lg font-bold text-cyan-400 mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-2 flex-grow">{project.fullDescription}</p>

                    {/* All Technologies (back) */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <div
                          key={tech.name}
                          className="flex items-center gap-1 px-2 py-1 bg-gray-800/50 rounded-full"
                        >
                          <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
                          <span className="text-xs text-cyan-400">{tech.name}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto py-2 px-4 neon-btn-primary text-sm inline-block text-center"
                    >
                      View on GitHub →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .flip-card {
            width: 300px;
            height: 400px;
            perspective: 1000px;
            border-radius: 1rem;
            background: none;
          }

          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.8s;
            transform-style: preserve-3d;
            border-radius: 1rem;
          }

          .flip-card-front,
          .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border-radius: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
          }

          .flip-card-back {
            transform: rotateY(180deg);
          }

          .neon-btn-primary {
            background: linear-gradient(135deg, #0891b2 0%, #0e7490 100%);
            color: white;
            border-radius: 0.5rem;
            text-decoration: none;
            display: inline-block;
          }

          .neon-btn-secondary {
            background: rgba(75, 85, 99, 0.5);
            color: #d1d5db;
            border-radius: 0.5rem;
          }

          .neon-text-gradient {
            background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}</style>
      </section>
    </div>
  );
};

export default Portfolio;
