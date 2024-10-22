import React from 'react'
import { Braces, Display, Folder, Palette, Phone, Smartwatch } from 'react-bootstrap-icons'

function WhatIDo() {
    return (
        <div className="py-4">

            <h1 className="text-center bold py-5">What I Do?</h1>

            <div className="row">
                <div className="col-md-4 mb-3">
                    <div className="card px-3 py-5 h-100">
                        <Display className='h2 mb-3 text-primary m-auto' />
                        <h5 className='bold text-center'>Frontend Development</h5>
                        <p className='txt-light text-center mb-0'>I create clean, responsive web interfaces that not only look good but are easy to use. My focus is on delivering a smooth, seamless experience for users across all devices.</p>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card px-3 py-5 h-100">
                        <Braces className='h2 mb-3 text-primary m-auto' />
                        <h5 className='bold text-center'>Backend (API) Development</h5>
                        <p className='txt-light text-center mb-0'>I build the backbone of web applications, ensuring that data flows securely and efficiently. Whether it's an API or complex server logic, I make sure everything runs smoothly behind the scenes.</p>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card px-3 py-5 h-100">
                        <Folder className='h2 mb-3 text-primary m-auto' />
                        <h5 className='bold text-center'>System Architecture</h5>
                        <p className='txt-light text-center mb-0'>I design the big picture, making sure systems are built to handle growth and change. From planning to execution, I focus on creating solid foundations that can scale and adapt over time.</p>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card px-3 py-5 h-100">
                        <Palette className='h2 mb-3 text-primary m-auto' />
                        <h5 className='bold text-center'>UI/UX</h5>
                        <p className='txt-light text-center mb-0'>I blend creativity with usability to design intuitive and visually appealing user experiences. My goal is to make things look great and work even better, keeping users happy every step of the way.</p>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card px-3 py-5 h-100">
                        <Phone className='h2 mb-3 text-primary m-auto' />
                        <h5 className='bold text-center'>Mobile Development</h5>
                        <p className='txt-light text-center mb-0'>I develop apps that feel right at home on both iOS and Android, focusing on user-friendly designs and smooth performance. Whether it’s for business or fun, I create mobile experiences that people love.</p>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card px-3 py-5 h-100">
                        <Smartwatch className='h2 mb-3 text-primary m-auto' />
                        <h5 className='bold text-center'>Smart Automation</h5>
                        <p className='txt-light text-center mb-0'>I help businesses work smarter by automating repetitive tasks and processes. From simple scripts to complex workflows, I build solutions that save time and increase efficiency.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WhatIDo
