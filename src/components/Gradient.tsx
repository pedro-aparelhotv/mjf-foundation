/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useRouter } from 'next/router'
import Script from 'next/script'
import { useEffect, CSSProperties, useState } from 'react'

import allGradientColors from 'assets/gradientColors.json'

const GradientBg = () => {
  const router = useRouter()

  const index = router.asPath.slice(1)

  const [gradientColors, setGradientColors] = useState(allGradientColors[index])

  useEffect(() => {
    if (typeof window.Gradient !== 'undefined') {
      window.Gradient.initGradient('#gradient-canvas')
    }
  }, [gradientColors])

  useEffect(() => {
    const index = router.asPath.slice(1)

    const currentColors = allGradientColors[index]

    setGradientColors(currentColors)
  }, [router])

  return (
    <div className="gradient-bg" style={gradientColors as CSSProperties}>
      <Script src="/scripts/Gradient.js" beforeInteractive />
      <canvas
        className="gradient-bg__canvas"
        id="gradient-canvas"
        data-transition-in
      />
    </div>
  )
}

export default GradientBg
