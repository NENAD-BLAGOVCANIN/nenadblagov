import React from 'react'
import logo from '../../assets/img/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { MoonFill, SunFill } from 'react-bootstrap-icons'
import LanguageSelector from '../LanguageSelector'
import { useTranslation } from 'react-i18next'

function Navbar({ darkMode, toggleDarkMode }) {

    const { t } = useTranslation();

    return (
        <nav className="navbar shadow-sm w-100 position-fixed navbar-expand-lg justify-content-center">
            <button className="navbar-toggler btn bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon text-white"></span>
            </button>
            <div className="collapse navbar-collapse">
                <ul className="container navbar-nav m-auto justify-content-between w-100">
                    <li>
                        <Link className="d-flex align-items-center h-100 logo-image-wrapper" to="/">
                            <img id="logo-image" src={logo} alt="Logo" />
                        </Link>
                    </li>

                    <div className='navbar-nav'>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">{t('header.home')}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/work">{t('header.myWork')}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">{t('header.contact')}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">{t('header.about')}</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Nenad%20Blagovcanin.pdf">CV</a>
                        </li>
                    </div>


                    <div className='d-flex align-items-center'>
                        <div className="nav-item nav-link position-relative d-flex align-items-center">
                            <div className="one-quarter" id="switch">
                                <input
                                    type="checkbox"
                                    className="checkbox"
                                    id="chk"
                                    checked={darkMode}
                                    onChange={toggleDarkMode}
                                />
                                <label className="label" htmlFor="chk">
                                    <MoonFill className='moon' />
                                    <SunFill className='sun' />
                                    <div className="ball"></div>
                                </label>
                            </div>
                        </div>

                        <LanguageSelector />
                    </div>


                </ul>
            </div>
        </nav>
    )
}

export default Navbar
