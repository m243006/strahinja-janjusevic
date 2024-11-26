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
        className="absolute cursor-pointer"
        style={{
          left: `${event.position.x}%`,
          top: `${event.position.y}%`,
        }}
        onClick={handleClick}
      >
        <div className="relative">
          {/* Journey Point - Adjusted size to w-18/h-18 */}
          <div className="w-18 h-18 bg-cyan-500 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 relative z-10">
            <div className="absolute w-16 h-16 bg-cyan-300 rounded-full top-1 left-1 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
          </div>
          
          {/* Floating Label */}
          <div className="absolute left-20 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 min-w-[250px]">
            <h3 className="text-lg font-bold text-cyan-900">{event.title}</h3>
            <p className="text-sm text-cyan-700">{event.year}</p>
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