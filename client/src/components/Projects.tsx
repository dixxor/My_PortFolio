import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Fair Vehicle Price Prediction",
    description: "Car price prediction using ML and image analysis for accurate market valuations.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    alt: "Modern car dashboard with digital interface",
    tech: ["React", "Node.js", "Python", "Random Forest", "InceptionV3", "GPT API", "MongoDB"],
    github: "https://github.com/dixxor/DrivePrice_FinalYear_project.git",
    demo: "#"
  },
  {
    title: " Green Supermarket – Java-Based E-commerce Platform",
    description: "Collaboratively built a web-based supermarket management system supporting online shopping.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    alt: "Modern supermarket with multiple screens displaying platform",
    tech: ["Java", "Swing", "JSP", "Servlets", "MySQL", "PayPal", "API"],
    github: "#",
    demo: "#"
  },
  {
    title: "Furniture Visualizer",
    description: "Desktop app to preview 3D furniture in real rooms using augmented reality.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    alt: "Modern minimalist room interior with furniture",
    tech: ["React", "React Three Fiber", "JavaScript" , "3D Modeling"],
    github: "https://github.com/dixxor/HCI_project.git",
    demo: "#"
  },
  {
    title: "BookNest",
    description: "Online book renting and recommendation system with intelligent matching algorithms.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    alt: "Modern library with books and digital interface",
    tech: ["MERN", "Tailwind", "ML"],
    github: "https://github.com/dixxor/BOOKnest.git",
    demo: "#"
  },
  {
    title: "PetPal",
    description: "Mobile platform that connects homeless pets with potential adopters through smart matching.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    alt: "Adorable pets with digital interface overlay",
    tech: ["React Native", "Firebase", "MongoDB"],
    github: "https://github.com/dixxor/MAD_55.git",
    demo: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Featured Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work in full-stack development, machine learning, and AI applications.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              viewport={{ once: true }}
              className="glassmorphism rounded-2xl overflow-hidden transition-all duration-500 group"
            >
              <div className="overflow-hidden relative">
                <motion.img 
                  src={project.image}
                  alt={project.alt}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                />
                
                {/* Project status indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute top-4 right-4 glassmorphism-dark rounded-full px-3 py-1"
                >
                  <span className="text-xs font-mono text-green-400">● Live</span>
                </motion.div>
                
                {/* Hover overlay with tech stack preview */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm"
                >
                  <div className="text-center">
                    <div className="text-white font-semibold mb-2">View Project</div>
                    <div className="flex gap-2 justify-center">
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-white/20 rounded text-xs">{tech}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-800 rounded-full text-xs font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                  >
                    <Github size={16} /> Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.1 }}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
