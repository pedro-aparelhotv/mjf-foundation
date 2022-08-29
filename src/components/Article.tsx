import Image from 'next/image'

import { rgbDataURL } from 'utils/color'

interface IArticleProps {
  data: {
    url: string
    title: string
    subtitle: string
  }
  handleOpenArticle: () => void
}

const Article = ({ data, handleOpenArticle }: IArticleProps) => {
  return (
    <article className="article" onClick={handleOpenArticle}>
      <div className="article__img">
        <Image
          src={data.url}
          alt={data.title}
          layout="fill"
          quality={100}
          placeholder="blur"
          blurDataURL={rgbDataURL(238, 210, 182)}
        />
      </div>
      <div className="article__info">
        <h1 className="article__title">{data.title}</h1>
        <h2 className="article__subtitle">{data.subtitle}</h2>
        <button
          className="article__btn"
          onClick={handleOpenArticle}
          type="button"
          aria-label="read more"
        >
          Read More
        </button>
      </div>
    </article>
  )
}

export default Article
