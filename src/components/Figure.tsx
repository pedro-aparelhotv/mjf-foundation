import Image from 'next/image'

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
        <Image src={data.url} alt={data.caption} layout="fill" />
      </div>
      <figcaption className="figure__fig-caption">{data.caption}</figcaption>
    </figure>
  )
}

export default Figure
