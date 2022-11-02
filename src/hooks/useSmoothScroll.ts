import GSAP from 'gsap'
import NormalizeWheel from 'normalize-wheel'
import Prefix from 'prefix'
import { useCallback, useEffect, useRef } from 'react'

interface IUseSmoothScroll {
  selector: string
  scrollContainer?: string
  direction?: 'horizontal' | 'vertical'
  disable?: boolean
  debug?: boolean
  isDraggable?: boolean
}

const transformPrefix = Prefix('transform')

const useSmoothScroll = ({
  selector = null,
  scrollContainer = null,
  direction = 'vertical',
  disable = false,
  isDraggable = false,
  debug = false,
}: IUseSmoothScroll) => {
  const scroll = useRef({
    curr: 0,
    target: 0,
    last: 0,
    start: 0,
    distance: 0,
    scrollLimit: 0,
    isDown: false,
  })

  const onWheel = useCallback(
    event => {
      const normalizedWheel = NormalizeWheel(event)

      scroll.current.target += disable
        ? 0
        : direction === 'vertical'
        ? normalizedWheel.pixelY
        : normalizedWheel.pixelX
    },
    [disable, direction],
  )

  const onTouchDown = useCallback(() => {
    scroll.current.isDown = true
    scroll.current.start = scroll.current.curr
  }, [])

  const onTouchUp = useCallback(() => {
    scroll.current.isDown = false
  }, [])

  const onTouchMove = useCallback(event => {
    if (!scroll.current.isDown) return

    const xEnd = event.touches ? event.touches[0].offsetX : event.offsetX

    scroll.current.distance = scroll.current.start - xEnd

    scroll.current.target = scroll.current.curr - scroll.current.distance

    const velocity = scroll.current.curr > scroll.current.target ? 0.5 : -0.5

    scroll.current.target += velocity
  }, [])

  const onResize = useCallback(() => {
    const element = document.querySelector(selector) as HTMLDivElement

    scroll.current.scrollLimit =
      direction === 'vertical'
        ? element.clientHeight - innerHeight
        : element.clientWidth - innerWidth
  }, [selector, direction])

  const update = useCallback(() => {
    scroll.current.target = GSAP.utils.clamp(
      0,
      scroll.current.scrollLimit,
      scroll.current.target,
    )

    scroll.current.curr = GSAP.utils.interpolate(
      scroll.current.curr,
      scroll.current.target,
      0.1,
    )

    scroll.current.curr = scroll.current.curr < 0.01 ? 0 : scroll.current.curr

    if (selector) {
      const scrollingElement = document.querySelector(
        selector,
      ) as HTMLDivElement

      if (!scrollingElement) return

      if (!disable) {
        scrollingElement.style[transformPrefix] =
          direction === 'vertical'
            ? `translateY(-${scroll.current.curr}px)`
            : `translateX(-${scroll.current.curr}px)`
      }
    }

    requestAnimationFrame(update)
  }, [selector, disable, direction])

  useEffect(() => {
    if (!selector) return

    const element = document.querySelector(selector) as HTMLDivElement

    scroll.current.scrollLimit =
      direction === 'vertical'
        ? element.clientHeight - innerHeight
        : element.clientWidth - innerWidth / 2

    const scrollerElement = scrollContainer
      ? (document.querySelector(scrollContainer) as HTMLDivElement)
      : window

    scrollerElement.addEventListener('resize', onResize)

    if (isDraggable) {
      element.addEventListener('mousedown', onTouchDown)
      element.addEventListener('mousemove', onTouchMove)
      element.addEventListener('mouseup', onTouchUp)
      element.addEventListener('touchdown', onTouchDown)
      element.addEventListener('touchmove', onTouchMove)
      element.addEventListener('touchup', onTouchUp)
    } else {
      scrollerElement.addEventListener('wheel', onWheel)
    }

    const animationId = requestAnimationFrame(update)

    return () => {
      scrollerElement.removeEventListener('resize', onResize)

      if (isDraggable) {
        element.removeEventListener('mousedown', onTouchDown)
        element.removeEventListener('mousemove', onTouchMove)
        element.removeEventListener('mouseup', onTouchUp)
        element.removeEventListener('touchdown', onTouchDown)
        element.removeEventListener('touchmove', onTouchMove)
        element.removeEventListener('touchup', onTouchUp)
      } else {
        scrollerElement.removeEventListener('wheel', onWheel)
      }
      cancelAnimationFrame(animationId)
    }
  }, [
    selector,
    onResize,
    onWheel,
    onTouchDown,
    onTouchMove,
    onTouchUp,
    update,
    scrollContainer,
    direction,
    isDraggable,
  ])
}

export { useSmoothScroll }
