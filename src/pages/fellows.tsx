/* eslint-disable no-unused-vars */
import { useState } from 'react'

import { useSmoothScroll } from 'hooks/useSmoothScroll'

export default function Fellows() {
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
        <h1 className="fellows__title">
          <span>The Maaretta Jaukkuri Foundation – MJF –</span> invites 4 - 5{' '}
          <span>Fellows</span> each year from various fields in the arts,
          sciences or philosophy, or{' '}
          <span>any field that encourages new paths of thinking</span> . The
          Fellows are selected by the Board to spend up to 2 months in{' '}
          <span>The Place in Lofoten</span>. MJF also presents public seminars
          and other <span>events</span>.
        </h1>

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
                  {isSelectingYear ? 'Seeing by year' : 'See by year'}
                </button>
              </li>
              <li className="fellows__table__options__item">
                <button
                  className="fellows__table__options__btn"
                  type="button"
                  onClick={handleClickOnSeeAll}
                  data-active={!isSelectingYear}
                >
                  {!isSelectingYear ? 'Seeing list' : 'See list'}
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
                <li className="fellows__table__item">
                  <article className="fellows__article">
                    <h2 className="fellows__article__title">
                      Monica Winther, Belgium
                    </h2>

                    <span className="fellows__article__len-of-stay">
                      Jul-Sep 2022
                    </span>
                  </article>
                </li>
              </ul>
            )}
          </div>
        </section>
      </div>
    </main>
  )
}
