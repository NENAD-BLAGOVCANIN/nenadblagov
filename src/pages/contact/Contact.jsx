import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_ttijka9', 'template_jyp9fu7', form.current, {
                publicKey: 'Kr8YzIphHjT0MuHXZ',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className="pt-5 mt-4 d-flex justify-content-center">

            <div className='shadow rounded-large bg-white p-5 w-100' style={{ maxWidth: 750 }}>
                <h2 className='bold mb-3'>Let's work together!</h2>
                <p>Feel free to contact me and I'll reply very soon</p>

                <form ref={form} onSubmit={sendEmail}>
                    <label className='mt-4 mb-1 ms-1 fw-500'>Name <span className='text-danger'>*</span> </label>
                    <input className='form-control' placeholder='Name' type="text" name="user_name" />
                    <label className='mt-4 mb-1 ms-1 fw-500'>Email <span className='text-danger'>*</span> </label>
                    <input className='form-control' placeholder='Email' type="email" name="user_email" />
                    <label className='mt-4 mb-1 ms-1 fw-500'>Message <span className='text-danger'>*</span> </label>
                    <textarea name="message" className='form-control' placeholder='Write your message...' />
                    <button className='btn btn-primary rounded w-100 mt-3 bold' style={{padding: '.7rem .6rem'}} type="submit">Submit</button>
                </form>
            </div>


        </div>
    );
};

export default Contact