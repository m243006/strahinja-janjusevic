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
    <div className="w-full h-96 mb-8 flex items-center justify-center relative">
      <div className="cube-container">
        <div className="cube">
          <div className="cube-face cube-front">
            <div className="p-3 text-center max-w-full overflow-hidden">
              <h3 className="text-base font-bold text-cyan-400 font-mono leading-tight">
                {cards[0]?.title}
              </h3>
            </div>
          </div>
          <div className="cube-face cube-back">
            <div className="p-3 text-center max-w-full overflow-hidden">
              <h3 className="text-base font-bold text-cyan-400 font-mono leading-tight">
                {cards[1]?.title}
              </h3>
            </div>
          </div>
          <div className="cube-face cube-right">
            <div className="p-3 text-center max-w-full overflow-hidden">
              <h3 className="text-base font-bold text-cyan-400 font-mono leading-tight">
                {cards[2]?.title}
              </h3>
            </div>
          </div>
          <div className="cube-face cube-left">
            <div className="p-3 text-center max-w-full overflow-hidden">
              <h3 className="text-base font-bold text-cyan-400 font-mono leading-tight">
                {cards[0]?.title}
              </h3>
            </div>
          </div>
          <div className="cube-face cube-top">
            <div className="p-3 text-center max-w-full overflow-hidden">
              <h3 className="text-base font-bold text-cyan-400 font-mono leading-tight">
                {cards[1]?.title}
              </h3>
            </div>
          </div>
          <div className="cube-face cube-bottom">
            <div className="p-3 text-center max-w-full overflow-hidden">
              <h3 className="text-base font-bold text-cyan-400 font-mono leading-tight">
                {cards[2]?.title}
              </h3>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <p className="text-sm text-cyan-400 text-center font-mono tracking-wider">
          &gt; decode
        </p>
      </div>
    </div>
  );
};

export default InteractiveCube;