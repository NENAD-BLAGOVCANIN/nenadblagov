import React from 'react'
import gr8Image1 from '../../assets/img/projects/gr8-1.png'
import gr8Image2 from '../../assets/img/projects/gr8-2.png'
import gr8Image3 from '../../assets/img/projects/gr8-3.png'
import gr8Image4 from '../../assets/img/projects/gr8-4.png'
import gr8Image5 from '../../assets/img/projects/gr8-5.png'
import gr8Image6 from '../../assets/img/projects/gr8-6.png'
import multiverzum1 from '../../assets/img/projects/multiverzum-1.png'
import multiverzum2 from '../../assets/img/projects/multiverzum-2.png'
import multiverzum3 from '../../assets/img/projects/multiverzum-3.png'
import multiverzum4 from '../../assets/img/projects/multiverzum-4.png'
import multiverzum5 from '../../assets/img/projects/multiverzum-5.png'
import advaise1 from '../../assets/img/projects/advaise-1.png'
import advaise2 from '../../assets/img/projects/advaise-2.png'
import advaise3 from '../../assets/img/projects/advaise-3.png'
import advaise4 from '../../assets/img/projects/advaise-4.png'

function Work() {
    return (
        <div class="container py-4">

            <h2 class="pt-5">
                GR8 City RP
            </h2>

            <div id="gr8" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div>
                            <img class="d-block w-100" src={gr8Image1} alt="First slide" />
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div>
                            <img class="d-block w-100" src={gr8Image2} alt="First slide" />
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div>
                            <img class="d-block w-100" src={gr8Image5} alt="First slide" />
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div>
                            <img class="d-block w-100" src={gr8Image3} alt="First slide" />
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div>
                            <img class="d-block w-100" src={gr8Image4} alt="First slide" />
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div>
                            <img class="d-block w-100" src={gr8Image6} alt="First slide" />
                        </div>
                    </div>

                </div>
                <a class="carousel-control-prev" href="#gr8" role="button" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                </a>
                <a class="carousel-control-next" href="#gr8" role="button" data-bs-slide="next">
                    <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                </a>
            </div>

            <p class="pt-3">In 2023 I developed a website for a gaming roleplay community called <b>GR8 CITY RP</b>.
                The website was primarily designed as a place where admins can manage access to their RP servers by making
                the potential members answer questions in the form
                of an application that they would submit. Admins would then take a look at the received applications and
                decide who they will allow to join their servers. Users would be notified about
                the result/response of their application. If rejected, users would also receive feedback from the admin on
                why the user was rejected.
            </p>

            <p>
                Later on, I expanded the functionality of the website by adding the option for admins to manually create
                multiple applications for different types of access.
                After that, my clients decided that they want to add another RP community to their website, so they asked me
                to seperate the application into communities (kind of like discord servers or facebook groups).
                So now, the application also offers the possibility of creating multiple communities where each community
                has their own applications by which they
                can easily manage their user access. Communities have customizable themes, descriptions, names etc...
            </p>

            <p>
                Checkout the website on: <a target="_blank"
                    href="https://test.gr8cityrp.com/">https://test.gr8cityrp.com/</a>
            </p>

            <h2 class="pt-5">
                Multiverzum.com
            </h2>

            <div id="multiverzum" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div>
                            <img class="d-block w-100" src={multiverzum1} alt="First slide" />
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div>
                            <img class="d-block w-100" src={multiverzum2} alt="First slide" />
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div>
                            <img class="d-block w-100" src={multiverzum3} alt="First slide" />
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div>
                            <img class="d-block w-100" src={multiverzum4} alt="First slide" />
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div>
                            <img class="d-block w-100" src={multiverzum5} alt="First slide" />
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#multiverzum" role="button" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                </a>
                <a class="carousel-control-next" href="#multiverzum" role="button" data-bs-slide="next">
                    <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                </a>
            </div>

            <p class="pt-3">In 2022 I developed an eCommerce website where anyone can create an account and immediately start buying or selling items online. The website is still active and
                users inside of Bosnia and Herzegovina are using this website for online shopping. The company is still in startup phase and its planning to expand shipping to other countries
                as well soon.
            </p>

            <p>
                Checkout the website on: <a target="_blank"
                    href="https://multiverzum.com/">https://multiverzum.com/</a>
            </p>

            <h2 class="pt-5">
                Advaise.net
            </h2>

            <div id="advaise" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div>
                            <img class="d-block w-100" src={advaise1} alt="First slide" />
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div>
                            <img class="d-block w-100" src={advaise2} alt="First slide" />
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div>
                            <img class="d-block w-100" src={advaise3} alt="First slide" />
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div>
                            <img class="d-block w-100" src={advaise4} alt="First slide" />
                        </div>
                    </div>

                </div>
                <a class="carousel-control-prev" href="#advaise" role="button" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                </a>
                <a class="carousel-control-next" href="#advaise" role="button" data-bs-slide="next">
                    <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                </a>
            </div>

            <p class="pt-3">
                Advaise.net is a startup that offers AI tools to other businesses so they can manage their data more efficiently. I was highered by this startup to create their landing page, authentication system,
                blogs and auth api endpoints. I built the application with python django framework. Used bootstrap.css for styling the UI. And a mysql database for storing data. I also helped deploy this application to their Google Cloud Servers and I helped them integrade my python landing app with their main application.
            </p>

            <p>
                Checkout the website on: <a target="_blank"
                    href="https://advaise.net/">https://advaise.net/</a>
            </p>

        </div>

    )
}

export default Work
