import { GetStaticProps } from 'next'
import Head from 'next/head'

import { useSmoothScroll } from 'hooks/useSmoothScroll'

import prismicApi, { getDefaults } from 'services/prismic'

import Figure from 'components/Figure'
import Section from 'components/Section'

export default function TheFoundation({ content }) {
  useSmoothScroll({
    selector: '.the-foundation__content.--scrollable',
    disable: false,
  })

  function isSliceSectionVariantDefault(slice) {
    return slice.slice_type === 'section' && slice.variation === 'default'
  }

  return (
    <>
      <Head>
        <title>News | Maretta Jaukkuri Foundation</title>
      </Head>
      <main className="the-foundation">
        <div className="the-foundation__wrapper">
          <div className="the-foundation__content --scrollable">
            {content.data?.slices?.map(
              slice =>
                isSliceSectionVariantDefault(slice) && (
                  <Section
                    key={slice.id}
                    data={{
                      title: slice.primary.title,
                      paragraph: slice.primary.text,
                    }}
                  />
                ),
            )}
          </div>

          <div className="the-foundation__content">
            {content.data?.images && <Figure data={content.data.images} />}
          </div>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const defaults = await getDefaults()
  const data = await prismicApi.getSingle('the_foundation')

  return {
    props: { defaults, content: data },
    revalidate: 10,
  }
}
