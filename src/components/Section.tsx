import React, { useMemo } from 'react'
import { IPrismicCTFellow } from 'types/PrismicCollectionTypes'

interface ISectionProps {
  data: {
    title: string
    paragraph?: string
    boardMembers?: Array<{
      board: IPrismicCTFellow
    }>
    setBoardSelected?: (fellow: IPrismicCTFellow) => void
  }
}

const Section = ({ data }: ISectionProps) => {
  const boardMembers = useMemo(() => {
    if (!data.boardMembers || data?.boardMembers?.length === 0) return null

    return data.boardMembers.map(({ board }) => ({
      ...board,
    }))
  }, [data])

  return (
    <section className="section">
      <h1 className="section__title">{data?.title ?? ''}</h1>
      {data?.paragraph && (
        <p className="section__paragraph">{data?.paragraph ?? ''}</p>
      )}

      {boardMembers?.length > 0 && (
        <ul>
          {boardMembers.map(
            board =>
              Object.keys(board).length > 0 && (
                <li key={board.id}>
                  <button
                    type="button"
                    onClick={() => data.setBoardSelected(board)}
                  >
                    {board.data.name}
                  </button>
                </li>
              ),
          )}
        </ul>
      )}
    </section>
  )
}

export default Section
