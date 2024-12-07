"use client"

import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

const topRowImages = [
  "/placeholder.svg?height=300&width=300",
  "/placeholder.svg?height=300&width=300",
  "/placeholder.svg?height=300&width=300",
  "/placeholder.svg?height=300&width=300",
  "/placeholder.svg?height=300&width=300",
  "/placeholder.svg?height=300&width=300",
]

const bottomRowImages = [
  "/placeholder.svg?height=300&width=300",
  "/placeholder.svg?height=300&width=300",
  "/placeholder.svg?height=300&width=300",
  "/placeholder.svg?height=300&width=300",
  "/placeholder.svg?height=300&width=300",
  "/placeholder.svg?height=300&width=300",
]

export default function ImageSlider() {
  const topRowControls = useAnimation()
  const bottomRowControls = useAnimation()

  useEffect(() => {
    const animateSlider = async () => {
      await Promise.all([
        topRowControls.start({
          x: [0, -1200],
          transition: { duration: 20, ease: "linear", repeat: Infinity }
        }),
        bottomRowControls.start({
          x: [-1200, 0],
          transition: { duration: 20, ease: "linear", repeat: Infinity }
        })
      ])
    }

    animateSlider()
  }, [topRowControls, bottomRowControls])

  return (
    <div className="w-full h-screen mt-5 bg-gray-200 p-4 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-4">
        <motion.div 
          className="flex space-x-4" 
          animate={topRowControls}
        >
          {[...topRowImages, ...topRowImages].map((src, index) => (
            <div key={index} className="flex-shrink-0 w-48 h-48 rounded-lg overflow-hidden">
              <img src={src} alt={`Top row image ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </motion.div>
        <motion.div 
          className="flex space-x-4" 
          animate={bottomRowControls}
        >
          {[...bottomRowImages, ...bottomRowImages].map((src, index) => (
            <div key={index} className="flex-shrink-0 w-48 h-48 rounded-lg overflow-hidden">
              <img src={src} alt={`Bottom row image ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </motion.div>
      </div>
      <div className='relative flex h-[500px] w-full flex-col items-center justify-center'>
        <span className='pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-neutral-600 to-gray-300/80 bg-clip-text text-center text-2xl font-semibold text-transparent dark:from-white dark:to-slate-600/10'>Bringing creativity and precision together through AI-powered image generation and detection.</span>
      </div>
    </div>
  )
}