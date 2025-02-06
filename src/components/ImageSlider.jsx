"use client"

import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

const topRowImages = [
  "/s1.png",
  "/s2.png",
  "/s3.png",
  "/s12.png",
  "/s5.png",
  "/s6.png",
]

const bottomRowImages = [
  "/s7.png",
  "/s8.png",
  "/s9.png",
  "/s10.png",
  "/s4.png",
  "/s11.png",
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
    <div className="w-full h-screen mt-5 bg-zinc-900 p-4 overflow-hidden select-none">
      <div className="max-w-6xl mx-auto space-y-4">
        <motion.div 
          className="flex space-x-4" 
          animate={topRowControls}
        >
          {[...topRowImages, ...topRowImages].map((src, index) => (
            <div key={index} className="flex-shrink-0 w-48 h-48 rounded-lg overflow-hidden">
              <img src={src} alt={`Top row image ${index + 1}`} className="w-full h-full object-cover pointer-events-none select-none" />
            </div>
          ))}
        </motion.div>
        <motion.div 
          className="flex space-x-4" 
          animate={bottomRowControls}
        >
          {[...bottomRowImages, ...bottomRowImages].map((src, index) => (
            <div key={index} className="flex-shrink-0 w-48 h-48 rounded-lg overflow-hidden">
              <img src={src} alt={`Bottom row image ${index + 1}`} className="w-full h-full object-cover pointer-events-none select-none" />
            </div>
          ))}
        </motion.div>
      </div>
      
    </div>
  )
}