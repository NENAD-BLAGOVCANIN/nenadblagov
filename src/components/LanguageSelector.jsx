import React from 'react';
import { useTranslation } from 'react-i18next';
import Dropdown from 'react-bootstrap/Dropdown';
import { ChevronDown } from 'react-bootstrap-icons';

function LanguageSelector() {
    const { i18n } = useTranslation();

    const lngs = {
        en: { nativeName: 'English' },
        sr: { nativeName: 'Serbian' },
        de: { nativeName: 'German' },
        it: { nativeName: 'Italian' },
    };

    return (
        <Dropdown className="ps-3">
            <Dropdown.Toggle variant="basic" className='bg-transparent text-main' id="language-dropdown">
                {lngs[i18n.language]?.nativeName || i18n.language} <ChevronDown />
            </Dropdown.Toggle>

            <Dropdown.Menu className='border-0 shadow mt-3'>
                {Object.keys(lngs).map((lng) => (
                    <Dropdown.Item
                        key={lng}
                        onClick={() => i18n.changeLanguage(lng)}
                    >
                        {lngs[lng].nativeName}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default LanguageSelector;
