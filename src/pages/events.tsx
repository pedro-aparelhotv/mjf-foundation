import { GetStaticProps } from 'next'
import { useState } from 'react'

import { useSmoothScroll } from 'hooks/useSmoothScroll'

import prismicApi, { getDefaults } from 'services/prismic'

import Article from 'components/Article'
import ArticleModal from 'components/ArticleModal'

export default function Events({ content }) {
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
            {content.map(event => (
              <li className="events__item" key={event.id}>
                <Article
                  data={{
                    ...event.data,
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

export const getStaticProps: GetStaticProps = async ctx => {
  const defaults = await getDefaults()
  const data = await prismicApi.getAllByType('event')

  return {
    props: { defaults, content: data },
  }
}
