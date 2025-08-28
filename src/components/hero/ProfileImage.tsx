import { motion } from "framer-motion";

const ProfileImage = () => {
  return (
    <div className="mb-8 relative">
      <div className="w-48 h-48 mx-auto relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse opacity-75"></div>
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          src="/lovable-uploads/f20949ac-6116-40a0-91ca-ee287ee9825a.png"
          alt="Profile"
          className="w-full h-full object-cover rounded-full relative z-10 border-4 border-cyan-500 shadow-lg shadow-cyan-500/50"
        />
      </div>
    </div>
  );
};

export default ProfileImage;