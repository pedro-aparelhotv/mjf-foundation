import { useState } from 'react'

import { useSmoothScroll } from 'hooks/useSmoothScroll'

import Article from 'components/Article'
import ArticleModal from 'components/ArticleModal'

import news from 'assets/news.json'

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
            {news.map(entry => (
              <li className="news__item" key={entry.id}>
                <Article
                  data={{
                    ...entry,
                  }}
                  handleOpenArticle={handleOpenArticle}
                />
              </li>
            ))}
          </ul>
        </div>
      </main>

      <ArticleModal setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  )
}
