import React from 'react'
import { useTranslation } from 'react-i18next'

function TechStack() {

    const { t } = useTranslation();

    return (
        <>
            <h2 className="mt-4">{t('techStack.headline')}</h2>

            <div className="row tech-stack-list">
                <div className="col-md-4 col-6">
                    <div className="card rounded my-2 rounded-lg shadow-sm p-3">
                        <span>Python</span>
                        <span className="txt-light small mb-3">{t('techStack.experienceLevel')}: {t('techStack.expert')}</span>
                        <div className="experience-level">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-6">
                    <div className="card rounded my-2 rounded-lg shadow-sm p-3">
                        <span>Django</span>
                        <span className="txt-light small mb-3">{t('techStack.experienceLevel')}: {t('techStack.expert')}</span>
                        <div className="experience-level">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-6">
                    <div className="card rounded my-2 rounded-lg shadow-sm p-3">
                        <span>Java</span>
                        <span className="txt-light small mb-3">{t('techStack.experienceLevel')}: {t('techStack.expert')}</span>
                        <div className="experience-level">
                            <div className="line bg-warning"></div>
                            <div className="line bg-warning"></div>
                            <div className="line bg-warning"></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-6">
                    <div className="card rounded my-2 rounded-lg shadow-sm p-3">
                        <span>PHP</span>
                        <span className="txt-light small mb-3">{t('techStack.experienceLevel')}: {t('techStack.expert')}</span>
                        <div className="experience-level">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-6">
                    <div className="card rounded my-2 rounded-lg shadow-sm p-3">
                        <span>JavaScript</span>
                        <span className="txt-light small mb-3">{t('techStack.experienceLevel')}: {t('techStack.expert')}</span>
                        <div className="experience-level">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-6">
                    <div className="card rounded my-2 rounded-lg shadow-sm p-3">
                        <span>C#</span>
                        <span className="txt-light small mb-3">{t('techStack.experienceLevel')}: {t('techStack.intermediate')}</span>
                        <div className="experience-level">
                            <div className="line bg-warning"></div>
                            <div className="line bg-warning"></div>
                            <div className="line bg-warning"></div>
                        </div>
                    </div>

                </div>
                <div className="col-md-4 col-6">
                    <div className="card rounded my-2 rounded-lg shadow-sm p-3">
                        <span>Next.js</span>
                        <span className="txt-light small mb-3">{t('techStack.experienceLevel')}: {t('techStack.expert')}</span>
                        <div className="experience-level">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-6">
                    <div className="card rounded my-2 rounded-lg shadow-sm p-3">
                        <span>Laravel</span>
                        <span className="txt-light small mb-3">{t('techStack.experienceLevel')}: {t('techStack.expert')}</span>
                        <div className="experience-level">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-6">
                    <div className="card rounded my-2 rounded-lg shadow-sm p-3">
                        <span>Electron.JS</span>
                        <span className="txt-light small mb-3">{t('techStack.experienceLevel')}: {t('techStack.intermediate')}</span>
                        <div className="experience-level">
                            <div className="line bg-warning"></div>
                            <div className="line bg-warning"></div>
                            <div className="line bg-warning"></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-6">
                    <div className="card rounded my-2 rounded-lg shadow-sm p-3">
                        <span>React JS</span>
                        <span className="txt-light small mb-3">{t('techStack.experienceLevel')}: {t('techStack.expert')}</span>
                        <div className="experience-level">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-6">
                    <div className="card rounded my-2 rounded-lg shadow-sm p-3">
                        <span>.NET Core</span>
                        <span className="txt-light small mb-3">{t('techStack.experienceLevel')}: {t('techStack.expert')}</span>
                        <div className="experience-level">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-6">
                    <div className="card rounded my-2 rounded-lg shadow-sm p-3">
                        <span>MongoDB</span>
                        <span className="txt-light small mb-3">{t('techStack.experienceLevel')}: {t('techStack.intermediate')}</span>
                        <div className="experience-level">
                            <div className="line bg-warning"></div>
                            <div className="line bg-warning"></div>
                            <div className="line bg-warning"></div>
                        </div>
                    </div>

                </div>
                <div className="col-md-4 col-6">
                    <div className="card rounded my-2 rounded-lg shadow-sm p-3">
                        <span>Angular</span>
                        <span className="txt-light small mb-3">{t('techStack.experienceLevel')}: {t('techStack.intermediate')}</span>
                        <div className="experience-level">
                            <div className="line bg-warning"></div>
                            <div className="line bg-warning"></div>
                            <div className="line bg-warning"></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-6">
                    <div className="card rounded my-2 rounded-lg shadow-sm p-3">
                        <span>Livewire</span>
                        <span className="txt-light small mb-3">{t('techStack.experienceLevel')}: {t('techStack.expert')}</span>
                        <div className="experience-level">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-6">
                    <div className="card rounded my-2 rounded-lg shadow-sm p-3">
                        <span>MySQL</span>
                        <span className="txt-light small mb-3">{t('techStack.experienceLevel')}: {t('techStack.expert')}</span>
                        <div className="experience-level">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-6">
                    <div className="card rounded my-2 rounded-lg shadow-sm p-3">
                        <span>Yii2</span>
                        <span className="txt-light small mb-3">{t('techStack.experienceLevel')}: {t('techStack.expert')}</span>
                        <div className="experience-level">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-6">
                    <div className="card rounded my-2 rounded-lg shadow-sm p-3">
                        <span>Flask</span>
                        <span className="txt-light small mb-3">{t('techStack.experienceLevel')}: {t('techStack.expert')}</span>
                        <div className="experience-level">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-6">
                    <div className="card rounded my-2 rounded-lg shadow-sm p-3">
                        <span>Nuxt.js</span>
                        <span className="txt-light small mb-3">{t('techStack.experienceLevel')}: {t('techStack.intermediate')}</span>
                        <div className="experience-level">
                            <div className="line bg-warning"></div>
                            <div className="line bg-warning"></div>
                            <div className="line bg-warning"></div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default TechStack
