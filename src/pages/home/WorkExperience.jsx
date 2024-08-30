import React from 'react'
import multiverzumLogo from '../../assets/img/multiverzum.png'
import singularityLogo from '../../assets/img/singularity.png'
import fiverrLogo from '../../assets/img/fiverr.png'

function WorkExperience() {
    return (
        <>
            <div className="py-4">

                <h2 className="mt-5">Work experience</h2>

                <div className="py-3">
                    <div className="row py-3">
                        <span className="txt-light">2023 - 2024</span><br />
                        <div className="col-md-10">
                            <h5 className="fw-500">Multiverzum - Founder and CEO</h5>

                            <p className="txt-light text-justify">
                                In 2023 I created a startup called Multiverzum.com which is an eCommerce platform where
                                anyone can sign up and start shopping and selling products. The platform
                                also has many other features that allow shop owners to promote their products and even their
                                physical store. I developed the website using Python Django and the mobile
                                app with React Native.
                            </p>
                        </div>
                        <div className="col-md-2 d-flex justify-content-center align-items-center">
                            <img className="company-logo" src={multiverzumLogo} alt="" /><br />
                        </div>
                    </div>
                    <div className="row py-3">
                        <span className="txt-light">2022 - 2023</span><br />
                        <div className="col-md-10">
                            <h5 className="fw-500">Singularity Istocno Sarajevo - Full Stack Software Developer</h5>

                            <p className="txt-light text-justify">
                                During my time at Singularity.is, I contributed to several high-profile projects that
                                required
                                strong problem-solving skills, attention to detail, and the ability to work collaboratively
                                with
                                cross-functional teams. For example, I was instrumental in developing a real-time chat
                                application
                                using React, Node.js, and Socket.io that allowed users to communicate with each other
                                seamlessly.
                            </p>
                        </div>
                        <div className="col-md-2 d-flex justify-content-center align-items-center">
                            <img className="company-logo" src={singularityLogo} alt="" /><br />
                        </div>
                    </div>
                    <div className="row py-3">
                        <span className="txt-light">2023 - 2024</span><br />
                        <div className="col-md-10">
                            <h5 className="fw-500">Freelance on Fiverr and Upwork - Full Stack Software Development</h5>

                            <p className="txt-light text-justify">
                                As a freelance full-stack web developer on Fiverr, I successfully collaborated with diverse
                                clients
                                to deliver tailored web solutions. Proficient in both front-end and back-end development, I
                                designed
                                and implemented responsive, user-friendly websites that met the unique requirements of each
                                project.
                                My responsibilities included understanding client needs, proposing technical solutions, and
                                delivering high-quality code within specified timelines. I honed my skills in
                                problem-solving,
                                communication, and adaptability while managing multiple projects simultaneously. This
                                experience not
                                only expanded my technical expertise but also enhanced my ability to thrive in a dynamic and
                                client-centric environment.
                            </p>
                        </div>
                        <div className="col-md-2 d-flex justify-content-center align-items-center">
                            <img className="company-logo" src={fiverrLogo} alt="" /><br />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkExperience
