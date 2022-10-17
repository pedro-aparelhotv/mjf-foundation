import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useState } from 'react'

import { useSmoothScroll } from 'hooks/useSmoothScroll'

import prismicApi, { getDefaults } from 'services/prismic'

import Article from 'components/Article'
import ArticleModal from 'components/ArticleModal'

export default function Events({ content }) {
  const [isOpen, setIsOpen] = useState(false)
  const [articleOpened, setArticleOpened] = useState(null)

  useSmoothScroll({
    selector: '.events',
    disable: isOpen,
  })

  const handleOpenArticle = (articleId: string) => {
    setArticleOpened(articleId)
    setIsOpen(true)
  }

  const articleOpenedData = content.find(event => event.id === articleOpened)

  return (
    <>
      <Head>
        <title>Events | Maretta Jaukkuri Foundation</title>
      </Head>
      <main className="events">
        <div className="events__wrapper">
          <ul className="events__list">
            {content.map(event => (
              <li className="events__item" key={event.id}>
                <Article
                  data={{
                    ...event.data,
                  }}
                  handleOpenArticle={() => handleOpenArticle(event.id)}
                />
              </li>
            ))}
          </ul>
        </div>
      </main>

      <ArticleModal
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        content={articleOpenedData}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const defaults = await getDefaults()
  const data = await prismicApi.getAllByType('event')

  return {
    props: { defaults, content: data },
  }
}
