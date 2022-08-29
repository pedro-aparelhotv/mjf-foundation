import Image from 'next/image'

import { rgbDataURL } from 'utils/color'

interface IFigureProps {
  data: {
    url: string
    caption: string
  }
}

const Figure = ({ data }: IFigureProps) => {
  return (
    <figure className="figure">
      <div className="figure__img">
        <Image
          src={data.url}
          alt={data.caption}
          layout="fill"
          quality={100}
          placeholder="blur"
          blurDataURL={rgbDataURL(238, 210, 182)}
        />
      </div>
      <figcaption className="figure__fig-caption">{data.caption}</figcaption>
    </figure>
  )
}

export default Figure
