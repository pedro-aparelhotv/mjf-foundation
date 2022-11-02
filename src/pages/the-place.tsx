import 'swiper/css'
import 'swiper/css/navigation'

import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { Keyboard, Navigation, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IPrismicSTThePlacePage } from 'types/PrismisSingleType'

import { useSmoothScroll } from 'hooks/useSmoothScroll'

import prismicApi, { getDefaults } from 'services/prismic'

import SlideModal from 'components/SlideModal'

import { breakpoints } from 'utils/breakpoints'
import { rgbDataURL } from 'utils/color'

interface IThePlace {
  content: IPrismicSTThePlacePage
}

export default function ThePlace({ content }: IThePlace) {
  const [isOpenSlideFullscreen, setIsOpenSlideFullscreen] = useState(false)
  const [selectedCarousel, setSelectedCarousel] = useState(null)

  const handleClickOnSlide = carousel => {
    setSelectedCarousel(carousel)
    setIsOpenSlideFullscreen(true)
  }

  useSmoothScroll({
    selector: '.the-place',
    disable:
      isOpenSlideFullscreen ||
      (typeof window !== 'undefined' && innerWidth < breakpoints.phone),
  })

  return (
    <>
      <Head>
        <title>The Place | Maretta Jaukkuri Foundation</title>
      </Head>
      <main className="the-place">
        <div className="the-place__wrapper">
          {content?.data?.slices.map(carousel => (
            <div key={carousel.id} className="the-place__carousel">
              {carousel?.items?.length > 0 && (
                <>
                  <Swiper
                    className="the-place__swiper"
                    breakpoints={{
                      0: {
                        slidesPerView: 1.075,
                      },
                      450: {
                        slidesPerView: 1.54,
                        centeredSlides: true,
                        spaceBetween: 10,
                      },
                    }}
                    navigation
                    grabCursor
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
                            objectFit="contain"
                            src={gallery.url}
                            alt={gallery.alt}
                            quality={100}
                            placeholder="blur"
                            blurDataURL={rgbDataURL(238, 210, 182)}
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </>
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

export const getStaticProps: GetStaticProps = async () => {
  const defaults = await getDefaults()
  const data = await prismicApi.getSingle('the_place')

  return {
    props: { defaults, content: data },
    revalidate: 10,
  }
}
