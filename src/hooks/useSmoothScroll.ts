import GSAP from 'gsap'
import NormalizeWheel from 'normalize-wheel'
import Prefix from 'prefix'
import { useEffect, useRef, useState } from 'react'

import { breakpoints } from 'utils/breakpoints'

interface IUseSmoothScroll {
  selector: string
  disable: boolean
}

const transformPrefix = Prefix('transform')

const useSmoothScroll = ({
  selector = null,
  disable = false,
}: IUseSmoothScroll) => {
  const scroll = useRef({
    y: 0,
    target: 0,
    scrollLimit: 0,
  })

  const [y, setY] = useState(scroll.current.y)

  const onWheel = event => {
    const normalizedWheel = NormalizeWheel(event)

    scroll.current.target += normalizedWheel.pixelY
  }

  const onResize = () => {
    const element = document.querySelector(selector) as HTMLDivElement
    scroll.current.scrollLimit = element.clientHeight - innerHeight
  }

  const update = () => {
    scroll.current.target = GSAP.utils.clamp(
      0,
      scroll.current.scrollLimit,
      scroll.current.target,
    )

    scroll.current.y = GSAP.utils.interpolate(
      scroll.current.y,
      scroll.current.target,
      0.001,
    )

    scroll.current.y = scroll.current.y < 0.01 ? 0 : scroll.current.y

    setY(scroll.current.y)

    if (selector) {
      const scrollingElement = document.querySelector(
        selector,
      ) as HTMLDivElement

      if (!scrollingElement) return

      if (innerWidth >= breakpoints.phone && !disable) {
        scrollingElement.style[
          transformPrefix
        ] = `translateY(-${scroll.current.y}px)`
      } else {
        scrollingElement.style[transformPrefix] = `translateX(-${0}px)`
      }
    }

    requestAnimationFrame(update)
  }

  useEffect(() => {
    if (!selector) return

    const element = document.querySelector(selector) as HTMLDivElement
    scroll.current.scrollLimit = element.clientHeight - innerHeight

    window.addEventListener('wheel', onWheel)
    window.addEventListener('resize', onResize)

    update()
    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('resize', onResize)
    }
  }, [selector, onResize])

  return { y }
}

export { useSmoothScroll }
