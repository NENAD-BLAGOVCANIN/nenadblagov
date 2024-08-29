import React from 'react'
import logo from '../../assets/img/logo.png'
import myPicture from '../../assets/img/profile-pic.png'

function Home() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-transparent justify-content-center">
                <button class="navbar-toggler btn bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon text-white"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav m-auto justify-content-center">
                        <li>
                            <a class="d-flex align-items-center h-100 logo-image-wrapper" href="/">
                                <img id="logo-image" src={logo} alt="" />
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="work.html">My Work</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact.html">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="about.html">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="cv.html">CV</a>
                        </li>
                    </ul>
                </div>
            </nav>


            <div class="container">

                <div class="row flex-md-row flex-column-reverse">

                    <div class="col-md-7">
                        <div class="pt-5">
                            <h1>
                                Innovative Full Stack Software Developer: Let's turn your ideas into reality.
                            </h1>

                            <h5 class="text-secondary py-4">
                                Innovative software engineer with experience in many areas of computer science. I had worked on
                                a large number of projects in mobile and web development. I am committed to working as a
                                collaborative and positive team member, striving to utilize my knowledge and expertise for
                                optimal engineering results.
                            </h5>

                            <div class="d-flex justify-content-center justify-content-md-start pt-4">
                                <a href="work.html" class="btn btn-primary rounded-large fw-500 px-5 py-2">View My Work</a>
                            </div>

                        </div>

                    </div>

                    <div class="col-md-5 d-flex justify-content-center pt-5">
                        <div class="rounded-circle">
                            <img src={myPicture} style={{ maxWidth: 350, height: 'fit-content' }}
                                class="img-fluid rounded-circle shadow-lg" alt="" id="my-picture" />
                        </div>
                    </div>

                </div>

            </div>


            <div class="container py-4">
                <h2 class="mt-4">Tech Stack</h2>

                <div class="row tech-stack-list">
                    <div class="col-md-4 col-6">
                        <div class="rounded my-2 bg-dark rounded-lg p-3">
                            <span>Python</span><br />
                            <span class="txt-light">Experience level: Expert</span>
                            <div class="experience-level">
                                <div class="line"></div>
                                <div class="line"></div>
                                <div class="line"></div>
                                <div class="line"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-6">
                        <div class="rounded my-2 bg-dark rounded-lg p-3">
                            <span>Django</span><br />
                            <span class="txt-light">Experience level: Expert</span>
                            <div class="experience-level">
                                <div class="line"></div>
                                <div class="line"></div>
                                <div class="line"></div>
                                <div class="line"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-6">
                        <div class="rounded my-2 bg-dark rounded-lg p-3">
                            <span>Java</span><br />
                            <span class="txt-light">Experience level: Expert</span>
                            <div class="experience-level">
                                <div class="line bg-warning"></div>
                                <div class="line bg-warning"></div>
                                <div class="line bg-warning"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-6">
                        <div class="rounded my-2 bg-dark rounded-lg p-3">
                            <span>PHP</span><br />
                            <span class="txt-light">Experience level: Expert</span>
                            <div class="experience-level">
                                <div class="line"></div>
                                <div class="line"></div>
                                <div class="line"></div>
                                <div class="line"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-6">
                        <div class="rounded my-2 bg-dark rounded-lg p-3">
                            <span>JavaScript</span><br />
                            <span class="txt-light">Experience level: Expert</span>
                            <div class="experience-level">
                                <div class="line"></div>
                                <div class="line"></div>
                                <div class="line"></div>
                                <div class="line"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-6">
                        <div class="rounded my-2 bg-dark rounded-lg p-3">
                            <span>C#</span><br />
                            <span class="txt-light">Experience level: Intermediate</span>
                            <div class="experience-level">
                                <div class="line bg-warning"></div>
                                <div class="line bg-warning"></div>
                                <div class="line bg-warning"></div>
                            </div>
                        </div>

                    </div>
                    <div class="col-md-4 col-6">
                        <div class="rounded my-2 bg-dark rounded-lg p-3">
                            <span>Next.js</span><br />
                            <span class="txt-light">Experience level: Expert</span>
                            <div class="experience-level">
                                <div class="line"></div>
                                <div class="line"></div>
                                <div class="line"></div>
                                <div class="line"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-6">
                        <div class="rounded my-2 bg-dark rounded-lg p-3">
                            <span>Laravel</span><br />
                            <span class="txt-light">Experience level: Expert</span>
                            <div class="experience-level">
                                <div class="line"></div>
                                <div class="line"></div>
                                <div class="line"></div>
                                <div class="line"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-6">
                        <div class="rounded my-2 bg-dark rounded-lg p-3">
                            <span>Electron.JS</span><br />
                            <span class="txt-light">Experience level: Intermediate</span>
                            <div class="experience-level">
                                <div class="line bg-warning"></div>
                                <div class="line bg-warning"></div>
                                <div class="line bg-warning"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-6">
                        <div class="rounded my-2 bg-dark rounded-lg p-3">
                            <span>React JS</span><br />
                            <span class="txt-light">Experience level: Expert</span>
                            <div class="experience-level">
                                <div class="line"></div>
                                <div class="line"></div>
                                <div class="line"></div>
                                <div class="line"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-6">
                        <div class="rounded my-2 bg-dark rounded-lg p-3">
                            <span>.NET Core</span><br />
                            <span class="txt-light">Experience level: Expert</span>
                            <div class="experience-level">
                                <div class="line"></div>
                                <div class="line"></div>
                                <div class="line"></div>
                                <div class="line"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-6">
                        <div class="rounded my-2 bg-dark rounded-lg p-3">
                            <span>MongoDB</span><br />
                            <span class="txt-light">Experience level: Intermediate</span>
                            <div class="experience-level">
                                <div class="line bg-warning"></div>
                                <div class="line bg-warning"></div>
                                <div class="line bg-warning"></div>
                            </div>
                        </div>

                    </div>
                    <div class="col-md-4 col-6">
                        <div class="rounded my-2 bg-dark rounded-lg p-3">
                            <span>Angular</span><br />
                            <span class="txt-light">Experience level: Intermediate</span>
                            <div class="experience-level">
                                <div class="line bg-warning"></div>
                                <div class="line bg-warning"></div>
                                <div class="line bg-warning"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-6">
                        <div class="rounded my-2 bg-dark rounded-lg p-3">
                            <span>Livewire</span><br />
                            <span class="txt-light">Experience level: Expert</span>
                            <div class="experience-level">
                                <div class="line"></div>
                                <div class="line"></div>
                                <div class="line"></div>
                                <div class="line"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-6">
                        <div class="rounded my-2 bg-dark rounded-lg p-3">
                            <span>MySQL</span><br />
                            <span class="txt-light">Experience level: Expert</span>
                            <div class="experience-level">
                                <div class="line"></div>
                                <div class="line"></div>
                                <div class="line"></div>
                                <div class="line"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-6">
                        <div class="rounded my-2 bg-dark rounded-lg p-3">
                            <span>Yii2</span><br />
                            <span class="txt-light">Experience level: Expert</span>
                            <div class="experience-level">
                                <div class="line"></div>
                                <div class="line"></div>
                                <div class="line"></div>
                                <div class="line"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-6">
                        <div class="rounded my-2 bg-dark rounded-lg p-3">
                            <span>Flask</span><br />
                            <span class="txt-light">Experience level: Expert</span>
                            <div class="experience-level">
                                <div class="line"></div>
                                <div class="line"></div>
                                <div class="line"></div>
                                <div class="line"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-6">
                        <div class="rounded my-2 bg-dark rounded-lg p-3">
                            <span>Nuxt.js</span><br />
                            <span class="txt-light">Experience level: Intermediate</span>
                            <div class="experience-level">
                                <div class="line bg-warning"></div>
                                <div class="line bg-warning"></div>
                                <div class="line bg-warning"></div>
                            </div>
                        </div>
                    </div>


                </div>

                <div class="py-4">

                    <h2 class="mt-5">Work experience</h2>

                    <div class="py-3">
                        <div class="row py-3">
                            <span class="txt-light">2023 - 2024</span><br />
                            <div class="col-md-11">
                                <h4 class="fw-500">Multiverzum - Founder and CEO</h4>

                                <span class="txt-light">
                                    In 2023 I created a startup called Multiverzum.com which is an eCommerce platform where
                                    anyone can sign up and start shopping and selling products. The platform
                                    also has many other features that allow shop owners to promote their products and even their
                                    physical store. I developed the website using Python Django and the mobile
                                    app with React Native.
                                </span>
                            </div>
                            <div class="col-md-1 d-flex justify-content-center align-items-center">
                                <img class="company-logo" src="/assets/img/multiverzum.png" alt="" /><br />
                            </div>
                        </div>
                        <div class="row py-3">
                            <span class="txt-light">2022 - 2023</span><br />
                            <div class="col-md-11">
                                <h4 class="fw-500">Singularity Istocno Sarajevo - Full Stack Software Developer</h4>

                                <span class="txt-light">
                                    During my time at Singularity.is, I contributed to several high-profile projects that
                                    required
                                    strong problem-solving skills, attention to detail, and the ability to work collaboratively
                                    with
                                    cross-functional teams. For example, I was instrumental in developing a real-time chat
                                    application
                                    using React, Node.js, and Socket.io that allowed users to communicate with each other
                                    seamlessly.
                                </span>
                            </div>
                            <div class="col-md-1 d-flex justify-content-center align-items-center">
                                <img class="company-logo" src="/assets/img/singularity.png" alt="" /><br />
                            </div>
                        </div>
                        <div class="row py-3">
                            <span class="txt-light">2023 - 2024</span><br />
                            <div class="col-md-11">
                                <h4 class="fw-500">Freelance on Fiverr and Upwork - Full Stack Software Development</h4>

                                <span class="txt-light">
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
                                </span>
                            </div>
                            <div class="col-md-1 d-flex justify-content-center align-items-center">
                                <img class="company-logo" src="/assets/img/fiverr.png" alt="" /><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer class="mt-5">
                <div class="container">
                    <div class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
                        <p class="col-md-4 mb-0 txt-light">Nenad Blagovčanin</p>

                        <a href="/"
                            class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                            <img src="/assets/img/logo.png" style={{ maxHeight: 45 }} class="h-100" alt="" />
                        </a>

                        <ul class="nav col-md-4 justify-content-end">
                            <li class="nav-item"><a href="/" class="nav-link px-2 txt-light">Home</a></li>
                            <li class="nav-item"><a href="work.html" class="nav-link px-2 txt-light">My Work</a></li>
                            <li class="nav-item"><a href="contact.html" class="nav-link px-2 txt-light">Contact</a></li>
                            <li class="nav-item"><a href="about.html" class="nav-link px-2 txt-light">About</a></li>
                            <li class="nav-item"><a href="cv.html" class="nav-link px-2 txt-light">CV</a></li>
                        </ul>
                    </div>

                </div>

            </footer>
        </>
    )
}

export default Home
