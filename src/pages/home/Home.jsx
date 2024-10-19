import React from 'react'
import myPicture from '../../assets/img/profile-pic-4.webp'
import Footer from '../../components/layout/Footer'
import styles from './Home.module.css'
import TechStack from './TechStack'
import WorkExperience from './WorkExperience'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Home() {

    const { t } = useTranslation();

    return (
        <>

            <div className={styles.homeMainWrapper}>

                <div className="container pt-5 mt-4">

                    <div className="row m-0 flex-md-row flex-column-reverse">

                        <div className="col-md-6">
                            <div>
                                <h1 className='bold text-justify'>
                                    {t('heroSection.title')}
                                </h1>

                                <h5 className="text-secondary text-justify fw-400 py-4">
                                    {t('heroSection.description')}
                                </h5>

                                <div className="d-flex justify-content-center align-items-center justify-content-md-start pt-4">
                                    <Link to="/contact" className="btn btn-primary rounded-large fw-500 px-5 py-3">
                                        {t('heroSection.contactMe')}
                                    </Link>
                                    <div className='d-flex align-items-center px-3'>
                                        <div className='online-status-badge'></div>
                                        <span className='ps-2'>{t('heroSection.availableForWork')}</span>
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

                <TechStack />
                <WorkExperience />

            </div>

            <Footer />

        </>
    )
}

export default Home
