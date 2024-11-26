import { motion } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";
import { TimelineEvent } from "./TimelineEvent";

interface TimelineCardProps {
  event: TimelineEvent;
  onPointClick: () => void;
}

export const TimelineCard = ({ event, onPointClick }: TimelineCardProps) => {
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
        className="absolute cursor-pointer"
        style={{
          left: `${event.position.x}%`,
          top: `${event.position.y}%`,
        }}
        onClick={handleClick}
      >
        <div className="relative">
          {/* Journey Point */}
          <div className="w-8 h-8 bg-cyan-500 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 relative z-10">
            <div className="absolute w-6 h-6 bg-cyan-300 rounded-full top-1 left-1 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
          </div>
          
          {/* Floating Label */}
          <div className="absolute left-10 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-3 min-w-[200px]">
            <h3 className="text-sm font-bold text-cyan-300">{event.title}</h3>
            <p className="text-xs text-cyan-200">{event.year}</p>
          </div>
        </div>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{event.title}</DialogTitle>
            <DialogDescription>
              <p className="text-sm text-muted-foreground mb-4">{event.year}</p>
              <div className="grid grid-cols-2 gap-4 mb-4">
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
              <p className="text-base leading-relaxed">{event.details}</p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};