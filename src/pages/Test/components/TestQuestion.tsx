import React from 'react'

const TestQuestion = () => {
  return (
   
      <div className="bg-white rounded px-5 py-2 min-h-[400px] ">
        <p className="text-xl mt-3">
          1. This playful and colorful scheme combines several vibrant hues:
          bright turquoise, tangerine yellow and dark orchid?
        </p>
        <div className="text-xl mt-3">
          <p>a. bright turquois </p>
          <p>a. bright turquois </p>
          <p>a. bright turquois </p>
          <p>a. bright turquois </p>
        </div>
        <div className="flex justify-between mt-2">
          <button className="rounded bg-[#5da2d5] text-white px-2 py-1 text-lg">
            Previous Question
          </button>
          <button className="rounded bg-[#5da2d5] text-white px-2 py-1 text-lg">
            Next Question
          </button>
        </div>
      </div>
    
  )
}

export default TestQuestion