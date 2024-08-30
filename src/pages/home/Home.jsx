import React from 'react'
import myPicture from '../../assets/img/profile-pic-4.webp'
import Footer from '../../components/layout/Footer'
import styles from './Home.module.css'
import TechStack from './TechStack'
import WorkExperience from './WorkExperience'


function Home() {
    return (
        <>

            <div className={styles.homeMainWrapper}>

                <div className="container pt-5 mt-4">

                    <div className="row m-0 flex-md-row flex-column-reverse">

                        <div className="col-md-6">
                            <div>
                                <h1 className='bold text-justify'>
                                    Innovative Full Stack Software Developer: Let's turn your ideas into reality.
                                </h1>

                                <h5 className="text-secondary text-justify fw-400 py-4">
                                    Innovative software engineer with experience in many areas of computer science. I had worked on
                                    a large number of projects in mobile and web development. I am committed to working as a
                                    collaborative and positive team member, striving to utilize my knowledge and expertise for
                                    optimal engineering results.
                                </h5>

                                <div className="d-flex justify-content-center align-items-center justify-content-md-start pt-4">
                                    <a href="/contact" className="btn btn-primary rounded-large fw-500 px-5 py-3">Contact me</a>
                                    <div className='d-flex align-items-center px-3'>
                                        <div className='online-status-badge'></div>
                                        <span className='ps-2'>Currently available for work</span>
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
