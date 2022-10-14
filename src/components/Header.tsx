import { useRouter } from 'next/router'
import { useState } from 'react'
import { IPrismicCTVisitorsLog } from 'types/PrismicCollectionTypes'
import { IPrismicSTNavigation } from 'types/PrismisSingleType'

import LogoMobileIcon from 'assets/logo-mobile.svg'
import LogoIcon from 'assets/logo.svg'

import Menu from './Menu'
import VisitorsLog from './VisitorsLog'

interface IHeaderProps {
  content: {
    navigation: IPrismicSTNavigation
    visitorsLog: IPrismicCTVisitorsLog[]
  }
}

const Header = ({ content }: IHeaderProps) => {
  const router = useRouter()
  const [menuIsOpen, setMenuIsOpen] = useState(router.pathname.slice(1) === '')
  const [visitorsLogIsOpen, setVisitorsLogIsOpen] = useState(false)

  const handleOpenMenu = () => {
    setMenuIsOpen(true)
    setTimeout(() => {
      router.push('/')
    }, 1000)
  }

  const pageTitle = router.pathname.slice(1).split('-').join(' ')

  const index = router.pathname.slice(1)

  const { visitorsLog, navigation } = content

  return (
    <header className="header">
      <div className="header__wrapper" data-page={index}>
        <a className="header__link" onClick={handleOpenMenu}>
          <LogoIcon className="header__icon" />
          <LogoMobileIcon className="header__icon --mobile" />
          <span className="sr-only">Maretta Jaukkuri Foundation</span>
        </a>

        <button
          className="header__menu-btn"
          type="button"
          onClick={handleOpenMenu}
        >
          {pageTitle}
          <div className="header__menu-btn__icon" />
        </button>

        <Menu
          content={navigation}
          isOpen={menuIsOpen}
          setIsOpen={setMenuIsOpen}
          setVisitorsLogIsOpen={setVisitorsLogIsOpen}
        />

        <VisitorsLog
          content={visitorsLog}
          isOpen={visitorsLogIsOpen}
          setIsOpen={setVisitorsLogIsOpen}
        />
      </div>
    </header>
  )
}

export default Header
