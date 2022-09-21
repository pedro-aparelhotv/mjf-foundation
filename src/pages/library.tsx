import { PrismicRichText } from '@prismicio/react'
import { GetStaticProps } from 'next'

import prismicApi, { getDefaults } from 'services/prismic'

export default function Library({ content }) {
  return (
    <main className="library">
      <div className="library__wrapper">
        <PrismicRichText field={content.data.summary} />

        <a className="library__link">
          <span>{content?.data?.link_text ?? ''}</span>
          <span>External Link</span>
        </a>
      </div>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async ctx => {
  const defaults = await getDefaults()
  const data = await prismicApi.getSingle('library')

  return {
    props: { defaults, content: data },
  }
}
