import React from 'react'
import logo from '../../assets/img/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { MoonFill, SunFill } from 'react-bootstrap-icons'
import LanguageSelector from '../LanguageSelector'
import { useTranslation } from 'react-i18next'
import { Navbar as ReactNavbar, Container, NavDropdown, Nav, Dropdown } from "react-bootstrap";

function Navbar({ darkMode, toggleDarkMode }) {

    const { t } = useTranslation();

    return (
        <ReactNavbar
            sticky="top"
            id="navbar"
            expand="lg"
            className="navbar shadow-sm w-100 position-fixed navbar-expand-lg justify-content-start justify-content-lg-center"
            collapseOnSelect={true}>
            <ReactNavbar.Toggle className='bg-white mx-4' aria-controls="basic-navbar-nav" />

            <ReactNavbar.Collapse id="basic-navbar-nav">
                <ul className="container navbar-nav m-auto justify-content-between w-100">

                    <div className='d-flex px-3'>
                        <div className='d-flex align-items-center'>
                            <i class="pulse green"></i>
                            <span className='ps-2'>{t('heroSection.availableForWork')}</span>
                        </div>
                    </div>

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
                                    <SunFill className='sun' />
                                    <MoonFill className='moon' />
                                    <div className="ball"></div>
                                </label>
                            </div>
                        </div>

                        <LanguageSelector />
                    </div>


                </ul>
            </ReactNavbar.Collapse>
        </ReactNavbar>
    )
}

export default Navbar
