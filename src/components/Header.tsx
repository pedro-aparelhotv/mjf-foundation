import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

const Header = () => {
  const router = useRouter()
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const handleOpenMenu = () => {
    setMenuIsOpen(true)
  }
  const handleCloseMenu = () => {
    setMenuIsOpen(false)
  }

  const pageTitle = router.pathname.slice(1).split('-').join(' ')

  return (
    <header className="header">
      <div className="header__wrapper">
        <Link href="/" passHref>
          <a className="header__link">
            <span>Maaretta Jaukkuri</span> Foundation
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

        <div className="header__menu" data-open={menuIsOpen}>
          <div className="header__menu__wrapper">
            <div className="header__map-lines">
              <div className="header__map-lines__column" />
              <div className="header__map-lines__column" />
              <div className="header__map-lines__column" />
              <div className="header__map-lines__column" />
            </div>

            <nav className="header__menu__nav">
              <ul className="header__menu__list">
                <li className="header__menu__item" data-id="foundation">
                  <Link href="/the-foundation" passHref>
                    <a className="header__menu__link" onClick={handleCloseMenu}>
                      <span>01</span> The Foundation
                    </a>
                  </Link>
                </li>
                <li className="header__menu__item" data-id="mission">
                  <Link href="/" passHref>
                    <a className="header__menu__link" onClick={handleCloseMenu}>
                      <span>02</span> Mission
                    </a>
                  </Link>
                </li>
                <li className="header__menu__item" data-id="fellows">
                  <Link href="/" passHref>
                    <a className="header__menu__link" onClick={handleCloseMenu}>
                      <span>03</span> Fellows
                    </a>
                  </Link>
                </li>
                <li className="header__menu__item" data-id="about">
                  <Link href="/" passHref>
                    <a className="header__menu__link" onClick={handleCloseMenu}>
                      <span>04</span> About
                    </a>
                  </Link>
                </li>
                <li className="header__menu__item" data-id="library">
                  <Link href="/library" passHref>
                    <a className="header__menu__link" onClick={handleCloseMenu}>
                      <span>05</span> Library
                    </a>
                  </Link>
                </li>
                <li className="header__menu__item" data-id="events">
                  <Link href="/events" passHref>
                    <a className="header__menu__link" onClick={handleCloseMenu}>
                      <span>06</span> Events
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="header__menu__footer">
              <div className="header__menu__footer__group">
                <div className="header__menu__tag">
                  <span>winter</span>
                </div>
                <a className="header__menu__tag">instagram</a>
              </div>

              <button
                className="header__close-btn"
                type="button"
                onClick={handleCloseMenu}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
