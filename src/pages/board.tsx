import { GetStaticProps } from 'next'

import { useSmoothScroll } from 'hooks/useSmoothScroll'

import prismicApi, { getDefaults } from 'services/prismic'

import Figure from 'components/Figure'
import Section from 'components/Section'

export default function Board({ content }) {
  useSmoothScroll({
    selector: '.board__content.--scrollable',
    disable: false,
  })

  return (
    <main className="board">
      <div className="board__wrapper">
        <div className="board__content --scrollable">
          {content.data?.slices?.map(
            slice =>
              slice.slice_type === 'section' && (
                <Section
                  key={slice.id}
                  data={{
                    title: slice.primary.title,
                    paragraph: slice.primary.text,
                    // fellows: slice.items,
                  }}
                />
              ),
          )}
        </div>

        <div className="board__content">
          {content.data?.image && (
            <Figure
              data={{
                url: content.data.image.url,
                caption: content.data.image.alt,
              }}
            />
          )}
        </div>
      </div>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async ctx => {
  const defaults = await getDefaults()
  const data = await prismicApi.getSingle('board_page')

  return {
    props: { defaults, content: data },
  }
}
