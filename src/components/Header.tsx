import { useRouter } from 'next/router'
import { useState } from 'react'

import LogoIcon from 'assets/logo.svg'

import Menu from './Menu'
import VisitorsLog from './VisitorsLog'

interface IHeaderProps {
  content: {
    navigation: any[]
    visitorsLog: any[]
  }
}

const Header = ({ content }: IHeaderProps) => {
  const router = useRouter()
  const [menuIsOpen, setMenuIsOpen] = useState(router.pathname.slice(1) === '')

  const handleOpenMenu = () => {
    setMenuIsOpen(true)
    setTimeout(() => {
      router.push('/')
    }, 1000)
  }

  const pageTitle = router.pathname.slice(1).split('-').join(' ')

  const { visitorsLog, navigation } = content

  console.log(content)

  return (
    <header className="header">
      <div className="header__wrapper">
        <a className="header__link" onClick={handleOpenMenu}>
          <LogoIcon />
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

        <VisitorsLog content={visitorsLog} />

        <Menu
          content={navigation}
          isOpen={menuIsOpen}
          setIsOpen={setMenuIsOpen}
        />
      </div>
    </header>
  )
}

export default Header
