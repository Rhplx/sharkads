import React, { useState } from "react"
import { Link } from "gatsby"
import Logo from "../assets/images/logo.jpeg"
import MenuIcon from "../assets/images/white-menu.png"
import "../styles/components/Header.scss"

export default function Header() {
  const [menu, setMenu] = useState(false)

  return (
    <>
      <header className="header">
        <div className="header__container">
          <img src={Logo} alt="Logo" className="header__logo" />
          <ul className="header__list">
            <li className="header__item">
              <Link className="header__link" to="/">
                Inicio
              </Link>
            </li>
            <li className="header__item">
              <Link className="header__link" to="/nosotros">
                Nosotros
              </Link>
            </li>
            <li className="header__item">
              <Link className="header__link" to="/servicios">
                Servicios
              </Link>
            </li>
            <li className="header__item">
              <Link className="header__link" to="/contactanos">
                contacto
              </Link>
            </li>
          </ul>
          <div className="header__mobile">
            <button
              onClick={() => setMenu(!menu)}
              className="header__mobile-menu"
            >
              <img src={MenuIcon} alt="Menu" className="header__mobile-icon" />
            </button>
            {menu && (
              <ul className="header__mobile-list">
                <li className="header__mobile-item">
                  <Link className="header__link" to="/">
                    Inicio
                  </Link>
                </li>
                <li className="header__mobile-item">
                  <Link className="header__link" to="/nosotros">
                    Nosotros
                  </Link>
                </li>
                <li className="header__mobile-item">
                  <Link className="header__link" to="/servicios">
                    Servicios
                  </Link>
                </li>
                <li className="header__mobile-item">
                  <Link className="header__link" to="/contactanos">
                    contacto
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </header>
    </>
  )
}
