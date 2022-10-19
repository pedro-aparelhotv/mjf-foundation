import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { IPrismicCTEvent } from 'types/PrismicCollectionTypes'

import { useSmoothScroll } from 'hooks/useSmoothScroll'

import prismicApi from 'services/prismic'

import Article from 'components/Article'
import ArticleModal from 'components/ArticleModal'

interface IEventsProps {
  content: IPrismicCTEvent[]
}

export default function Events({ content }: IEventsProps) {
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
                  data={event}
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
  const data = await prismicApi.getAllByType('event')

  const sortedEvents = data.sort((a, b) => {
    const aDate = new Date(a.data.created_at)
    const bDate = new Date(b.data.created_at)

    if (aDate < bDate) return 1
    if (aDate > bDate) return -1
    return 0
  })

  return {
    props: { content: sortedEvents },
    revalidate: 10,
  }
}
