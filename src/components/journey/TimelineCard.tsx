import { motion } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";
import { TimelineEvent } from "./TimelineEvent";

interface TimelineCardProps {
  event: TimelineEvent;
  onPointClick: () => void;
  isActive: boolean;
}

export const TimelineCard = ({ event, onPointClick, isActive }: TimelineCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
    onPointClick();
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: event.delay }}
        viewport={{ once: true }}
        className="absolute"
        style={{
          left: `${event.position.x}%`,
          top: `${event.position.y}%`,
          zIndex: 30
        }}
        onClick={handleClick}
      >
        <div className="relative cursor-pointer">
          {/* Journey Point */}
          <div className="w-16 h-16 bg-cyan-500 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
            {/* Outer pulse */}
            <div className="absolute w-14 h-14 bg-cyan-300/50 rounded-full top-1 left-1 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
            {/* Middle pulse */}
            <div className="absolute w-12 h-12 bg-purple-400/50 rounded-full top-2 left-2 animate-[pulse_3s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
            {/* Inner pulse */}
            <div className="absolute w-10 h-10 bg-purple-600/50 rounded-full top-3 left-3 animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
          </div>
          
          {/* Floating Label */}
          <div className="absolute left-20 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 min-w-[250px]">
            <h3 className="text-lg font-bold text-cyan-900">{event.title}</h3>
            <div className="text-sm text-cyan-700">{event.year}</div>
          </div>
        </div>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{event.title}</DialogTitle>
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground">{event.year}</div>
              <div className="grid grid-cols-2 gap-4">
                {event.expandedImages.map((image, index) => (
                  <div 
                    key={index}
                    className="relative aspect-video overflow-hidden rounded-lg"
                  >
                    <img
                      src={`https://images.unsplash.com/${image}`}
                      alt={`${event.title} image ${index + 1}`}
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                ))}
              </div>
              <div className="text-base leading-relaxed">{event.details}</div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};