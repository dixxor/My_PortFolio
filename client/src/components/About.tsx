import { motion } from "framer-motion";

const techStack = [
  "React", "Node.js", "Dart", "Express.js", "MongoDB", "Tailwind CSS", 
  "Python", "TensorFlow", "MATLAB", "Git", "AWS S3"
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="fade-in"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">About Me</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            I'm a passionate Final Year Software Engineering Student with a strong foundation in full-stack development 
            and artificial intelligence. I love creating innovative solutions that combine cutting-edge technology with 
            intuitive user experiences.
          </p>
          <p className="text-gray-400 leading-relaxed mb-8">
            Based in Moratuwa, Sri Lanka, I specialize in the MERN stack and have extensive experience with machine 
            learning frameworks. I'm always eager to take on new challenges and push the boundaries of what's possible 
            in software development.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                className="glassmorphism p-3 rounded-lg text-center transition-transform duration-300"
              >
                <span className="font-mono text-sm text-gray-300">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="fade-in flex justify-center"
        >
          <div className="relative">
            {/* Main workspace image */}
            <motion.img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Software development workspace with code on screen" 
              className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 w-full max-w-md" 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Floating tech icons */}
            <motion.div
              className="absolute -top-4 -right-4 glassmorphism rounded-full p-3"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="text-2xl">⚛️</div>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-4 glassmorphism rounded-full p-3"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-2xl">🐍</div>
            </motion.div>
            
            <motion.div
              className="absolute top-1/2 -right-8 glassmorphism rounded-full p-2"
              animate={{ x: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-xl">🟢</div>
            </motion.div>
            
            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 glassmorphism rounded-2xl opacity-20"></div>
            
            {/* Code snippet overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-4 left-4 right-4 glassmorphism-dark rounded-lg p-3"
            >
              <div className="font-mono text-xs text-green-400">
                <div className="text-gray-500">// Always learning & building</div>
                <div className="text-white">const passion = "coding";</div>
                <div className="text-blue-400">console.log("Hello World!");</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
