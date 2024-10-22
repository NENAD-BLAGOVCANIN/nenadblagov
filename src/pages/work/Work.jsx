import React from 'react'
import CRMasterImg1 from '../../assets/img/projects/CRMaster/1.png'
import CRMasterImg2 from '../../assets/img/projects/CRMaster/2.png'
import CRMasterImg3 from '../../assets/img/projects/CRMaster/3.png'
import CRMasterImg4 from '../../assets/img/projects/CRMaster/4.png'
import MultichatWebImg1 from '../../assets/img/projects/Multichat Web/1.png'
import MultichatWebImg2 from '../../assets/img/projects/Multichat Web/2.png'
import MultichatWebImg3 from '../../assets/img/projects/Multichat Web/3.png'
import VidakiImgThumbnail from '../../assets/img/projects/Vidaki/thumbnail.png'
import VidakiImg1 from '../../assets/img/projects/Vidaki/1.png'
import VidakiImg2 from '../../assets/img/projects/Vidaki/2.png'
import VidakiImg3 from '../../assets/img/projects/Vidaki/3.png'
import GR8Img1 from '../../assets/img/projects/GR8CITYRP/Snimak ekrana 2024-09-05 180125.png'
import GR8Img2 from '../../assets/img/projects/GR8CITYRP/Snimak ekrana 2024-09-05 180301.png'
import GR8Img3 from '../../assets/img/projects/GR8CITYRP/Snimak ekrana 2024-09-05 180347.png'
import GR8Img4 from '../../assets/img/projects/GR8CITYRP/gr8-1.png'
import GR8Img5 from '../../assets/img/projects/GR8CITYRP/gr8-2.png'
import GR8Img6 from '../../assets/img/projects/GR8CITYRP/gr8-3.png'
import styles from './Work.module.css'
import Zoom from 'react-medium-image-zoom'
import Footer from '../../components/layout/Footer'
import 'react-medium-image-zoom/dist/styles.css';

