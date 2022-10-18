import { PrismicRichText } from '@prismicio/react'
import { GetStaticProps } from 'next'
import Head from 'next/head'

import prismicApi, { getDefaults } from 'services/prismic'

export default function Library({ content }) {
  return (
    <>
      <Head>
        <title>Library | Maretta Jaukkuri Foundation</title>
      </Head>
      <main className="library">
        <div className="library__wrapper">
          <PrismicRichText field={content.data.summary} />

          <a
            className="library__link"
            href={content.data.library_link.url}
            target="_blank"
            rel="noreferrer"
          >
            <span>{content?.data?.link_text ?? ''}</span>
            <span>External Link</span>
          </a>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const defaults = await getDefaults()
  const data = await prismicApi.getSingle('library')

  return {
    props: { defaults, content: data },
    revalidate: 10,
  }
}
