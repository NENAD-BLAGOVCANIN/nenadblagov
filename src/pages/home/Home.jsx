import React from 'react'
import myPicture from '../../assets/img/profile-pic-4.webp'
import Footer from '../../components/layout/Footer'
import styles from './Home.module.css'
import TechStack from './TechStack'
import WorkExperience from './WorkExperience'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { CameraVideo, CameraVideoFill, ChatFill, Phone } from 'react-bootstrap-icons'
import WhatIDo from './WhatIDo'

function Home() {

    const { t } = useTranslation();

    return (
        <>

            <div className={styles.homeMainWrapper}>

                <div className="container pt-5 mt-4">

                    <div className="row m-0 flex-md-row flex-column-reverse">

                        <div className="col-md-6">
                            <div>
                                <h1 className='bold text-justify pt-4 pt-xs-0'>
                                    {t('heroSection.title')}
                                </h1>

                                <h5 className="txt-secondary text-justify fw-400 py-4">
                                    {t('heroSection.description')}
                                </h5>

                                <div className="row pt-4" style={{ maxWidth: 580 }}>
                                    <div className="col-md-5 d-flex align-items-center justify-content-center">
                                        <Link to="/contact" className="btn btn-primary d-flex align-items-center rounded-large fw-500 px-5 py-3">
                                            <ChatFill className='me-2' /> {t('heroSection.contactMe')}
                                        </Link>
                                    </div>
                                    <div className="col-md-1 d-flex align-items-center justify-content-center">
                                        <span className='px-3 py-2'>or</span>
                                    </div>
                                    <div className="col-md-5 d-flex align-items-center justify-content-center">
                                        <a href='https://calendly.com/nenad-multiverzum/introduction-call' className="btn btn-danger d-flex align-items-center rounded-large fw-500 px-5 py-3">
                                            <CameraVideoFill className='me-2' /> {t('heroSection.bookACall')}
                                        </a>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="col-md-6 d-flex justify-content-center">
                            <div className="rounded-circle">
                                <img src={myPicture} style={{ maxWidth: 380, height: 'fit-content' }}
                                    className="img-fluid" alt="" id="my-picture" />
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div className="container py-4">

                <WhatIDo />
                <TechStack />
                <WorkExperience />

            </div>

            <Footer />

        </>
    )
}

export default Home
