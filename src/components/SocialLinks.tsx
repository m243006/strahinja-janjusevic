import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Github, Instagram, Linkedin } from "lucide-react";

const SocialLinks = () => {
  const socialLinks = [
    {
      icon: <Instagram className="w-8 h-8" />,
      name: "Instagram",
      url: "https://instagram.com/yourusername",
      color: "hover:text-pink-500"
    },
    {
      icon: <Linkedin className="w-8 h-8" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      color: "hover:text-blue-500"
    },
    {
      icon: <Github className="w-8 h-8" />,
      name: "GitHub",
      url: "https://github.com/yourusername",
      color: "hover:text-purple-500"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {socialLinks.map((link, index) => (
          <motion.div key={index} variants={item}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="group hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <motion.div
                    className={`flex flex-col items-center space-y-4 ${link.color}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {link.icon}
                    <span className="text-lg font-semibold">{link.name}</span>
                  </motion.div>
                </CardContent>
              </Card>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SocialLinks;