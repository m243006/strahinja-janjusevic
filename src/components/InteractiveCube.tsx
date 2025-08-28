import React from 'react';

interface CubeContent {
  image: string;
  title: string;
  description: string;
}

interface InteractiveCubeProps {
  cards: CubeContent[];
}

const InteractiveCube = ({ cards }: InteractiveCubeProps) => {
  return (
    <div className="w-full h-96 mb-8 flex items-center justify-center">
      <div className="cube-container">
        <div className="cube">
          <div className="cube-face cube-front">
            <div className="p-3 text-center max-w-full overflow-hidden">
              <h3 className="text-sm font-bold text-cyan-400 mb-2 font-mono leading-tight">
                {cards[0]?.title}
              </h3>
              <p className="text-[10px] text-gray-300 font-mono break-all leading-tight">
                {cards[0]?.description.substring(0, 80)}...
              </p>
            </div>
          </div>
          <div className="cube-face cube-back">
            <div className="p-3 text-center max-w-full overflow-hidden">
              <h3 className="text-sm font-bold text-cyan-400 mb-2 font-mono leading-tight">
                {cards[1]?.title}
              </h3>
              <p className="text-[10px] text-gray-300 font-mono break-all leading-tight">
                {cards[1]?.description.substring(0, 80)}...
              </p>
            </div>
          </div>
          <div className="cube-face cube-right">
            <div className="p-3 text-center max-w-full overflow-hidden">
              <h3 className="text-sm font-bold text-cyan-400 mb-2 font-mono leading-tight">
                {cards[2]?.title}
              </h3>
              <p className="text-[10px] text-gray-300 font-mono break-all leading-tight">
                {cards[2]?.description.substring(0, 80)}...
              </p>
            </div>
          </div>
          <div className="cube-face cube-left">
            <div className="p-3 text-center max-w-full overflow-hidden">
              <h3 className="text-sm font-bold text-cyan-400 mb-2 font-mono leading-tight">
                {cards[0]?.title}
              </h3>
              <p className="text-[10px] text-gray-300 font-mono break-all leading-tight">
                {cards[0]?.description.substring(0, 80)}...
              </p>
            </div>
          </div>
          <div className="cube-face cube-top">
            <div className="p-3 text-center max-w-full overflow-hidden">
              <h3 className="text-sm font-bold text-cyan-400 mb-2 font-mono leading-tight">
                {cards[1]?.title}
              </h3>
              <p className="text-[10px] text-gray-300 font-mono break-all leading-tight">
                {cards[1]?.description.substring(0, 80)}...
              </p>
            </div>
          </div>
          <div className="cube-face cube-bottom">
            <div className="p-3 text-center max-w-full overflow-hidden">
              <h3 className="text-sm font-bold text-cyan-400 mb-2 font-mono leading-tight">
                {cards[2]?.title}
              </h3>
              <p className="text-[10px] text-gray-300 font-mono break-all leading-tight">
                {cards[2]?.description.substring(0, 80)}...
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-4">
        <p className="text-sm text-muted-foreground">
          Hexadecimal Values: People Matter • Friends • Family
        </p>
      </div>
    </div>
  );
};

export default InteractiveCube;