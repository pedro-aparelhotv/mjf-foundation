import 'swiper/css'
import 'swiper/css/navigation'

import Image from 'next/image'
import { Keyboard, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useSmoothScroll } from 'hooks/useSmoothScroll'

import { rgbDataURL } from 'utils/color'

export default function ThePlace() {
  useSmoothScroll({
    selector: '.the-place',
    disable: false,
  })

  return (
    <main className="the-place">
      <div className="the-place__wrapper">
        <div className="the-place-carousel">
          <Swiper
            className="the-place__swiper"
            slidesPerView={1.51}
            navigation
            grabCursor
            centerInsufficientSlides
            centeredSlides
            keyboard={{
              enabled: true,
            }}
            modules={[Keyboard, Navigation]}
          >
            <SwiperSlide className="the-place__swiper__slide">
              <div className="the-place__swiper__slide__img">
                <Image
                  layout="fill"
                  src="/images/the-place-01.png"
                  alt="the-place-01"
                  priority
                  quality={100}
                  placeholder="blur"
                  blurDataURL={rgbDataURL(238, 210, 182)}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="the-place__swiper__slide">
              <div className="the-place__swiper__slide__img">
                <Image
                  layout="fill"
                  src="/images/the-place-02.png"
                  alt="the-place-02"
                  priority
                  quality={100}
                  placeholder="blur"
                  blurDataURL={rgbDataURL(238, 210, 182)}
                />
              </div>
            </SwiperSlide>
          </Swiper>

          <h1 className="the-place__swiper__slide__title">Building</h1>
          <p className="the-place__swiper__slide__paragraph">
            Maaretta Jaukkuri is a visionary curator and professor of
            contemporary art who has, throughout her career, influenced
            students, theorists, artists and the public. It is in her name, and
            supported by those whom she has touched, that the Maaretta Jaukkuri
            Foundation was initiated, led by the collaborative effort of Antony
            Gormley and A K Dolven. The Maaretta Jaukkuri Foundation (MJF) is a
            not-for-profit organisation, founded on the 10th of August 2014.
          </p>
        </div>
        <div className="the-place-carousel">
          <Swiper
            className="the-place__swiper"
            slidesPerView={1.51}
            navigation
            grabCursor
            centerInsufficientSlides
            centeredSlides
            keyboard={{
              enabled: true,
            }}
            modules={[Keyboard, Navigation]}
          >
            <SwiperSlide className="the-place__swiper__slide">
              <div className="the-place__swiper__slide__img">
                <Image
                  layout="fill"
                  src="/images/the-place-01.png"
                  alt="the-place-01"
                  quality={100}
                  placeholder="blur"
                  blurDataURL={rgbDataURL(238, 210, 182)}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="the-place__swiper__slide">
              <div className="the-place__swiper__slide__img">
                <Image
                  layout="fill"
                  src="/images/the-place-02.png"
                  alt="the-place-02"
                  quality={100}
                  placeholder="blur"
                  blurDataURL={rgbDataURL(238, 210, 182)}
                />
              </div>
            </SwiperSlide>
          </Swiper>

          <h1 className="the-place__swiper__slide__title">Building</h1>
          <p className="the-place__swiper__slide__paragraph">
            Maaretta Jaukkuri is a visionary curator and professor of
            contemporary art who has, throughout her career, influenced
            students, theorists, artists and the public. It is in her name, and
            supported by those whom she has touched, that the Maaretta Jaukkuri
            Foundation was initiated, led by the collaborative effort of Antony
            Gormley and A K Dolven. The Maaretta Jaukkuri Foundation (MJF) is a
            not-for-profit organisation, founded on the 10th of August 2014.
          </p>
        </div>
      </div>
    </main>
  )
}
