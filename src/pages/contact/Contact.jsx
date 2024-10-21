import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css'
import { useTranslation } from 'react-i18next';

function Contact() {

    const { t } = useTranslation();

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
        <div className={styles.contactPageWrapper}>
            <div className="pt-5 mt-4 d-flex justify-content-center">

                <div className='shadow rounded-large card p-5 w-100' style={{ maxWidth: 750 }}>
                    <h2 className='bold mb-3'>{t('contact.headline')}</h2>
                    <p>{t('contact.subtext')}</p>

                    <form ref={form} onSubmit={sendEmail}>
                        <label className='mt-4 mb-1 ms-1 fw-500'>{t('contact.name')} <span className='text-danger'>*</span> </label>
                        <input className='form-control' placeholder={t('contact.name')} type="text" name="user_name" />
                        <label className='mt-4 mb-1 ms-1 fw-500'>{t('contact.email')} <span className='text-danger'>*</span> </label>
                        <input className='form-control' placeholder={t('contact.email')} type="email" name="user_email" />
                        <label className='mt-4 mb-1 ms-1 fw-500'>{t('contact.message')} <span className='text-danger'>*</span> </label>
                        <textarea name="message" className='form-control' placeholder={t('contact.messagePlaceholder')} />
                        <button className='btn btn-primary rounded w-100 mt-5 bold' style={{ padding: '.7rem .6rem' }} type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact