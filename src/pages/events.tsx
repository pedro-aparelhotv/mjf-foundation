import { useState } from 'react'

import { useSmoothScroll } from 'hooks/useSmoothScroll'

import Article from 'components/Article'
import ArticleModal from 'components/ArticleModal'

import events from 'assets/events.json'

export default function Events() {
  const [isOpen, setIsOpen] = useState(false)

  useSmoothScroll({
    selector: '.events',
    disable: isOpen,
  })

  const handleOpenArticle = () => {
    setIsOpen(true)
  }

  return (
    <>
      <main className="events">
        <div className="events__wrapper">
          <ul className="events__list">
            {events.map(entry => (
              <li className="events__item" key={entry.id}>
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
