import 'swiper/css'
import 'swiper/css/navigation'

import Image from 'next/image'
import { useState } from 'react'
import { Keyboard, Navigation, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useSmoothScroll } from 'hooks/useSmoothScroll'

import SlideModal from 'components/SlideModal'

import { rgbDataURL } from 'utils/color'

export default function ThePlace() {
  const [isOpenSlideFullscreen, setIsOpenSlideFullscreen] = useState(false)

  const handleClickOnSlide = () => {
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
          <div className="the-place-carousel">
            <Swiper
              className="the-place__swiper"
              slidesPerView={1.51}
              navigation
              grabCursor
              centerInsufficientSlides
              centeredSlides
              autoplay
              keyboard={{
                enabled: true,
              }}
              modules={[Keyboard, Navigation, Autoplay]}
            >
              <SwiperSlide
                className="the-place__swiper__slide"
                onClick={handleClickOnSlide}
              >
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
              <SwiperSlide
                className="the-place__swiper__slide"
                onClick={handleClickOnSlide}
              >
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
              The MJF building is designed by architect Aslak Liimatainen and
              built by TMS Bygg, managed by previous director Audhild Dahlstrøm
              to completion in January 2018. <br />
              <br /> (Architects Bio) Aslak Liimatainen (architect SAFA, born
              1965 in Salla, Finland) received his Architecture degree from
              Helsinki University of Technology in 1993. In 1996, he won the
              Golden Lion Award at the Venice Architecture Biennale as a member
              of The Group with the project Leisure Studio. The building was
              completed in 1992. His work was, among others, presented in the
              exhibition Light Construction at MoMA, New York, in 1995.
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
              <SwiperSlide
                className="the-place__swiper__slide"
                onClick={handleClickOnSlide}
              >
                <div className="the-place__swiper__slide__img">
                  <Image
                    layout="fill"
                    src="/images/land-01.png"
                    alt="land-01"
                    quality={100}
                    placeholder="blur"
                    blurDataURL={rgbDataURL(238, 210, 182)}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide
                className="the-place__swiper__slide"
                onClick={handleClickOnSlide}
              >
                <div className="the-place__swiper__slide__img">
                  <Image
                    layout="fill"
                    src="/images/land-02.png"
                    alt="-02"
                    quality={100}
                    placeholder="blur"
                    blurDataURL={rgbDataURL(238, 210, 182)}
                  />
                </div>
              </SwiperSlide>
            </Swiper>

            <h1 className="the-place__swiper__slide__title">Land</h1>
            <p className="the-place__swiper__slide__paragraph">
              Maaretta Jaukkuri Foundation is located in Kvalnes, Lofoten.
              Lofoten is an archipelago within the Arctic Circle in northern
              Norway. Facing the ocean to the north, looking across to Greenland
              and Spitzbergen, it lies at the foot of a group of mountains
              directly to the south-west, shielded from the road by a group of
              trees. The MJF building is designed by architect Aslak
              Limmatainen.
            </p>
          </div>
        </div>
      </main>

      <SlideModal
        isOpen={isOpenSlideFullscreen}
        closeModal={() => setIsOpenSlideFullscreen(false)}
      />
    </>
  )
}
