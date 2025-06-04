import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const { toast } = useToast();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    setStatus("sending");

    emailjs.sendForm(
      "service_tb1g5xp",        // Your Service ID
      "template_6w57hcq",       // Your Template ID
      form.current,
      "E_QBhErFMJEcXrRqY"       // Your Public Key
    )
    .then(
      () => {
        setStatus("success");
        form.current?.reset();
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
      },
      () => {
        setStatus("error");
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    );
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Get In Touch</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Interested in collaborating or have a project in mind? Let's connect and build something amazing together.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Floating form background */}
            <div className="absolute inset-0 glassmorphism rounded-2xl opacity-50"></div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6 relative z-10 p-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <Input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    required
                    className="w-full bg-black/50 border-gray-600 focus:border-white glassmorphism text-white placeholder-gray-400 transition-all duration-300"
                  />
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <Input
                    type="email"
                    name="user_email"
                    placeholder="your.email@example.com"
                    required
                    className="w-full bg-black/50 border-gray-600 focus:border-white glassmorphism text-white placeholder-gray-400 transition-all duration-300"
                  />
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    required
                    className="w-full bg-black/50 border-gray-600 focus:border-white glassmorphism text-white placeholder-gray-400 resize-none transition-all duration-300"
                  />
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full glassmorphism hover:animate-glow bg-white/10 hover:bg-white/20 text-white font-medium transition-all duration-300 relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    <span className="relative z-10">
                      {status === "sending" ? "Sending..." : "Send Message"}
                    </span>
                  </Button>
                </motion.div>
              </motion.div>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="text-gray-400 w-6 h-6" />
                  <span className="text-gray-300">dinoda12345@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-gray-400 w-6 h-6" />
                  <span className="text-gray-300">Moratuwa, Sri Lanka</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Social Links</h3>
              <div className="flex space-x-6">
                <motion.a
                  href="https://github.com/dixxor"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="glassmorphism p-4 rounded-lg hover:animate-glow transition-all duration-300"
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/dinoda-rathnayake"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="glassmorphism p-4 rounded-lg hover:animate-glow transition-all duration-300"
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  href="mailto:dinoda12345@gmail.com"
                  whileHover={{ scale: 1.1 }}
                  className="glassmorphism p-4 rounded-lg hover:animate-glow transition-all duration-300"
                >
                  <Mail size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
