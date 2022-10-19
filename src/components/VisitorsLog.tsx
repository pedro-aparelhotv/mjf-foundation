import { PrismicRichText } from '@prismicio/react'
import { IPrismicCTVisitorsLog } from 'types/PrismicCollectionTypes'

interface ILogProps {
  content: IPrismicCTVisitorsLog
}

const Log = ({ content }: ILogProps) => (
  <article className="log">
    <div className="log__content">
      <PrismicRichText field={content.data.content} />
    </div>

    <footer className="log__info">
      <p className="log__paragraph">{content.data.author.data.name}</p>
      <p className="log__paragraph">Entry n. {content.uid}</p>
      <p className="log__paragraph">{content.data.created_at}</p>
    </footer>
  </article>
)

interface IVisitorsLogsProps {
  content: IPrismicCTVisitorsLog[]
  isOpen: boolean
  setIsOpen: (state: boolean) => void
}

const VisitorsLog = ({ content, isOpen, setIsOpen }: IVisitorsLogsProps) => {
  return (
    <aside
      className="visitors-log"
      data-active={isOpen}
      onClick={() => setIsOpen(false)}
    >
      <div
        className="visitors-log__wrapper"
        onClick={e => e.stopPropagation()}
        data-active={isOpen}
      >
        <div className="visitors-log__header">
          <h1 className="visitors-log__title">Visitors Log</h1>
          <button
            className="visitors-log__btn"
            type="button"
            onClick={() => setIsOpen(false)}
          >
            <span>X</span>
          </button>
        </div>

        <ul className="visitors-log__list">
          {content.map(log => (
            <li key={log.id} className="visitors-log__item">
              <Log content={log} />
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default VisitorsLog
