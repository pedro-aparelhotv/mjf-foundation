import Link from 'next/link'
import { CSSProperties } from 'react'

import LogoIcon from 'assets/logo.svg'

interface IMenuProps {
  isOpen: boolean
  setIsOpen: (state: boolean) => void
}

const Menu = ({ isOpen, setIsOpen }: IMenuProps) => {
  const handleClickOnLink = () => {
    setIsOpen(false)
  }

  return (
    <div className="menu" data-active={isOpen}>
      <div className="menu__wrapper">
        <div
          className="menu__map"
          // onClick={() => setOpen(state => !state)}
        >
          <div
            className="menu__map__fold --first"
            style={{ '--order': 1 } as CSSProperties}
            data-active={isOpen}
          >
            <div className="menu__map__fold__front --view --first">
              <Link href="/">
                <a className="menu__link__logo" data-link="the-foundation">
                  <LogoIcon />
                </a>
              </Link>

              <Link href="/the-foundation">
                <a
                  className="menu__link"
                  onClick={handleClickOnLink}
                  data-link="the-foundation"
                >
                  <span>01</span>The Foundation
                </a>
              </Link>
            </div>

            <div
              className="menu__map__fold --second"
              style={{ '--order': 2 } as CSSProperties}
              data-active={isOpen}
            >
              <div className="menu__map__fold__back --second" />

              <div className="menu__map__fold__front --second">
                <div className="menu__map__fold__front --view --second">
                  <Link href="/the-place">
                    <a
                      className="menu__link"
                      onClick={handleClickOnLink}
                      data-link="the-place"
                    >
                      <span>02</span>The Place
                    </a>
                  </Link>
                  <Link href="/news">
                    <a
                      className="menu__link"
                      onClick={handleClickOnLink}
                      data-link="news"
                    >
                      <span>03</span>News
                    </a>
                  </Link>
                </div>

                <div
                  className="menu__map__fold --third"
                  style={{ '--order': 3 } as CSSProperties}
                  data-active={isOpen}
                >
                  <div className="menu__map__fold__back --third" />

                  <div className="menu__map__fold__front --third">
                    <div className="menu__map__fold__front --view --third">
                      <Link href="/fellows">
                        <a
                          className="menu__link"
                          onClick={handleClickOnLink}
                          data-link="fellows"
                        >
                          <span>04</span>Fellows
                        </a>
                      </Link>
                    </div>

                    <div
                      className="menu__map__fold --fourth"
                      style={{ '--order': 4 } as CSSProperties}
                      data-active={isOpen}
                    >
                      <div className="menu__map__fold__back --fourth" />

                      <div className="menu__map__fold__front --fourth">
                        <div className="menu__map__fold__front --view --fourth">
                          <Link href="/events">
                            <a
                              className="menu__link"
                              onClick={handleClickOnLink}
                              data-link="events"
                            >
                              <span>05</span>Events
                            </a>
                          </Link>
                          <Link href="/board">
                            <a
                              className="menu__link"
                              onClick={handleClickOnLink}
                              data-link="board"
                            >
                              <span>06</span>Board
                            </a>
                          </Link>
                        </div>

                        <div
                          className="menu__map__fold --fifth"
                          style={{ '--order': 5 } as CSSProperties}
                          data-active={isOpen}
                        >
                          <div className="menu__map__fold__back --fifth" />

                          <div className="menu__map__fold__front --fifth">
                            <div className="menu__map__fold__front --view --fifth">
                              <Link href="/library">
                                <a
                                  className="menu__link"
                                  onClick={handleClickOnLink}
                                  data-link="library"
                                >
                                  <span>07</span>Library
                                </a>
                              </Link>
                              <Link href="/contact">
                                <a
                                  className="menu__link"
                                  onClick={handleClickOnLink}
                                  data-link="contact"
                                >
                                  <span>08</span>Contact
                                </a>
                              </Link>

                              <div className="menu__footer">
                                <div className="menu__tag">
                                  <span>winter</span>
                                </div>
                                <a className="menu__tag">instagram</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
