import Image from 'next/image'
import { useState } from 'react'

import { useSmoothScroll } from 'hooks/useSmoothScroll'

import ArticleModal from 'components/ArticleModal'

export default function News() {
  const [isOpen, setIsOpen] = useState(false)

  useSmoothScroll({
    selector: '.news',
    disable: isOpen,
  })

  const handleOpenArticle = () => {
    setIsOpen(true)
  }

  return (
    <>
      <main className="news">
        <div className="news__wrapper">
          <ul className="news__list">
            <li className="news__item">
              <article className="news__article" onClick={handleOpenArticle}>
                <div className="news__article__img">
                  <Image
                    src="/images/image.jpg"
                    alt="Marina Valle Noronha"
                    layout="fill"
                  />
                </div>
                <div className="news__article__info">
                  <h1 className="news__article__title">
                    Marina <span>Valle Noronha</span>
                  </h1>
                  <h2 className="news__article__subtitle">
                    We are happy to welcome Marina to MJF as one of two Fellows
                    selected from our first open call 2020.
                  </h2>
                  <button
                    className="news__article__btn"
                    onClick={() => setIsOpen(true)}
                    type="button"
                    aria-label="read more"
                  >
                    Read More
                  </button>
                </div>
              </article>
            </li>
            <li className="news__item">
              <article className="news__article" onClick={handleOpenArticle}>
                <div className="news__article__img">
                  <Image
                    src="/images/image2.jpg"
                    alt="Marina Valle Noronha"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="news__article__info">
                  <h1 className="news__article__title">
                    <span>Elise</span> Hunchuck
                  </h1>
                  <h2 className="news__article__subtitle">
                    Elise is MJFs visiting Fellow during november and december
                    2019.
                  </h2>
                  <button
                    className="news__article__btn"
                    onClick={() => setIsOpen(true)}
                    type="button"
                    aria-label="read more"
                  >
                    Read More
                  </button>
                </div>
              </article>
            </li>
            <li className="news__item">
              <article className="news__article" onClick={handleOpenArticle}>
                <div className="news__article__img">
                  <Image
                    src="/images/image3.jpg"
                    alt="Marina Valle Noronha"
                    layout="fill"
                  />
                </div>
                <div className="news__article__info">
                  <h1 className="news__article__title">Open Call</h1>
                  <h2 className="news__article__subtitle">
                    MJF is open for applications to it&apos;s Fellows-programme,
                    for the period <span>15.09 — 15.11.2020</span>
                  </h2>
                  <button
                    className="news__article__btn"
                    onClick={() => setIsOpen(true)}
                    type="button"
                    aria-label="read more"
                  >
                    Read More
                  </button>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </main>

      <ArticleModal setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  )
}
