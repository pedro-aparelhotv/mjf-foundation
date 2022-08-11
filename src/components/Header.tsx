import Link from 'next/link'

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Link href="/" passHref>
          <a className="header__link">Maaretta Jaukkuri Foundation</a>
        </Link>

        <button className="header__menu-btn">Menu</button>
      </div>
    </header>
  )
}

export default Header
