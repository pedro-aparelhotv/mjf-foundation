import { ReactNode, Children, useRef } from 'react'
import { v4 } from 'uuid'

import { useSmoothScroll } from 'hooks/useSmoothScroll'

interface IMediaScroller {
  children: ReactNode
}

const MediaScroller = ({ children }: IMediaScroller) => {
  const target = useRef(`targetId-${v4()}`)
  const scrollContainerId = useRef(`scrollContainerId-${v4()}`)

  useSmoothScroll({
    selector: `#${target.current}`,
    scrollContainer: `#${scrollContainerId.current}`,
    direction: 'horizontal',
    isDraggable: true,
    debug: true,
  })

  return (
    <div className="media-scroller" id={scrollContainerId.current}>
      <div className="media-scroller__wrapper">
        <ul className="media-scroller__list" id={target.current}>
          {Children.map(children, child => (
            <li className="media-scroller__item">{child}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MediaScroller
