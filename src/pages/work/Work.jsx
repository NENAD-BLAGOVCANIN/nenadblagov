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

function Work() {
    return (
        <div className="container py-5">

            <div className="row mb-5 pb-5">
                <div className="col-md-7 px-4">
                    <img src={CRMasterImg1} alt="" className="rounded shadow w-100" />
                </div>
                <div className="col-md-5 px-4">
                    <h3 className='bold mb-0'>Big Business Engine</h3>

                    <div className='py-4 d-flex align-items-center flex-wrap w-100'>
                        <span className={styles.tag}>Business</span>
                        <span className={styles.tag}>CRM</span>
                        <span className={styles.tag}>Project Management</span>
                    </div>

                    <p className={styles.projectDescription}>
                        Blackbox Meats is a technology company that connects people with high-quality meats delivered fresh to wherever
                        they are in a city. This is achieved by working with strategic partners that specialize in the beef industry.
                        Our technology is revolutionizing the way consumers purchase high quality products.
                    </p>

                    <div className='row'>
                        <div className="col-md-4 pt-3">
                            <img src={CRMasterImg2} alt="" className="rounded shadow-sm w-100" />
                        </div>
                        <div className="col-md-4 pt-3">
                            <img src={CRMasterImg3} alt="" className="rounded shadow-sm w-100" />
                        </div>
                        <div className="col-md-4 pt-3">
                            <img src={CRMasterImg4} alt="" className="rounded shadow-sm w-100" />
                        </div>
                    </div>

                </div>

            </div>


            <div className="row mt-5 pt-5 pb-5 mb-5">
                <div className="col-md-5 px-4">
                    <h3 className='bold mb-0'>Multichat</h3>

                    <div className='py-4 d-flex align-items-center flex-wrap w-100'>
                        <span className={styles.tag}>Business</span>
                        <span className={styles.tag}>CRM</span>
                    </div>

                    <p className={styles.projectDescription}>
                        Blackbox Meats is a technology company that connects people with high-quality meats delivered fresh to wherever
                        they are in a city. This is achieved by working with strategic partners that specialize in the beef industry.
                        Our technology is revolutionizing the way consumers purchase high quality products.
                    </p>

                    <div className='row'>
                        <div className="col-md-4 pt-3">
                            <img src={MultichatWebImg1} alt="" className="rounded shadow-sm w-100" />
                        </div>
                        <div className="col-md-4 pt-3">
                            <img src={MultichatWebImg2} alt="" className="rounded shadow-sm w-100" />
                        </div>
                        <div className="col-md-4 pt-3">
                            <img src={MultichatWebImg3} alt="" className="rounded shadow-sm w-100" />
                        </div>
                    </div>

                </div>

                <div className="col-md-7 px-4">
                    <img src={MultichatWebImg2} alt="" className="rounded shadow w-100" />
                </div>

            </div>

            <div className="row mt-5 pt-5 pb-5 mb-5">
                <div className="col-md-7 px-4">
                    <img src={VidakiImgThumbnail} alt="" className="rounded shadow w-100" />
                </div>
                <div className="col-md-5 px-4">
                    <h3 className='bold mb-0'>Vidaki.com</h3>

                    <div className='py-4 d-flex align-items-center flex-wrap w-100'>
                        <span className={styles.tag}>Business</span>
                        <span className={styles.tag}>CRM</span>
                        <span className={styles.tag}>Project Management</span>
                    </div>

                    <p className={styles.projectDescription}>
                        Blackbox Meats is a technology company that connects people with high-quality meats delivered fresh to wherever
                        they are in a city. This is achieved by working with strategic partners that specialize in the beef industry.
                        Our technology is revolutionizing the way consumers purchase high quality products.
                    </p>

                    <div className='row'>
                        <div className="col-md-4 pt-3">
                            <img src={VidakiImg1} alt="" className="rounded shadow-sm w-100" />
                        </div>
                        <div className="col-md-4 pt-3">
                            <img src={VidakiImg2} alt="" className="rounded shadow-sm w-100" />
                        </div>
                        <div className="col-md-4 pt-3">
                            <img src={VidakiImg3} alt="" className="rounded shadow-sm w-100" />
                        </div>
                    </div>

                </div>

            </div>


            <div className="row mt-5 pt-5 pb-5 mb-5">
                <div className="col-md-5 px-4">
                    <h3 className='bold mb-0'>GR8 City RP</h3>

                    <div className='py-4 d-flex align-items-center flex-wrap w-100'>
                        <span className={styles.tag}>Gaming</span>
                        <span className={styles.tag}>Community</span>
                    </div>

                    <p className={styles.projectDescription}>
                        Blackbox Meats is a technology company that connects people with high-quality meats delivered fresh to wherever
                        they are in a city. This is achieved by working with strategic partners that specialize in the beef industry.
                        Our technology is revolutionizing the way consumers purchase high quality products.
                    </p>

                    <div className='row'>
                        <div className="col-md-4 pt-3">
                            <img src={GR8Img2} alt="" className="rounded shadow-sm w-100" />
                        </div>
                        <div className="col-md-4 pt-3">
                            <img src={GR8Img3} alt="" className="rounded shadow-sm w-100" />
                        </div>
                        <div className="col-md-4 pt-3">
                            <img src={GR8Img4} alt="" className="rounded shadow-sm w-100" />
                        </div>
                        <div className="col-md-4 pt-3">
                            <img src={GR8Img5} alt="" className="rounded shadow-sm w-100" />
                        </div>
                        <div className="col-md-4 pt-3">
                            <img src={GR8Img6} alt="" className="rounded shadow-sm w-100" />
                        </div>
                    </div>

                </div>

                <div className="col-md-7 px-4">
                    <img src={GR8Img1} alt="" className="rounded shadow w-100" />
                </div>

            </div>

        </div>
    )
}

export default Work
