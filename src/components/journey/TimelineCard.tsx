import { motion } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { TimelineEvent } from "./TimelineEvent";
import { MoveRight } from "lucide-react";

interface TimelineCardProps {
  event: TimelineEvent;
}

export const TimelineCard = ({ event }: TimelineCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const getImageUrl = (imageUrl: string) => {
    if (imageUrl.startsWith('photo-')) {
      return `https://images.unsplash.com/${imageUrl}`;
    }
    return imageUrl;
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: event.delay }}
        className="absolute w-full md:w-auto px-4 md:px-0"
        style={{
          left: `${event.position.x}%`,
          top: `${event.position.y}%`,
          transform: 'translate(-50%, -50%)',
          zIndex: 30
        }}
        onClick={() => setIsOpen(true)}
      >
        <div className="relative cursor-pointer group">
          {event.year === "2015-2019" && (
            <div className="absolute -left-32 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-2 text-cyan-400 font-medium animate-pulse">
              <span>Click me</span>
              <MoveRight className="w-4 h-4 animate-bounce" />
            </div>
          )}

          <div className="w-12 h-12 md:w-16 md:h-16 bg-cyan-500 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
            <div className="absolute w-10 h-10 md:w-14 md:h-14 bg-cyan-300/50 rounded-full top-1 left-1 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
            <div className="absolute w-8 h-8 md:w-12 md:h-12 bg-purple-400/50 rounded-full top-2 left-2 animate-[pulse_3s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
            <div className="absolute w-6 h-6 md:w-10 md:h-10 bg-purple-600/50 rounded-full top-3 left-3 animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
          </div>
          
          <div className="absolute left-16 md:left-20 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 md:p-4 max-w-[200px] md:min-w-[250px]">
            <h3 className="text-sm md:text-lg font-bold text-cyan-900">{event.title}</h3>
            <div className="text-xs md:text-sm text-cyan-700">{event.year}</div>
          </div>
        </div>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold mb-4">{event.title}</DialogTitle>
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground font-medium">{event.year}</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {event.expandedImages.map((image, index) => (
                  <div 
                    key={index}
                    className="relative aspect-video overflow-hidden rounded-lg shadow-md"
                  >
                    <img
                      src={getImageUrl(image)}
                      alt={`${event.title} image ${index + 1}`}
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                ))}
              </div>
              <div className="text-base md:text-lg leading-relaxed prose max-w-none">
                {event.details}
                {event.title === "VectrAI Internship" && (
                  <div className="mt-4">
                    <a 
                      href="https://www.vectra.ai/about/author/strahinja-janjusevic" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-cyan-600 hover:text-cyan-800 underline font-medium"
                    >
                      View Author Profile at Vectra AI →
                    </a>
                  </div>
                )}
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};