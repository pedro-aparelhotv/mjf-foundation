import { PrismicRichText } from '@prismicio/react'
import { GetStaticProps } from 'next'

import { useSmoothScroll } from 'hooks/useSmoothScroll'

import prismicApi, { getDefaults } from 'services/prismic'

export default function Contact({ content }) {
  useSmoothScroll({
    selector: '.contact',
    disable: false,
  })

  return (
    <main className="contact">
      <div className="contact__wrapper">
        <PrismicRichText field={content.data.content} />
      </div>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async ctx => {
  const defaults = await getDefaults()
  const data = await prismicApi.getSingle('contact_page')

  return {
    props: { defaults, content: data },
  }
}