function Work() {
    return (
        <div className="container pt-5">

            <div className="row mb-5 pb-5">
                <div className="col-md-7 px-4">
                    <Zoom>
                        <img src={CRMasterImg1} alt="" className="image rounded shadow w-100" loading='lazy' /></Zoom>
                </div>
                <div className="col-md-5 px-4">
                    <u>
                        <a href='https://app.bigbusinessengine.com/' target='_blank' className='text-decoration-none h3 bold mb-0'>Big Business Engine</a>
                    </u>

                    <div className='pb-4 d-flex align-items-center flex-wrap w-100'>
                        <span className={styles.tag}>Business</span>
                        <span className={styles.tag}>CRM</span>
                        <span className={styles.tag}>Project Management</span>
                    </div>

                    <p className={styles.projectDescription}>
                        BigBusinessEngine is a productivity tool that can be used by businesses to manaage their projects and worker activities.
                        It lets you manage tasks, workers, clients, products, expenses and much more. It even gives you your own calendar to track events,
                        dashboard to view performance stats. You can set your availabilities, book calls and basically do everything you need for your project all in one place.
                    </p>

                    <div className='row'>
                        <div className="col-md-4 pt-3">
                            <Zoom>
                                <img src={CRMasterImg2} alt="" className="image rounded shadow-sm w-100" loading='lazy' />
                            </Zoom>
                        </div>
                        <div className="col-md-4 pt-3">
                            <Zoom>
                                <img src={CRMasterImg3} alt="" className="image rounded shadow-sm w-100" loading='lazy' />
                            </Zoom>
                        </div>
                        <div className="col-md-4 pt-3">
                            <Zoom>
                                <img src={CRMasterImg4} alt="" className="image rounded shadow-sm w-100" loading='lazy' />
                            </Zoom>
                        </div>
                    </div>

                </div>

            </div>


            <div className="row mt-5 pt-5 pb-5 mb-5">
                <div className="col-md-5 px-4">
                    <a href="https://multi-chat.io/" target="_blank" className='h3 bold mb-0'>Multichat</a>

                    <div className='pb-4 d-flex align-items-center flex-wrap w-100'>
                        <span className={styles.tag}>Communication</span>
                        <span className={styles.tag}>Social</span>
                    </div>

                    <p className={styles.projectDescription}>
                        Multichat is a all-in-one messaging app which lets you integrate all your favourite messaging apps (Messenger, Discord, Telegram, WhatsApp...) all in one place. You can create multiple tabs with different accounts with a messaging app of your choosing.
                    </p>

                    <div className='row'>
                        <div className="col-md-4 pt-3">
                            <Zoom>
                                <img src={MultichatWebImg1} alt="" className="image rounded shadow-sm w-100" loading='lazy' />
                            </Zoom>
                        </div>
                        <div className="col-md-4 pt-3">
                            <Zoom>
                                <img src={MultichatWebImg2} alt="" className="image rounded shadow-sm w-100" loading='lazy' />
                            </Zoom>
                        </div>
                        <div className="col-md-4 pt-3">
                            <Zoom>
                                <img src={MultichatWebImg3} alt="" className="image rounded shadow-sm w-100" loading='lazy' />
                            </Zoom>
                        </div>
                    </div>

                </div>

                <div className="col-md-7 px-4">
                    <Zoom>
                        <img src={MultichatWebImg2} alt="" className="image rounded shadow w-100" loading='lazy' /></Zoom>
                </div>

            </div>

            <div className="row mt-5 pt-5 pb-5 mb-5">
                <div className="col-md-7 px-4">
                    <Zoom>
                        <img src={VidakiImgThumbnail} alt="" className="image rounded shadow w-100" loading='lazy' /></Zoom>
                </div>
                <div className="col-md-5 px-4">
                    <a href='https://vidaki.com/' target='_blank' className='h3 bold mb-0'>Vidaki.com</a>

                    <div className='pb-4 d-flex align-items-center flex-wrap w-100'>
                        <span className={styles.tag}>Classifieds</span>
                        <span className={styles.tag}>eCommerce</span>
                    </div>

                    <p className={styles.projectDescription}>
                        Vidaki.com is a classifieds website where people can promote or buy all sorts of products or services. Similar concept to Craigslist. Platform was built with PHP Laravel. Currently unfinished but still up and running last I checked.
                    </p>

                    <div className='row'>
                        <div className="col-md-4 pt-3">
                            <Zoom>
                                <img src={VidakiImg1} alt="" className="image rounded shadow-sm w-100" loading='lazy' />
                            </Zoom>
                        </div>
                        <div className="col-md-4 pt-3">
                            <Zoom>
                                <img src={VidakiImg2} alt="" className="image rounded shadow-sm w-100" loading='lazy' />
                            </Zoom>
                        </div>
                        <div className="col-md-4 pt-3">
                            <Zoom>
                                <img src={VidakiImg3} alt="" className="image rounded shadow-sm w-100" loading='lazy' />
                            </Zoom>
                        </div>
                    </div>

                </div>

            </div>


            <div className="row mt-5 pt-5 pb-5 mb-5">
                <div className="col-md-5 px-4">
                    <a href='https://gr8cityrp.com/' target='_blank' className='h3 bold mb-0'>GR8 City RP</a>

                    <div className='pb-4 d-flex align-items-center flex-wrap w-100'>
                        <span className={styles.tag}>Gaming</span>
                        <span className={styles.tag}>Community</span>
                    </div>

                    <p className={styles.projectDescription}>
                        A website for a role play gaming community where they have applications which people can fill and if the application is approved, the user gets access to a particular part of their gaming community, servers, privileges etc...
                        <br /> <br />
                        Website includes an admin panel, 2 communities which you can switch between, a dashboard, authentication pages, multiple roles (community admin, website admin...)
                    </p>

                    <div className='row'>
                        <div className="col-md-4 pt-3">
                            <Zoom>
                                <img src={GR8Img2} alt="" className="image rounded shadow-sm w-100" loading='lazy' />
                            </Zoom>
                        </div>
                        <div className="col-md-4 pt-3">
                            <Zoom>
                                <img src={GR8Img3} alt="" className="image rounded shadow-sm w-100" loading='lazy' />
                            </Zoom>
                        </div>
                        <div className="col-md-4 pt-3">
                            <Zoom>
                                <img src={GR8Img4} alt="" className="image rounded shadow-sm w-100" loading='lazy' />
                            </Zoom>
                        </div>
                        <div className="col-md-4 pt-3">
                            <Zoom>
                                <img src={GR8Img5} alt="" className="image rounded shadow-sm w-100" loading='lazy' />
                            </Zoom>
                        </div>
                        <div className="col-md-4 pt-3">
                            <Zoom>
                                <img src={GR8Img6} alt="" className="image rounded shadow-sm w-100" loading='lazy' />
                            </Zoom>
                        </div>
                    </div>

                </div>

                <div className="col-md-7 px-4">
                    <Zoom>
                        <img src={GR8Img1} alt="" className="image rounded shadow w-100" loading='lazy' /></Zoom>
                </div>

            </div>

            <Footer />

        </div>
    )
}

export default Work
