import { motion } from "framer-motion";

export default function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <motion.div 
      className={`${className} relative`}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <svg 
        viewBox="0 0 120 120" 
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer ring with gradient */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="50%" stopColor="#9ca3af" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.6" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Background circle */}
        <motion.circle
          cx="60"
          cy="60"
          r="55"
          fill="none"
          stroke="url(#logoGradient)"
          strokeWidth="2"
          className="opacity-30"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        {/* Inner geometric pattern */}
        <motion.path
          d="M30 45 L60 30 L90 45 L75 75 L45 75 Z"
          fill="none"
          stroke="url(#logoGradient)"
          strokeWidth="1.5"
          className="opacity-50"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        
        {/* D letter */}
        <motion.path
          d="M35 40 L35 80 L50 80 Q65 80 65 60 Q65 40 50 40 Z"
          fill="url(#logoGradient)"
          filter="url(#glow)"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        />
        
        {/* R letter */}
        <motion.path
          d="M70 40 L70 80 M70 40 L85 40 Q90 40 90 50 Q90 60 85 60 L70 60 M85 60 L90 80"
          fill="none"
          stroke="url(#logoGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        />
        
        {/* Central dot */}
        <motion.circle
          cx="60"
          cy="60"
          r="3"
          fill="url(#logoGradient)"
          filter="url(#glow)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        />
      </svg>
    </motion.div>
  );
}