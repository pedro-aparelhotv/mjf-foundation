import 'swiper/css'
import 'swiper/css/navigation'

import { GetStaticProps } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import { Keyboard, Navigation, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useSmoothScroll } from 'hooks/useSmoothScroll'

import prismicApi, { getDefaults } from 'services/prismic'

import SlideModal from 'components/SlideModal'

import { rgbDataURL } from 'utils/color'

export default function ThePlace({ content }) {
  const [isOpenSlideFullscreen, setIsOpenSlideFullscreen] = useState(false)
  const [selectedCarousel, setSelectedCarousel] = useState(null)

  const handleClickOnSlide = carousel => {
    setSelectedCarousel(carousel)
    setIsOpenSlideFullscreen(true)
  }

  useSmoothScroll({
    selector: '.the-place',
    disable: isOpenSlideFullscreen,
  })

  return (
    <>
      <main className="the-place">
        <div className="the-place__wrapper">
          {content?.data?.slices.map(carousel => (
            <div key={carousel.id} className="the-place-carousel">
              {carousel?.items?.length > 0 && (
                <Swiper
                  className="the-place__swiper"
                  breakpoints={{
                    0: {
                      slidesPerView: 1.075,
                    },
                    450: {
                      slidesPerView: 1.51,
                      centeredSlides: true,
                      centerInsufficientSlides: true,
                    },
                  }}
                  navigation
                  grabCursor
                  autoplay
                  keyboard={{
                    enabled: true,
                  }}
                  modules={[Keyboard, Navigation, Autoplay]}
                >
                  {carousel.items.map(({ gallery }) => (
                    <SwiperSlide
                      key={gallery.url}
                      className="the-place__swiper__slide"
                      onClick={() => handleClickOnSlide(carousel)}
                    >
                      <div className="the-place__swiper__slide__img">
                        <Image
                          layout="fill"
                          src={gallery.url}
                          alt={gallery.alt}
                          priority
                          quality={100}
                          placeholder="blur"
                          blurDataURL={rgbDataURL(238, 210, 182)}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}

              <h1 className="the-place__swiper__slide__title">
                {carousel.primary.title ?? ''}
              </h1>
              <p className="the-place__swiper__slide__paragraph">
                {carousel.primary.description ?? ''}
              </p>
            </div>
          ))}
        </div>
      </main>

      <SlideModal
        content={selectedCarousel}
        isOpen={isOpenSlideFullscreen}
        closeModal={() => setIsOpenSlideFullscreen(false)}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ctx => {
  const defaults = await getDefaults()
  const data = await prismicApi.getSingle('the_place')

  return {
    props: { defaults, content: data },
  }
}
