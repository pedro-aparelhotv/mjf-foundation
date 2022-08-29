import Image from 'next/image'

import { useSmoothScroll } from 'hooks/useSmoothScroll'

import { rgbDataURL } from 'utils/color'

export default function Contact() {
  useSmoothScroll({
    selector: '.contact',
    disable: false,
  })

  return (
    <main className="contact">
      <div className="contact__wrapper">
        <div className="contact__img">
          <Image
            src="/images/contact.png"
            alt="map"
            layout="fill"
            quality={100}
            placeholder="blur"
            blurDataURL={rgbDataURL(238, 210, 182)}
          />
        </div>
        <address className="contact__address">
          Stiftelsen Maaretta Jaukkuri Foundation
          <br /> Haverringen 954, 8360 Bøstad Lofoten, Norway <br />
          <br /> Annika Wiström (director)
          <br /> annika.wistrom [a] gmail.com
          <br /> tel 0047 952 99 466
          <br /> Registered in Norway: 91402006
        </address>
      </div>
    </main>
  )
}
