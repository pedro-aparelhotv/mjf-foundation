import React, { useMemo } from 'react'

interface ISectionProps {
  data: {
    title: string
    paragraph?: string
    fellows?: any
  }
}

const Section = ({ data }: ISectionProps) => {
  const fellows = useMemo(() => {
    if (!data.fellows || data?.fellows?.length === 0) return null

    return data.fellows.map(({ fellows }) => ({
      ...fellows,
      name: fellows.slug.split('-').join(' '),
    }))
  }, [data])

  return (
    <section className="section">
      <h1 className="section__title">{data?.title ?? ''}</h1>
      {data?.paragraph && (
        <p className="section__paragraph">{data?.paragraph ?? ''}</p>
      )}

      {fellows?.length > 0 && (
        <ul>
          {fellows.map(fellow => (
            <li key={fellow.id}>
              <button>{fellow.name}</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Section
