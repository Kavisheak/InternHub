import React from 'react';
import { cardContents1 } from '../../constants';

export const Card1 = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800">
      {/* Shine effect layer */}
      <div className="absolute top-0 left-0 z-0 w-full h-full pointer-events-none bg-gradient-to-r from-white/10 via-white/5 to-transparent opacity-20 animate-pulse" />

      <div className="relative z-10 flex justify-center p-8 mt-4 mb-10">
        <div className="grid grid-cols-1 gap-y-6 gap-x-20 sm:grid-cols-2 md:grid-cols-3">
          {cardContents1.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-10 transition-transform duration-300 border shadow-xl border-white/20 w-80 rounded-2xl backdrop-blur-md bg-white/10 bg-opacity-20 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center p-4 mr-4 text-white border border-blue-300 rounded-full">
                  {card.icon}
                </div>
                <h2 className="text-xl font-semibold text-white">{card.title}</h2>
              </div>
              <p className="text-sm text-center text-gray-300">{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
