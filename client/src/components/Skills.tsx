import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 90, icon: "⚛️", category: "Frontend" },
  { name: "Node.js", level: 85, icon: "🟢", category: "Backend" },
  { name: "Dart", level: 85, icon: "🎯", category: "Mobile" },
  { name: "MongoDB", level: 80, icon: "🍃", category: "Database" },
  { name: "Python", level: 85, icon: "🐍", category: "Language" },
  { name: "TensorFlow", level: 75, icon: "🧠", category: "AI/ML" },
  { name: "Tailwind CSS", level: 90, icon: "💨", category: "Styling" },
  { name: "Git", level: 85, icon: "📚", category: "Tools" },
  { name: "AWS S3", level: 70, icon: "☁️", category: "Cloud" },
  { name: "Express.js", level: 88, icon: "🚀", category: "Backend" },
  { name: "MATLAB", level: 75, icon: "📊", category: "Analytics" }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Skills & Technologies</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Technologies I use to bring ideas to life and solve complex problems.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ 
              y: -10, 
              scale: 1.05,
              boxShadow: "0 25px 50px rgba(255,255,255,0.1)"
            }}
            viewport={{ once: true }}
            className="glassmorphism rounded-xl p-6 text-center transition-all duration-300 group relative overflow-hidden"
          >
            {/* Background gradient on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
            
            {/* Category tag */}
            <div className="absolute top-2 right-2 text-xs text-gray-500 font-mono">
              {skill.category}
            </div>
            
            {/* Animated icon */}
            <motion.div 
              className="text-4xl mb-4 relative z-10"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {skill.icon}
            </motion.div>
            
            <h3 className="font-semibold mb-3 relative z-10">{skill.name}</h3>
            
            {/* Animated progress bar */}
            <div className="w-full bg-gray-700 rounded-full h-2 relative z-10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-white via-gray-300 to-gray-400 h-2 rounded-full relative"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            </div>
            
            <motion.div 
              className="text-xs text-gray-400 mt-2 relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.5 }}
            >
              {skill.level}%
            </motion.div>
            
            {/* Floating particles on hover */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={false}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white/50 rounded-full"
                  style={{
                    left: `${30 + i * 20}%`,
                    top: `${40 + i * 10}%`,
                  }}
                  animate={{
                    y: [-20, -40, -20],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
