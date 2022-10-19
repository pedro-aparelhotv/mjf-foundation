import useEmblaCarousel from 'embla-carousel-react'
import { useState, useEffect, useCallback, ReactNode, Children } from 'react'

// import { PrevButton, NextButton } from './EmblaCarouselButtons'

interface IEmblaCarousel {
  children: ReactNode
}

const EmblaCarousel = ({ children }: IEmblaCarousel) => {
  const [viewportRef, embla] = useEmblaCarousel({
    containScroll: 'trimSnaps',
    draggable: true,
    loop: true,
  })

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])

  const onSelect = useCallback(() => {
    if (!embla) return
    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
  }, [embla])

  useEffect(() => {
    if (!embla) return
    embla.on('select', onSelect)
    onSelect()
  }, [embla, onSelect])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {Children.map(children, (child, idx) => (
            <div className="embla__slide" key={idx}>
              <div className="embla__slide__inner">{child}</div>
            </div>
          ))}
        </div>
      </div>

      <button onClick={scrollPrev} disabled={!prevBtnEnabled}>
        {' '}
        {'<'}{' '}
      </button>
      <button onClick={scrollNext} disabled={!nextBtnEnabled}>
        {' '}
        {'>'}{' '}
      </button>
    </div>
  )
}

export default EmblaCarousel
