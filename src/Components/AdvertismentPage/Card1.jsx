import React from 'react'
import { cardContents1 } from '../../constants'

export const Card1 = () => {
  return (
     <div className="w-full overflow-hidden bg-gradient-to-r from-black via-gray-900 to-black">
          <div className="flex justify-center p-8 mt-4 mb-10">
            <div className="grid grid-cols-1 gap-y-6 gap-x-20 sm:grid-cols-2 md:grid-cols-3 ">
              {cardContents1.map((card, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-10 bg-black border border-gray-300 shadow-xl w-80 rounded-2xl cardAnimation"
                >
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center p-4 mr-4 text-white border border-blue-300 rounded-full">
                      {card.icon}
                    </div>
                    <h2 className="text-xl font-semibold text-white">{card.title}</h2>
                  </div>
                  <p className="text-sm text-center text-gray-400">{card.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
  )
}
