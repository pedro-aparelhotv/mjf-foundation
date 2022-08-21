import { useSmoothScroll } from 'hooks/useSmoothScroll'

import Figure from 'components/Figure'
import Section from 'components/Section'

export default function Board() {
  useSmoothScroll({
    selector: '.board',
    disable: false,
  })

  return (
    <main className="board">
      <div className="board__wrapper">
        <div className="board__content">
          <Section
            data={{
              title: 'HONORARY BOARD',
              paragraph: `A K Dolven \nAntony Gormeley`,
            }}
          />
          <Section
            data={{
              title: 'Board',
              paragraph: `Ase Aulie Michelet (Chair) \n Maaretta Jaukkuri \n Katya Garcia-Antón`,
            }}
          />
          <Section
            data={{
              title: 'Advisory Board',
              paragraph: `Thora Dolven Kalke \nLeevi Haapala \nJumana Manna \nHilde Methi \nYoshiaki Nishino \n Gediminas Urbonas`,
            }}
          />
          <Section
            data={{
              title: 'Director',
              paragraph: `Annika Wistrom (2018 — present) \nAudhild Dahlstrom (2015 — 2018)`,
            }}
          />
          <Section
            data={{
              title: 'Supporters',
              paragraph: `Annika Wistrom (2018 — present) \nAudhild Dahlstrom (2015 — 2018)`,
            }}
          />
        </div>

        <div className="board__content">
          <Figure
            data={{
              url: '/images/board.png',
              caption:
                'The vision of MJF would not be possible without the kind support of many artists including, Kari Cavén, Tony Cragg, Dorothy Cross, A K Dolven, Anne-Karin Furunes, Antony Gormley, Dan Graham, Alfredo Jaar, Anish Kapoor, Cildo Meireles, Esko Männikkö, Bjørn Nørgaard,  Markus Raetz, and Gediminas Urbonas.',
            }}
          />
        </div>
      </div>
    </main>
  )
}
