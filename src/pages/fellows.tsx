/* eslint-disable no-unused-vars */
import { PrismicRichText } from '@prismicio/react'
import { format } from 'date-fns'
import { GetStaticProps } from 'next'
import { useState } from 'react'

import { useSmoothScroll } from 'hooks/useSmoothScroll'

import prismicApi, { getDefaults } from 'services/prismic'

export default function Fellows({ content, fellows }) {
  useSmoothScroll({
    selector: '.fellows',
    disable: false,
  })

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

  return (
    <main className="fellows">
      <div className="fellows__wrapper">
        {content.data?.title && <PrismicRichText field={content.data.title} />}

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
                <li className="fellows__table__years-item">
                  <button
                    className="fellows__table__years-btn"
                    type="button"
                    onClick={() => handleClickOnYear(2021)}
                  >
                    2021
                  </button>
                </li>
                <li className="fellows__table__years-item">
                  <button
                    className="fellows__table__years-btn"
                    type="button"
                    onClick={() => handleClickOnYear(2020)}
                  >
                    2020
                  </button>
                </li>
                <li className="fellows__table__years-item">
                  <button
                    className="fellows__table__years-btn"
                    type="button"
                    onClick={() => handleClickOnYear(2019)}
                  >
                    2019
                  </button>
                </li>
                <li className="fellows__table__years-item">
                  <button
                    className="fellows__table__years-btn"
                    type="button"
                    onClick={() => handleClickOnYear(2018)}
                  >
                    2018
                  </button>
                </li>
              </ul>
            ) : (
              <ul className="fellows__table__list">
                {fellows.map(fellow => (
                  <li key={fellow.id} className="fellows__table__item">
                    <article className="fellows__article">
                      <h2 className="fellows__article__title">
                        {fellow.data.name}, {fellow.data.country}
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
  )
}

export const getStaticProps: GetStaticProps = async ctx => {
  const defaults = await getDefaults()
  const data = await prismicApi.getSingle('fellows')
  let fellows = await prismicApi.getAllByType('fellow')

  fellows = fellows.map(fellow => {
    const startMonth = format(new Date(fellow.data.start_date), 'MMM')
    const startYear = format(new Date(fellow.data.start_date), 'y')

    const endMonth = format(new Date(fellow.data.start_date), 'MMM')
    const endYear = format(new Date(fellow.data.start_date), 'y')

    const duration =
      Number(endYear) > Number(startYear)
        ? `${startMonth} ${startYear} — ${endMonth} ${endYear}`
        : `${startMonth} — ${endMonth} ${endYear}`
    return { ...fellow, duration }
  })

  return {
    props: { defaults, content: data, fellows },
  }
}
