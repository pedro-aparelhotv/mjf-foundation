import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { IPrismicCTNews } from 'types/PrismicCollectionTypes'

import { useSmoothScroll } from 'hooks/useSmoothScroll'

import prismicApi from 'services/prismic'

import Article from 'components/Article'
import ArticleModal from 'components/ArticleModal'

interface INewsProps {
  content: IPrismicCTNews[]
}

export default function News({ content }: INewsProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [articleOpened, setArticleOpened] = useState(null)

  useSmoothScroll({
    selector: '.news',
    disable: isOpen,
  })

  const handleOpenArticle = (id: string) => {
    setArticleOpened(id)
    setIsOpen(true)
  }

  console.log(content)

  const articleOpenedData = content.find(news => news.id === articleOpened)

  return (
    <>
      <Head>
        <title>News | Maretta Jaukkuri Foundation</title>
      </Head>

      <main className="news">
        <div className="news__wrapper">
          <ul className="news__list">
            {content.map(news => (
              <li className="news__item" key={news.id}>
                <Article
                  data={news}
                  handleOpenArticle={() => handleOpenArticle(news.id)}
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
  const data = await prismicApi.getAllByType('news')

  const sortedNews = data.sort((a, b) => {
    const aDate = new Date(a.data.created_at)
    const bDate = new Date(b.data.created_at)

    if (aDate < bDate) return 1
    if (aDate > bDate) return -1
    return 0
  })

  return {
    props: {
      content: sortedNews,
    },
    revalidate: 10,
  }
}
