import 'swiper/css'
import 'swiper/css/navigation'

import Image from 'next/image'
import { Keyboard, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { rgbDataURL } from 'utils/color'

interface ISlideModalProps {
  isOpen: boolean
  closeModal: () => void
}

const SlideModal = ({ isOpen, closeModal }: ISlideModalProps) => {
  return (
    <div className="slide-modal" data-open={isOpen}>
      <div className="slide-modal__wrapper">
        <button
          className="slide-modal__close-btn"
          type="button"
          onClick={closeModal}
        >
          <span className="sr-only">Close fullscreen slide</span>
          Close and return
          <span className="slide-modal__close-btn__icon">x</span>
        </button>

        <Swiper
          className="slide-modal__swiper"
          slidesPerView={1}
          navigation={{
            enabled: true,
            prevEl: '.slide-modal__swipper__prev-btn',
            nextEl: '.slide-modal__swipper__next-btn',
          }}
          grabCursor
          centerInsufficientSlides
          centeredSlides
          autoplay
          keyboard={{
            enabled: true,
          }}
          modules={[Keyboard, Navigation]}
        >
          <SwiperSlide className="slide-modal__swiper__slide">
            <div className="slide-modal__swiper__slide__img">
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
          <SwiperSlide className="slide-modal__swiper__slide">
            <div className="slide-modal__swiper__slide__img">
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

          <button className="slide-modal__swipper__prev-btn" type="button">
            previous image
          </button>
          <button className="slide-modal__swipper__next-btn" type="button">
            next image
          </button>
        </Swiper>
      </div>
    </div>
  )
}

export default SlideModal
