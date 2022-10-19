import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { IPrismicCTFellow } from 'types/PrismicCollectionTypes'

import { useSmoothScroll } from 'hooks/useSmoothScroll'

import prismicApi, { getDefaults } from 'services/prismic'

import ArticleModal from 'components/ArticleModal'
import Figure from 'components/Figure'
import Section from 'components/Section'

export default function Board({ content }) {
  const [isOpen, setIsOpen] = useState(false)

  useSmoothScroll({
    selector: '.board__content.--scrollable',
    disable: isOpen,
  })

  const [fellowSelected, setFellowSelected] = useState(null)

  const handleClickOnFellow = (fellow: IPrismicCTFellow) => {
    setFellowSelected(fellow)
    setIsOpen(true)
  }

  return (
    <>
      <Head>
        <title>News | Maretta Jaukkuri Foundation</title>
      </Head>

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
                      boardMembers: slice.items,
                      setBoardSelected: handleClickOnFellow,
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

      <ArticleModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        content={fellowSelected}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const defaults = await getDefaults()
  const data = await prismicApi.getSingle('board_page', {
    fetchLinks: ['board.name', 'board.content', 'board.profile_image'],
  })

  return {
    props: { defaults, content: data },
    revalidate: 10,
  }
}
