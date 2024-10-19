import React from 'react'

function About() {
    return (
        <div className="container py-5">

            <div className="row">
                <div className="col-md-6">
                    <h2 className="bold">About me</h2>
                    <p className="txt-light text-justify">Innovative software engineer with experience in
                        many areas of computer science. I had worked on
                        a large number of projects in app and web development. I am committed to working as a
                        collaborative and positive team member, striving to utilize my knowledge and expertise for
                        optimal engineering results.
                    </p>

                    <div className="row">
                        <div className="col-md-5">
                            <h5 className="mt-5 mb-3">Languages</h5>
                            <div className='d-flex flex-column'>
                                <span className="txt-light pb-3">English <span
                                    className="badge badge-circle bgc-success">C1</span></span>
                                <span className="txt-light pb-3">Serbian <span
                                    className="badge badge-circle bgc-success">Native</span></span>
                                <span className="txt-light pb-3">Bosnian <span
                                    className="badge badge-circle bgc-success">Native</span></span>
                                <span className="txt-light pb-3">Croatian <span
                                    className="badge badge-circle bgc-success">Native</span></span>

                            </div>
                        </div>
                        <div className="col-md-7">
                            <h5 className="mt-5 mb-3">FAQs</h5>
                            <div className='d-flex flex-column'>
                                <span className="txt-light pb-3">Available for remote work? <span
                                    className="badge badge-circle bgc-success">Yes</span></span>
                                <span className="txt-light pb-3">Available for a call? <span
                                    className="badge badge-circle bgc-success">Yes</span></span>
                                <span className="txt-light pb-3">Can you host the website yourself? <span
                                    className="badge badge-circle bgc-success">Yes</span></span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-md-6">

                    <iframe title='myLocation' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11515.679846991256!2d18.343423156758625!3d43.816019570745816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c9c25ecac5bd%3A0xa6e887f6b37b89c1!2sIsto%C4%8Dno%20Sarajevo!5e0!3m2!1shr!2sba!4v1729376423471!5m2!1shr!2sba"
                        width="600" height="450" className='border-0' />
                </div>
            </div>

        </div>
    )
}

export default About
