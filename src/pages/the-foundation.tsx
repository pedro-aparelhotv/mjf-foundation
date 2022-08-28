import { useSmoothScroll } from 'hooks/useSmoothScroll'

import Figure from 'components/Figure'
import Section from 'components/Section'

export default function TheFoundation() {
  useSmoothScroll({
    selector: '.the-foundation__content.--scrollable',
    disable: false,
  })

  return (
    <main className="the-foundation">
      <div className="the-foundation__wrapper">
        <div className="the-foundation__content --scrollable">
          <Section
            data={{
              title: 'Mission',
              paragraph:
                'Maaretta Jaukkuri is a visionary curator and professor of contemporary art who has, throughout her career, influencedstudents, theorists, artists and the public. It is in her name, and supported by those whom she has touched, that the Maaretta Jaukkuri Foundation was initiated, led by the collaborative effort of Antony Gormley and A K Dolven. The Maaretta Jaukkuri Foundation (MJF) is a not-for-profit organisation, founded on the 10th of August 2014.',
            }}
          />
          <Section
            data={{
              title: 'About',
              paragraph:
                ' Maaretta Jaukkuri Foundation is situated on an island in Lofoten, on the edge of a continental shelf. Like other far away peripheries, the place is sensitive to changes. It is a region of extreme fragility, where we are implicated with changes in nature and the urgent challenges these create.',
            }}
          />
          <Section
            data={{
              title: 'A TEXT BY MAARETTA',
              paragraph:
                ' Maaretta Jaukkuri Foundation is situated on an island in Lofoten, on the edge of a continental shelf. Like other far away peripheries, the place is sensitive to changes. It is a region of extreme fragility, where we are implicated with changes in nature and the urgent challenges these create.',
            }}
          />
        </div>

        <div className="the-foundation__content">
          <Figure
            data={{
              url: '/images/the-foundation.png',
              caption:
                'Maaretta Jaukkuri at Academy of Fine Arts/ University of the Arts, Helsinki by Petri Summanen 2016',
            }}
          />
        </div>
      </div>
    </main>
  )
}
