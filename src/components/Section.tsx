import React from 'react'

interface ISectionProps {
  data: {
    title: string
    paragraph: string
  }
}

const Section = ({ data }: ISectionProps) => {
  return (
    <section className="section">
      <h1 className="section__title">{data.title}</h1>
      <p className="section__paragraph">{data.paragraph}</p>
    </section>
  )
}

export default Section
