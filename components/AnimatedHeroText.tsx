"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const texts = [
  {
    line1: '"Your Partner in Engineering Excellence"',
    line2: "Connecting Nodes",
  },
  {
    line1: "Delivering accuracy, coordination, and efficiency from concept to construction",
  },
]

const AnimatedHeroText = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % texts.length)
    }, 5000) // Change text every 5 seconds
    return () => clearInterval(timer)
  }, [])

  const currentText = texts[index]

  const sentenceVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        variants={sentenceVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="flex flex-col items-center text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-3xl">
          {currentText.line1.split(" ").map((word, i) => (
            <motion.span
              key={word + "-" + i}
              variants={wordVariants}
              style={{ display: "inline-block", marginRight: "0.5rem" }}
            >
              {word}
            </motion.span>
          ))}
        </h1>
        {currentText.line2 && (
          <motion.p
            className="text-lg md:text-xl text-white/90 mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {currentText.line2}
          </motion.p>
        )}
      </motion.div>
    </AnimatePresence>
  )
}

export default AnimatedHeroText
