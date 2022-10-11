import React from 'react'

const Log = () => (
  <article className="log">
    <div className="log__content"></div>

    <footer className="log__info">
      <p className="log__paragraph"></p>
    </footer>
  </article>
)

const VisitorsLog = () => {
  return (
    <aside className="visitors-log">
      <div className="visitors-log__wrapper">
        <div className="visitors-log__header">
          <h1 className="visitors-log__title">Visitors Log</h1>
        </div>

        <ul className="visitors-log__list">
          <li className="visitors-log__item">
            <Log />
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default VisitorsLog
