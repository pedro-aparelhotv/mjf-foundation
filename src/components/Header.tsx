import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

import LogoIcon from 'assets/logo.svg'

import Menu from './Menu'

const Header = () => {
  const router = useRouter()
  const [menuIsOpen, setMenuIsOpen] = useState(router.pathname.slice(1) === '')

  const handleOpenMenu = () => {
    setMenuIsOpen(true)
    setTimeout(() => {
      router.push('/')
    }, 1200)
  }

  const pageTitle = router.pathname.slice(1).split('-').join(' ')

  return (
    <header className="header">
      <div className="header__wrapper">
        <Link href="/" passHref>
          <a className="header__link">
            <LogoIcon />
            <span className="sr-only">Maretta Jaukkuri Foundation</span>
          </a>
        </Link>

        <button
          className="header__menu-btn"
          type="button"
          onClick={handleOpenMenu}
        >
          {pageTitle}
          <div className="header__menu-btn__icon" />
        </button>

        <Menu isOpen={menuIsOpen} setIsOpen={setMenuIsOpen} />
      </div>
    </header>
  )
}

export default Header
