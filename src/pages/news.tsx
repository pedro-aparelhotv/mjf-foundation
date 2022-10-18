import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useState } from 'react'

import { useSmoothScroll } from 'hooks/useSmoothScroll'

import prismicApi, { getDefaults } from 'services/prismic'

import Article from 'components/Article'
import ArticleModal from 'components/ArticleModal'

export default function News({ content }) {
  const [isOpen, setIsOpen] = useState(false)
  const [articleOpened, setArticleOpened] = useState(null)

  useSmoothScroll({
    selector: '.news',
    disable: isOpen,
  })

  const handleOpenArticle = (articleId: string) => {
    setArticleOpened(articleId)
    setIsOpen(true)
  }

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
                  data={{
                    ...news.data,
                  }}
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
  const defaults = await getDefaults()
  const data = await prismicApi.getAllByType('news')

  return {
    props: { defaults, content: data },
    revalidate: 10,
  }
}
