import React from 'react'
import { Facebook, Github, Google, Instagram, Linkedin, Phone } from 'react-bootstrap-icons'

function Contact() {
    return (
        <>
            <div className="container pt-5">

                <div className="row">

                    <div className="col-md-6 d-flex justify-content-center flex-column">
                        <h2 className="bold py-4">Contact Info</h2><br />

                        <span className="txt-light"><Phone /> Phone Number: <a href="tel:38766934835">+387 66 934 835</a></span><br />
                        <span className="txt-light"><Google /> Email: <a href="mailto:nenadblagovcanin2@gmail.com">nenadblagovcanin2@gmail.com</a></span><br />
                        <span className="txt-light"><Linkedin /> LinkedIn: <a target="_blank"
                            href="https://www.linkedin.com/in/nenad-blagovcanin/">https://www.linkedin.com/in/nenad-blagovcanin/</a></span><br />
                        <span className="txt-light"><Github /> GitHub: <a target="_blank"
                            href="https://github.com/NENAD-BLAGOVCANIN">https://github.com/NENAD-BLAGOVCANIN</a></span><br />
                        <span className="txt-light"><Instagram /> Instagram: <a target="_blank"
                            href="https://www.instagram.com/nenadblagov/">https://www.instagram.com/nenadblagov/</a></span><br />
                        <span className="txt-light"><Facebook /> Facebook: <a target="_blank"
                            href="https://www.facebook.com/profile.php?id=100082837047911">https://www.facebook.com/profile.php?id=100082837047911</a></span><br />
                    </div>

                    <div className="col-md-6">
                        <iframe className="rounded w-100 border-0"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23029.692140280516!2d18.347575512991085!3d43.82034291433192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c9b06f6b7eef%3A0xa1f4f1fb3b7ff36b!2sLukavica!5e0!3m2!1shr!2sba!4v1708834629727!5m2!1shr!2sba"
                            style={{ height: 550 }} allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Contact
