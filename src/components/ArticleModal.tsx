import { PrismicRichText } from '@prismicio/react'
import Image from 'next/image'

import { rgbDataURL } from 'utils/color'

interface IArticleModalProps {
  isOpen: boolean
  setIsOpen: (state: boolean) => void
  content?: {
    data: {
      content: []
    }
  }
}

const ArticleModal = ({ isOpen, setIsOpen, content }: IArticleModalProps) => {
  const handleClose = () => {
    setIsOpen(false)
  }

  console.log(content)

  return (
    <section className="article-modal" data-open={isOpen} onClick={handleClose}>
      <div
        className="article-modal__wrapper"
        onClick={e => e.stopPropagation()}
      >
        <header className="article-modal__header">
          <button
            className="article-modal__close-btn"
            type="button"
            onClick={handleClose}
            aria-label="close article"
          >
            (Close)
          </button>
        </header>

        <div className="article-modal__content">
          {content?.data?.content && (
            <PrismicRichText
              field={content.data.content}
              components={{
                paragraph: ({ children }) => (
                  <p className="article-modal__paragraph">{children}</p>
                ),
                image: ({ node }) => (
                  <div className="article-modal__img">
                    <Image
                      src={node.url}
                      alt={node.alt}
                      layout="fill"
                      quality={100}
                      placeholder="blur"
                      blurDataURL={rgbDataURL(238, 210, 182)}
                    />
                  </div>
                ),
              }}
            />
          )}
        </div>
      </div>
    </section>
  )
}

export default ArticleModal
