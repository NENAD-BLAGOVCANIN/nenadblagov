import React from 'react'

function Footer() {
    return (
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
    )
}

export default Footer
