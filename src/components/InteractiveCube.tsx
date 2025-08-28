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
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-cyan-400 mb-2 font-mono">
                {cards[0]?.title}
              </h3>
              <p className="text-xs text-gray-300 font-mono break-all">
                {cards[0]?.description}
              </p>
            </div>
          </div>
          <div className="cube-face cube-back">
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-cyan-400 mb-2 font-mono">
                {cards[1]?.title}
              </h3>
              <p className="text-xs text-gray-300 font-mono break-all">
                {cards[1]?.description}
              </p>
            </div>
          </div>
          <div className="cube-face cube-right">
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-cyan-400 mb-2 font-mono">
                {cards[2]?.title}
              </h3>
              <p className="text-xs text-gray-300 font-mono break-all">
                {cards[2]?.description}
              </p>
            </div>
          </div>
          <div className="cube-face cube-left">
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-cyan-400 mb-2 font-mono">
                {cards[0]?.title}
              </h3>
              <p className="text-xs text-gray-300 font-mono break-all">
                {cards[0]?.description}
              </p>
            </div>
          </div>
          <div className="cube-face cube-top">
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-cyan-400 mb-2 font-mono">
                {cards[1]?.title}
              </h3>
              <p className="text-xs text-gray-300 font-mono break-all">
                {cards[1]?.description}
              </p>
            </div>
          </div>
          <div className="cube-face cube-bottom">
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-cyan-400 mb-2 font-mono">
                {cards[2]?.title}
              </h3>
              <p className="text-xs text-gray-300 font-mono break-all">
                {cards[2]?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-4">
        <p className="text-sm text-muted-foreground">
          CSS 3D Cube with Hexadecimal Values
        </p>
      </div>
    </div>
  );
};

export default InteractiveCube;