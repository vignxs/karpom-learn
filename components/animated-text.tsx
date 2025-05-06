"use client"

import { useState, useEffect } from "react"

export default function AnimatedText() {
  const [textIndex, setTextIndex] = useState(0)
  const texts = ["Karpom.Dev", "Learn Deep. Build Bold."]
  const [fade, setFade] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true)
      setTimeout(() => {
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
        setFade(false)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <h3
      className={`text-3xl font-bold text-yellow-500 transition-opacity duration-500 ${fade ? "opacity-0" : "opacity-100"}`}
    >
      {texts[textIndex]}
    </h3>
  )
}
