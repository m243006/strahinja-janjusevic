import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Github, Instagram, Linkedin } from "lucide-react";

const SocialLinks = () => {
  const socialLinks = [
    {
      icon: <Instagram className="w-6 h-6 md:w-8 md:h-8" />,
      name: "Instagram",
      url: "https://www.instagram.com/strajo22/",
      color: "hover:text-pink-500"
    },
    {
      icon: <Linkedin className="w-6 h-6 md:w-8 md:h-8" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/strahinja-janjusevic-8a15a4241/",
      color: "hover:text-blue-500"
    },
    {
      icon: <Github className="w-6 h-6 md:w-8 md:h-8" />,
      name: "GitHub",
      url: "https://github.com/m243006",
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
    <div className="container mx-auto px-4 py-10 md:py-20">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8"
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
                <CardContent className="p-4 md:p-6">
                  <motion.div
                    className={`flex flex-col items-center space-y-2 md:space-y-4 ${link.color}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {link.icon}
                    <span className="text-base md:text-lg font-semibold">{link.name}</span>
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