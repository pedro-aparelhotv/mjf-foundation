/* eslint-disable no-unused-vars */
import { PrismicRichText } from '@prismicio/react'
import { format } from 'date-fns'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useState } from 'react'

import { useSmoothScroll } from 'hooks/useSmoothScroll'

import prismicApi, { getDefaults } from 'services/prismic'

import ArticleModal from 'components/ArticleModal'

export default function Fellows({ content, fellows, availableYears }) {
  const [isOpen, setIsOpen] = useState(false)

  useSmoothScroll({
    selector: '.fellows',
    disable: isOpen,
  })

  const [articleOpened, setArticleOpened] = useState(null)
  const [isSelectingYear, setIsSelectingYear] = useState(false)
  const [selectedYear, setSelectedYear] = useState<number>(null)

  const handleClickOnSelectAYear = () => {
    setIsSelectingYear(true)
  }

  const handleClickOnSeeAll = () => {
    setSelectedYear(null)
    setIsSelectingYear(false)
  }

  const handleClickOnYear = (year: number) => {
    setSelectedYear(year)
    setIsSelectingYear(false)
  }

  const handleClickOnFellow = fellow => {
    setArticleOpened(fellow)
    setIsOpen(true)
  }

  const filteredFellows = selectedYear
    ? fellows.filter(fellow => fellow.duration.match(selectedYear))
    : fellows

  return (
    <>
      <Head>
        <title>Fellows | Maretta Jaukkuri Foundation</title>
      </Head>

      <main className="fellows">
        <div className="fellows__wrapper">
          {content.data?.title && (
            <PrismicRichText field={content.data.title} />
          )}

          <section className="fellows__table">
            <header className="fellows__table__options">
              <ul className="fellows__table__options__list">
                <li className="fellows__table__options__item">
                  <button
                    className="fellows__table__options__btn"
                    type="button"
                    onClick={handleClickOnSelectAYear}
                    data-active={isSelectingYear}
                  >
                    {isSelectingYear
                      ? content.data.year_view_active_button_text
                      : content.data.year_view_button_text}
                  </button>
                </li>
                <li className="fellows__table__options__item">
                  <button
                    className="fellows__table__options__btn"
                    type="button"
                    onClick={handleClickOnSeeAll}
                    data-active={!isSelectingYear}
                  >
                    {!isSelectingYear
                      ? content.data.list_view_active_button_text
                      : content.data.list_view_button_text}
                  </button>
                </li>
              </ul>
            </header>

            <div className="fellows__table__content">
              {isSelectingYear ? (
                <ul className="fellows__table__years-list">
                  {availableYears?.map(year => (
                    <li key={year} className="fellows__table__years-item">
                      <button
                        className="fellows__table__years-btn"
                        type="button"
                        onClick={() => handleClickOnYear(year)}
                      >
                        {year}
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="fellows__table__list">
                  {filteredFellows.map(fellow => (
                    <li key={fellow.id} className="fellows__table__item">
                      <article
                        className="fellows__article"
                        onClick={() => handleClickOnFellow(fellow)}
                        data-disabled={fellow.data.content.length === 0}
                      >
                        <h2 className="fellows__article__title">
                          {fellow.data.name}
                          {fellow.data.country && `, ${fellow.data.country}`}
                        </h2>

                        <span className="fellows__article__len-of-stay">
                          {fellow.duration}
                        </span>
                      </article>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        </div>
      </main>

      <ArticleModal
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        content={articleOpened}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const defaults = await getDefaults()
  const data = await prismicApi.getSingle('fellows')
  let fellows = await prismicApi.getAllByType('fellow')

  const options = new Set()

  fellows = fellows.map(fellow => {
    const startMonth = format(new Date(fellow.data.start_date), 'MMM')
    const startYear = format(new Date(fellow.data.start_date), 'y')

    const endMonth = format(new Date(fellow.data.start_date), 'MMM')
    const endYear = format(new Date(fellow.data.start_date), 'y')

    options.add(startYear)
    options.add(endYear)

    const duration =
      Number(endYear) > Number(startYear)
        ? `${startMonth} ${startYear}-${endMonth} ${endYear}`
        : `${startMonth}-${endMonth} ${endYear}`
    return { ...fellow, duration }
  })

  return {
    props: {
      defaults,
      content: data,
      fellows,
      availableYears: Array.from(options),
    },
    revalidate: 10,
  }
}
