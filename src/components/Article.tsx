import { PrismicRichText } from '@prismicio/react'
import Image from 'next/image'

import { rgbDataURL } from 'utils/color'

interface IArticleProps {
  data: {
    thumbnail: {
      url: string
      alt: string
    }
    summary: any
  }
  handleOpenArticle: () => void
}

const Article = ({ data, handleOpenArticle }: IArticleProps) => {
  return (
    <article className="article" onClick={handleOpenArticle}>
      <div className="article__img">
        {data.thumbnail && (
          <Image
            src={data.thumbnail.url}
            alt={data.thumbnail.alt}
            layout="fill"
            quality={100}
            placeholder="blur"
            blurDataURL={rgbDataURL(238, 210, 182)}
          />
        )}
      </div>
      <div className="article__info">
        <PrismicRichText field={data.summary} />

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
