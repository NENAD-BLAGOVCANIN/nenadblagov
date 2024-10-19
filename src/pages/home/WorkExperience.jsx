import React from 'react'
import singularityLogo from '../../assets/img/companies/singularity.png'
import upworkLogo from '../../assets/img/companies/upwork.webp'
import { ReactComponent as ImagePlaceholder } from '../../assets/img/illustrations/image-placeholder.svg'

function WorkExperience() {
    return (
        <div className="py-4">

            <h1 className="mt-5 text-center bold pt-5">Work experience</h1>

            <div className="py-3">
                <div className="row py-3">
                    <span className="txt-light">2023 - 2024</span><br />
                    <div className="col-md-10">
                        <h5 className="fw-500 mb-3">Nexyo.ag - Full Stack Developer</h5>

                        <p className="txt-light text-justify">
                            In 2024 I worked as a full stack software developer for a company called Nexyo.ag and with their partners Beebucket.
                            I built their frontend application using ReactJS, and worked with ElasticSearch as our backend. I implemented searching functionality
                            and filtering functionalities on the project.
                            <br /> <br />
                            I had a very good time working with these guys, and with their permission I might share the link to the project in the future.
                        </p>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center">
                        <ImagePlaceholder />
                    </div>
                </div>
                <hr />
                <div className="row py-3">
                    <span className="txt-light">2023 - 2024</span><br />
                    <div className="col-md-10">
                        <h5 className="fw-500 mb-3">Emprium.au - Django Developer</h5>

                        <p className="txt-light text-justify">
                            In 2023 I created a startup called Multiverzum.com which is an eCommerce platform where
                            anyone can sign up and start shopping and selling products. The platform
                            also has many other features that allow shop owners to promote their products and even their
                            physical store. I developed the website using Python Django and the mobile
                            app with React Native.
                        </p>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center">
                        <ImagePlaceholder />
                    </div>
                </div>
                <hr />
                <div className="row py-3">
                    <span className="txt-light">2022 - 2023</span><br />
                    <div className="col-md-10">
                        <h5 className="fw-500 mb-3">Singularity Istocno Sarajevo - Full Stack Software Developer</h5>

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
                <hr />
                <div className="row py-3">
                    <span className="txt-light">2023 - 2024</span><br />
                    <div className="col-md-10">
                        <h5 className="fw-500 mb-3">Freelance on Fiverr and Upwork - Full Stack Software Development</h5>

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
                        <img className="company-logo" src={upworkLogo} alt="" /><br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkExperience
