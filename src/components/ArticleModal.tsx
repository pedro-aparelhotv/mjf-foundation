import Image from 'next/image'

import { rgbDataURL } from 'utils/color'

interface IArticleModalProps {
  isOpen: boolean
  setIsOpen: (state: boolean) => void
}

const ArticleModal = ({ isOpen, setIsOpen }: IArticleModalProps) => {
  const handleClose = () => {
    setIsOpen(false)
  }

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
          <div className="article-modal__img">
            <Image
              src="/images/image.jpg"
              alt="Marina Valle Noronha"
              layout="fill"
              quality={100}
              placeholder="blur"
              blurDataURL={rgbDataURL(238, 210, 182)}
            />
          </div>

          <p className="article-modal__paragraph">
            Alexander was born moods. Here one becomes sensitiive bLa salud y
            sus metáforas, curated by Alan Sierra, Museo de Arte de Zapopan
            (MAZ), Mexico OBRA, curadoria de Federico Baeza, Pasto galeria,
            Buenos Aires, Argentina A Terceira Mão, curadoria de Erika Verzutti,
            Fortes D&apos;Aloia & Gabriel, São Paulo, Brasiled to nature but
            also aware of the grave threats it is facing. We are confronted with
            nature in daily life, in a real and ethically compelling but gentle
            manner.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ArticleModal
