import React from 'react'

function About() {
    return (
        <>

            <div class="container py-5">

                <h2 class="bold">About me</h2>
                <span class="txt-light">Innovative software engineer with experience in
                    many areas of computer science. I had worked on
                    a large number of projects in app and web development. I am committed to working as a
                    collaborative and positive team member, striving to utilize my knowledge and expertise for
                    optimal engineering results.
                </span>

                <h4 class="mt-5 mb-3">Languages</h4>
                <div className='d-flex flex-column'>
                    <span class="txt-light pb-3">English <span
                        class="badge badge-circle bgc-success">C1</span></span>
                    <span class="txt-light pb-3">Serbian <span
                        class="badge badge-circle bgc-success">Native</span></span>
                    <span class="txt-light pb-3">Bosnian <span
                        class="badge badge-circle bgc-success">Native</span></span>
                    <span class="txt-light pb-3">Croatian <span
                        class="badge badge-circle bgc-success">Native</span></span>

                </div>



                <h4 class="mt-5">Location</h4>
                <div className='d-flex flex-column'>

                    <span class="txt-light">Lives in: Bosnia and Herzegovina.</span>
                    <span class="txt-light">City: Istocno Sarajevo</span>
                    <h4 class="mt-5">FAQs</h4>
                    <span class="txt-light pb-3">Available to work remotely? <span
                        class="badge badge-circle bgc-success">Yes</span></span>
                    <span class="txt-light pb-3">Available for a call? <span
                        class="badge badge-circle bgc-success">Yes</span></span>
                    <span class="txt-light pb-3">Available for a full time position? <span
                        class="badge badge-circle bgc-success">Yes</span></span>
                    <span class="txt-light pb-3">Can you host the website yourself? <span
                        class="badge badge-circle bgc-success">Yes</span></span>
                </div>
            </div>
        </>
    )
}

export default About
