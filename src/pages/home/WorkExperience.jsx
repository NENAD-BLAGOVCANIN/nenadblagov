import React from 'react'
import singularityLogo from '../../assets/img/companies/singularity.png'
import upworkLogo from '../../assets/img/companies/upwork.webp'
import { ReactComponent as ImagePlaceholder } from '../../assets/img/illustrations/image-placeholder.svg'
import { useTranslation } from 'react-i18next'

function WorkExperience() {

    const { t } = useTranslation();

    return (
        <div className="py-4">

            <h1 className="mt-5 text-center bold pt-5">{t('workExperience.headline')}</h1>

            <div className="py-3">
                <div className="row py-3">
                    <span className="txt-light">2023 - 2024</span><br />
                    <div className="col-md-10">
                        <h5 className="fw-500 mb-3">Nexyo.ag - Full Stack Developer</h5>

                        <p className="txt-light text-justify">
                            {t('workExperience.nexyoWorkDescriptionPart1')}
                            <br /> <br />
                            {t('workExperience.nexyoWorkDescriptionPart2')}
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
                            {t('workExperience.empriumWorkDescription')}
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
                            {t('workExperience.singularityWorkDescription')}
                        </p>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center">
                        <img className="company-logo" src={singularityLogo} alt="" /><br />
                    </div>
                </div>
                <hr />
                <div className="row py-3">
                    <span className="txt-light">2021 - 2024</span><br />
                    <div className="col-md-10">
                        <h5 className="fw-500 mb-3">Freelance on Fiverr and Upwork - Full Stack Software Development</h5>

                        <p className="txt-light text-justify">
                            {t('workExperience.freelanceWorkDescription')}
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
