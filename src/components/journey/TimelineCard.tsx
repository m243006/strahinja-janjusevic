
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { TimelineEvent } from "./TimelineEvent";

interface TimelineCardProps {
  event: TimelineEvent;
  onImageLoad?: () => void;
}

export const TimelineCard = ({ event, onImageLoad }: TimelineCardProps) => {
  return (
    <motion.div
      className="absolute w-72 cursor-pointer"
      style={{
        left: `${event.position.x}%`,
        top: `${event.position.y}%`,
        zIndex: 30
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <Card className="bg-background/90 backdrop-blur border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20">
        <CardContent className="p-4">
          <div className="aspect-video overflow-hidden rounded-lg mb-4">
            <img
              src={event.bgImage}
              alt={event.title}
              className="object-contain w-full h-full transform hover:scale-110 transition-transform duration-300"
              loading="lazy"
              onLoad={onImageLoad}
            />
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
              {event.year}
            </Badge>
          </div>
          <h3 className="text-lg font-semibold text-cyan-500 mb-2 leading-tight">
            {event.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {event.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};
