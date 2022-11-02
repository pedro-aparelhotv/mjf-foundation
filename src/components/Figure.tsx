import Image from 'next/image'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { rgbDataURL } from 'utils/color'

import 'swiper/css'
import 'swiper/css/pagination'

interface IFigureProps {
  data: Array<{
    image: {
      url: string
      alt: string
    }
  }>
}

const Figure = ({ data }: IFigureProps) => {
  return (
    <Swiper
      className="figure__swiper"
      slidesPerView={1}
      grabCursor
      pagination={{
        enabled: true,
        clickable: true,
      }}
      modules={[Pagination]}
    >
      {data.map(({ image }) => (
        <SwiperSlide key={image.url} className="figure__slide">
          <figure className="figure">
            <div className="figure__img">
              <Image
                src={image.url}
                alt={image.alt}
                layout="fill"
                quality={100}
                placeholder="blur"
                blurDataURL={rgbDataURL(238, 210, 182)}
              />
            </div>
            <figcaption className="figure__fig-caption">{image.alt}</figcaption>
          </figure>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Figure
